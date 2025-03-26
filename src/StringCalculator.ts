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
      return numbers
        .split(",")
        .map(Number)
        .reduce((a, b) => a + b);
    }

    if (parseInt(numbers) < 0) {
      throw new Error("negative numbers not allowed " + numbers);
    }
    return parseInt(numbers);
  }
}

export default StringCalculator;
