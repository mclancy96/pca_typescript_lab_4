import { expect } from "chai";
import * as ts from "typescript";
import { readFileSync } from "fs";
import { join } from "path";
import vm from "vm";

describe("Lab 4 — Section 4: Enums", () => {
  let context: any = {};

  before(() => {
    const filePath = join(__dirname, "../src/section4_enums.ts");
    const tsCode = readFileSync(filePath, "utf8");
    const jsCode = ts.transpile(tsCode);
    vm.createContext(context);
    vm.runInContext(jsCode, context);
  });

  it("should define a function 'move' that returns a movement message", () => {
    const result = context.move?.(context.Direction?.Up);
    expect(result).to.be.a("string");
    expect(result.toLowerCase()).to.include("up");
  });
});
