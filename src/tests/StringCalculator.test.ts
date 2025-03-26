import { describe, expect, test } from "@jest/globals";
import StringCalculator from "../StringCalculator";

describe("String Calculator", () => {
  let calculator: StringCalculator;

  beforeEach(() => {
    calculator = new StringCalculator();
  });

  // test case for empty string
  test("Should return 0 for an empty string", () => {
    expect(calculator.add("")).toBe(0);
  });

  test("Should return number if given single number", () => {
    expect(calculator.add("1")).toBe(1);
  });

  test("Should return sum of number if given two numbers", () => {
    expect(calculator.add("1,2")).toBe(3);
  });

  test("Should return sum of numbers given multiple numbers", () => {
    expect(calculator.add("1,2,3,4")).toBe(10);
  });
});
