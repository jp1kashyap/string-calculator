class StringCalculator {
  add(numbers: string): number {
    if (!numbers) return 0;

    if (numbers.indexOf("\n") !== -1) {
      numbers = numbers.replace(/\n/g, ",");
    }

    if (numbers.slice(0, 2) == "//") {
      let delimiter = RegExp(numbers[2], "g");
      numbers = numbers.replace(numbers.slice(0, 3), "");
      numbers = numbers.replace(delimiter, ",");
    }

    if (numbers.indexOf(",") !== -1) {
      const numArray = numbers.split(",").map(Number);
      const errors = numArray
        .filter((num) => num < 0)
        .map((num) => `negative numbers not allowed ${num}`);

      if (errors.length > 0) {
        throw new Error(errors.join(", "));
      }
      return numArray.reduce((a, b) => a + b);
    }

    if (parseInt(numbers) < 0) {
      throw new Error("negative numbers not allowed " + numbers);
    }
    return parseInt(numbers);
  }
}

export default StringCalculator;
