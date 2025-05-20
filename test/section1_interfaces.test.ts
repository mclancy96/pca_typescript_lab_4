import { expect } from "chai";
import * as ts from "typescript";
import { readFileSync } from "fs";
import { join } from "path";
import vm from "vm";
import * as type_annotation from "chai_typescript_type_annotation_tests";


describe("Lab 4 — Section 1: Interfaces", () => {
  let context: any = {};
  const filePath = join(__dirname, "../src/section1_interfaces.ts");

  before(() => {
    const tsCode = readFileSync(filePath, "utf8");
    const jsCode = ts.transpile(tsCode);
    vm.createContext(context);
    vm.runInContext(jsCode, context);
  });


  it("should define 'myBook' with correct properties", () => {
    const book = context.myBook;
    expect(book).to.be.an("object");
    expect(book.title).to.be.a("string");
    expect(book.author).to.be.a("string");
    expect(book.pages).to.be.a("number");
  });
});
