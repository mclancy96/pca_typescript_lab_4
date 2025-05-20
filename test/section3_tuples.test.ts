import { expect } from "chai";
import * as ts from "typescript";
import { readFileSync } from "fs";
import { join } from "path";
import vm from "vm";
import * as type_annotation from "chai_typescript_type_annotation_tests";

describe("Lab 4 — Section 3: Tuples", () => {
  let context: any = {};
  const filePath = join(__dirname, "../src/section3_tuples.ts");

  before(() => {
    const tsCode = readFileSync(filePath, "utf8");
    const jsCode = ts.transpile(tsCode);
    vm.createContext(context);
    vm.runInContext(jsCode, context);
  });

  it("should define a Point type alias for a tuple of two numbers", () => {
    const sourceCode = readFileSync(filePath, "utf8");
    expect(sourceCode).to.include("type Point", "Point type alias is missing");
    expect(sourceCode).to.match(
      /type\s+Point/,
      "Point type alias declaration is malformed"
    );
    expect(sourceCode).to.match(
      /\[\s*number\s*,\s*number\s*\]/,
      "Point should be a tuple type with two number elements"
    );
  });

  type_annotation.expectVariableExplicitTypeAnnotation(
    filePath,
    "destination",
    "Point"
  );

  it("should define 'destination' as a tuple with two numbers", () => {
    const destination = context.destination;
    expect(destination).to.be.an("array");
    expect(destination.length).to.equal(2);
    expect(destination[0]).to.be.a("number");
    expect(destination[1]).to.be.a("number");
  });
});
