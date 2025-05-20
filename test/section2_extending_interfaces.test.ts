import { expect } from "chai";
import * as ts from "typescript";
import { readFileSync } from "fs";
import { join } from "path";
import vm from "vm";
import * as type_annotation from "chai_typescript_type_annotation_tests";

describe("Lab 4 — Section 2: Extending Interfaces", () => {
  let context: any = {};
  const filePath = join(__dirname, "../src/section2_extending_interfaces.ts");

  before(() => {
    const tsCode = readFileSync(filePath, "utf8");
    const jsCode = ts.transpile(tsCode);
    vm.createContext(context);
    vm.runInContext(jsCode, context);
  });

  it("should define a Person interface with correct keys and types", () => {
    const sourceCode = readFileSync(filePath, "utf8");
    expect(sourceCode).to.include(
      "interface Person",
      "Person interface is missing"
    );
    expect(sourceCode).to.match(
      /interface\s+Person/,
      "Person interface declaration is malformed"
    );
    expect(sourceCode).to.match(
      /name\s*:\s*string/,
      "Person interface is missing 'name' property of type string"
    );
    expect(sourceCode).to.match(
      /age\s*:\s*number/,
      "Person interface is missing 'age' property of type number"
    );
  });

  it("should define an Employee interface extending Person with correct keys and types", () => {
    const sourceCode = readFileSync(filePath, "utf8");
    expect(sourceCode).to.include(
      "interface Employee extends Person",
      "Employee interface is missing or not extending Person"
    );
    expect(sourceCode).to.match(
      /interface\s+Employee\s+extends\s+Person/,
      "Employee interface declaration is malformed"
    );
    expect(sourceCode).to.match(
      /jobTitle\s*:\s*string/,
      "Employee interface is missing 'jobTitle' property of type string"
    );
    expect(sourceCode).to.match(
      /department\s*:\s*string/,
      "Employee interface is missing 'department' property of type string"
    );
  });

  type_annotation.expectVariableExplicitTypeAnnotation(
    filePath,
    "employee1",
    "Employee"
  );

  it("should define 'employee1' with inherited and new properties", () => {
    const employee = context.employee1;
    expect(employee).to.be.an("object");
    expect(employee.name).to.be.a("string");
    expect(employee.age).to.be.a("number");
    expect(employee.jobTitle).to.be.a("string");
    expect(employee.department).to.be.a("string");
  });
});
