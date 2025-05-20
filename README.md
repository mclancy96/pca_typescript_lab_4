# Lab 4 — Interfaces, Tuples & Enums (TypeScript)

Welcome to **Lab 4** of the TypeScript Labs! This lab focuses on working with **interfaces**, **tuples**, and **enums** — powerful tools for modeling structured, typed data in your programs.

## 🏆 Learning Goals

- Define object shapes with `interface`
- Extend interfaces using `extends`
- Use **tuples** for fixed-length typed arrays
- Use **enums** to define named sets of values
- (Bonus) Understand how `interface` compares to `type`

## 🛠️ What to Do

- Complete each task inside the `src/` files
- Run the corresponding Mocha + Chai tests inside the `test/` folder
- You do **not** need to use `export` — tests use the VM sandbox to evaluate your code

## ✅ How to Run Tests

```bash
npm install
npx mocha -r ts-node/register "test/**/*.test.ts"
```

## 🗂️ Lab Structure & Tasks

### 🔹 section1_interfaces.ts

- Define an interface `Book` with:

  - `title`: string
  - `author`: string
  - `pages`: number

- Create a variable `myBook` of type `Book`

### 🔹 section2_extending_interfaces.ts

- Define an interface `Person` with:

  - `name`: string
  - `age`: number

- Create a new interface `Employee` that extends `Person` and adds:

  - `jobTitle`: string
  - `department`: string

- Create a variable `employee1` of type `Employee`

### 🔹 section3_tuples.ts

- Create a tuple type called `Point` with two numbers
- Create a variable `origin` of type `Point` and assign it `[0, 0]`

### 🔹 section4_enums.ts

- Define an enum `Direction` with: `Up`, `Down`, `Left`, `Right`
- Write a function `move` that takes a `Direction` and returns a string message (e.g., "Moving Up")

### ⭐ section5_bonus_interface_vs_type.ts

- Create a shape using both an `interface` and a `type` alias
- Example: both define a `Shape` with `width: number` and `height: number`
- Add a comment explaining when you might choose one over the other

---

**Ready?** Start with `src/section1_interfaces.ts` and get comfortable modeling complex data in TypeScript! 🚀
