class StringCalculator {
  add(numbers: string): number {
    if (!numbers) return 0;

    if (numbers.indexOf("\n") !== -1) {
      numbers = numbers.replace(/\n/g, ",");
    }
    if (numbers.indexOf(",") !== -1) {
      return numbers
        .split(",")
        .map(Number)
        .reduce((a, b) => a + b);
    }
    return parseInt(numbers);
  }
}

export default StringCalculator;
