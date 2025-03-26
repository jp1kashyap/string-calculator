# String Calculator - TDD Kata

## 📌 Overview

This is an implementation of the **String Calculator TDD Kata** using **TypeScript** and **Test-Driven Development (TDD)**. It allows adding numbers from a string input while handling various edge cases like negative numbers and custom delimiters.

---

## 🛠️ Features

- Supports addition of numbers in a string format.
- Handles empty strings (returns `0`).
- Supports custom delimiters.
- Throws an error for negative numbers, listing each negative separately.

---

## 📂 Project Structure

```
string-calculator/
│── src/
|──── tests/
│     ├── StringCalculator.test.ts  # Unit tests
│   ├── StringCalculator.ts  # Main logic
│   ├── index.ts              # Sample execution (optional)
│── package.json
│── tsconfig.json
│── jest.config.js
│── README.md  # This file
```

---

## 🚀 Installation & Setup

### **1️⃣ Clone the repository**

```sh
git clone https://github.com/jp1kashyap/string-calculator.git
cd string-calculator
```

### **2️⃣ Install dependencies**

```sh
npm install
```

### **3️⃣ Run tests**

```sh
npm test
```

---

## 🏗️ Usage

If you want to manually test the `StringCalculator` class
Run it with:

```sh
npx ts-node src/index.ts
```

---

## 🧪 Example Test Cases

```typescript
test("Should return error if numbers are negative", () => {
  expect(() => calculator.add("-1,-2,-3")).toThrow(
    "negative numbers not allowed -1, negative numbers not allowed -2, negative numbers not allowed -3"
  );
});
```

---

## 🏆 TDD Kata Rules

1. Start with a test case (Write failing tests first 🎯).
2. Implement the simplest solution to pass the test.
3. Refactor and improve the code while ensuring all tests pass.

---

## 📜 License

This project is open-source. You are free to use and modify it.

---

## 🤝 Contributing

Feel free to fork this repo and submit a pull request if you have improvements!

---

### 🎯 Happy Coding! 🚀
