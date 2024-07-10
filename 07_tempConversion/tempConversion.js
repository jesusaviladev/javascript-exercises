const convertToCelsius = function (temperature) {
  if (typeof temperature !== "number") return "ERROR";
  const celsius = (temperature - 32) * (5 / 9);
  return Math.round(celsius * 10) / 10; // rounded
};

const convertToFahrenheit = function (temperature) {
  if (typeof temperature !== "number") return "ERROR";
  const fahrenheit = (temperature * 9) / 5 + 32;
  return Math.round(fahrenheit * 10) / 10; // rounded
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
