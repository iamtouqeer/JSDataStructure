function findMissingNumber(numbers) {
  if (numbers.length == 0) {
    return 1;
  }

  const n = numbers.length + 1;
  const expecedSum = (n * (n + 1)) / 2;

  //   let actualSum = 0;
  //   for (let index = 0; index < numbers.length; index++) {
  //     actualSum += numbers[index];
  //   }

  const actualSum = numbers.reduce((sum, num) => sum + num, 0);

  return expecedSum - actualSum;
}

module.exports = findMissingNumber;
