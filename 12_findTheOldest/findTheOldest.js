const findTheOldest = function (people) {
  const orderedPeople = [...people].sort((a, b) => {
    const ageA = (a?.yearOfDeath ?? new Date().getFullYear()) - a.yearOfBirth;
    const ageB = (b?.yearOfDeath ?? new Date().getFullYear()) - b.yearOfBirth;

    return ageB - ageA;
  });

  return orderedPeople[0];
};

// Do not edit below this line
module.exports = findTheOldest;
