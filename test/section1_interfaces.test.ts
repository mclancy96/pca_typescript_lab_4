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

  it("should define a Book interface with correct keys and types", () => {
    const sourceCode = readFileSync(filePath, "utf8");
    expect(sourceCode).to.include("interface Book", "Book interface is missing");
    expect(sourceCode).to.match(/interface\s+Book/, "Book interface declaration is malformed");
    expect(sourceCode).to.match(/title\s*:\s*string/, "Book interface is missing 'title' property of type string");
    expect(sourceCode).to.match(/author\s*:\s*string/, "Book interface is missing 'author' property of type string");
    expect(sourceCode).to.match(/pages\s*:\s*number/, "Book interface is missing 'pages' property of type number");
  });

  type_annotation.expectVariableExplicitTypeAnnotation(
    filePath,
    "myBook",
    "Book"
  );

  it("should define 'myBook' with correct properties", () => {
    const book = context.myBook;
    expect(book).to.be.an("object");
    expect(book.title).to.be.a("string");
    expect(book.author).to.be.a("string");
    expect(book.pages).to.be.a("number");
  });
});
