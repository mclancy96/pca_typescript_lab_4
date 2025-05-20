import { expect } from "chai";
import * as ts from "typescript";
import { readFileSync } from "fs";
import { join } from "path";
import vm from "vm";

describe("Lab 4 — Section 5 (Bonus): Interface vs Type", () => {
  let context: any = {};

  before(() => {
    const filePath = join(
      __dirname,
      "../src/section5_bonus_interface_vs_type.ts"
    );
    const tsCode = readFileSync(filePath, "utf8");
    const jsCode = ts.transpile(tsCode);
    vm.createContext(context);
    vm.runInContext(jsCode, context);
  });

  it("should define a shape using both interface and type", () => {
    const shapeA = context.shapeA;
    const shapeB = context.shapeB;
    expect(shapeA?.width).to.be.a("number");
    expect(shapeA?.height).to.be.a("number");
    expect(shapeB?.width).to.be.a("number");
    expect(shapeB?.height).to.be.a("number");
  });
});
