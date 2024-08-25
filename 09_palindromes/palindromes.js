const palindromes = function (string) {
  const sanitizedString = string.toLowerCase().replace(/[^a-z0-9]/gi, "");

  const palindrome = sanitizedString.split("").reverse().join("");
  return palindrome === sanitizedString;
};

// Do not edit below this line
module.exports = palindromes;
