import { expect } from "chai";
import * as ts from "typescript";
import { readFileSync } from "fs";
import { join } from "path";
import vm from "vm";
import * as type_annotation from "chai_typescript_type_annotation_tests";

describe("Lab 4 — Section 4: Enums", () => {
  let context: any = {};
  const filePath = join(__dirname, "../src/section4_enums.ts");

  before(() => {
    const tsCode = readFileSync(filePath, "utf8");
    const jsCode = ts.transpile(tsCode);
    vm.createContext(context);
    vm.runInContext(jsCode, context);
  });

  it("should define a Direction enum with Up, Down, Left, Right values", () => {
    const sourceCode = readFileSync(filePath, "utf8");
    expect(sourceCode).to.include(
      "enum Direction",
      "Direction enum is missing"
    );
    expect(sourceCode).to.match(
      /enum\s+Direction/,
      "Direction enum declaration malformed"
    );
    expect(context.Direction).to.be.an(
      "object",
      "Direction enum should be defined"
    );
    expect(context.Direction.Up, "Direction.Up value is missing").to.exist;
    expect(context.Direction.Down, "Direction.Down value is missing").to.exist;
    expect(context.Direction.Left, "Direction.Left value is missing").to.exist;
    expect(context.Direction.Right, "Direction.Right value is missing").to
      .exist;
  });

  type_annotation.expectFunctionReturnTypeAnnotation(
    filePath,
    "move",
    "string"
  );

  type_annotation.matchFunctionParameterTypeAnnotation(filePath, "move", [
    "Direction",
  ]);

  it("should define a function 'move' that returns a movement message", () => {
    const result = context.move?.(context.Direction?.Up);
    expect(result).to.be.a("string");
    expect(result.toLowerCase()).to.include("up");
  });
});
