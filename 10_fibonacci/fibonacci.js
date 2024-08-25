const fibonacci = function (num) {
  const finalNum = Number(num);

  if (finalNum === 0) return 0;

  if (isNaN(finalNum) || finalNum < 0) return "OOPS";

  const fibonaccis = [1, 1];
  const end = finalNum - fibonaccis.length;

  for (let i = 1; i <= end; i++) {
    fibonaccis.push(
      fibonaccis[fibonaccis.length - 2] + fibonaccis[fibonaccis.length - 1]
    );
  }

  return fibonaccis[finalNum - 1];
};

// Do not edit below this line
module.exports = fibonacci;
