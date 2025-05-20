import { expect } from "chai";
import * as ts from "typescript";
import { readFileSync } from "fs";
import { join } from "path";
import vm from "vm";
import * as type_annotation from "chai_typescript_type_annotation_tests";

describe("Lab 4 — Section 5 (Bonus): Interface vs Type", () => {
  let context: any = {};
  const filePath = join(
    __dirname,
    "../src/section5_bonus_interface_vs_type.ts"
  );

  before(() => {
    const tsCode = readFileSync(filePath, "utf8");
    const jsCode = ts.transpile(tsCode);
    vm.createContext(context);
    vm.runInContext(jsCode, context);
  });

  it("should define a ShapeInterface interface", () => {
    const sourceCode = readFileSync(filePath, "utf8");
    expect(sourceCode).to.include(
      "interface ShapeInterface",
      "ShapeInterface is missing"
    );
    expect(sourceCode).to.match(
      /interface\s+ShapeInterface/,
      "ShapeInterface declaration is malformed"
    );
    expect(sourceCode).to.match(
      /width\s*:\s*number/,
      "ShapeInterface should have a width property of type number"
    );
    expect(sourceCode).to.match(
      /height\s*:\s*number/,
      "ShapeInterface should have a height property of type number"
    );
  });

  it("should define a ShapeType type alias", () => {
    const sourceCode = readFileSync(filePath, "utf8");
    expect(sourceCode).to.include("type ShapeType", "ShapeType is missing");
    expect(sourceCode).to.match(
      /type\s+ShapeType/,
      "ShapeType declaration is malformed"
    );
    expect(sourceCode).to.match(
      /width\s*:\s*number/,
      "ShapeType should have a width property of type number"
    );
    expect(sourceCode).to.match(
      /height\s*:\s*number/,
      "ShapeType should have a height property of type number"
    );
  });

  type_annotation.expectVariableExplicitTypeAnnotation(
    filePath,
    "shapeA",
    "ShapeInterface"
  );

  it("should define shapeB using an interface", () => {
    const shapeA = context.shapeA;
    expect(shapeA?.width).to.be.a("number");
    expect(shapeA?.height).to.be.a("number");
  });

  type_annotation.expectVariableExplicitTypeAnnotation(
    filePath,
    "shapeB",
    "ShapeType"
  );

  it("should define shapeB using a type", () => {
    const shapeB = context.shapeB;
    expect(shapeB?.width).to.be.a("number");
    expect(shapeB?.height).to.be.a("number");
  });
});
