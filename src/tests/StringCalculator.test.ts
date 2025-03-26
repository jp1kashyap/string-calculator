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
});
