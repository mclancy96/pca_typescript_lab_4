import { expect } from "chai";
import * as ts from "typescript";
import { readFileSync } from "fs";
import { join } from "path";
import vm from "vm";

describe("Lab 4 — Section 2: Extending Interfaces", () => {
  let context: any = {};

  before(() => {
    const filePath = join(__dirname, "../src/section2_extending_interfaces.ts");
    const tsCode = readFileSync(filePath, "utf8");
    const jsCode = ts.transpile(tsCode);
    vm.createContext(context);
    vm.runInContext(jsCode, context);
  });

  it("should define 'employee1' with inherited and new properties", () => {
    const employee = context.employee1;
    expect(employee).to.be.an("object");
    expect(employee.name).to.be.a("string");
    expect(employee.age).to.be.a("number");
    expect(employee.jobTitle).to.be.a("string");
    expect(employee.department).to.be.a("string");
  });
});
