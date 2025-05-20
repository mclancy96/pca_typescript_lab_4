import { expect } from "chai";
import * as ts from "typescript";
import { readFileSync } from "fs";
import { join } from "path";
import vm from "vm";

describe("Lab 4 — Section 3: Tuples", () => {
let context: any = {};

before(() => {
const filePath = join(__dirname, "../src/section3_tuples.ts");
const tsCode = readFileSync(filePath, "utf8");
const jsCode = ts.transpile(tsCode);
vm.createContext(context);
vm.runInContext(jsCode, context);
});

it("should define 'origin' as a tuple with two numbers", () => {
const origin = context.origin;
expect(origin).to.be.an("array");
expect(origin.length).to.equal(2);
expect(origin[0]).to.be.a("number");
expect(origin[1]).to.be.a("number");
});
});
