const ancestryFile = require('./ancestry');
const ancestry = JSON.parse(ancestryFile);

function average(array) {
  let plus = (a, b) => a + b;
  return array.reduce(plus) / array.length;
}

const byName = {};
ancestry.forEach(function (person) {
  byName[person.name] = person;
});

const hasMother = (person) => byName[person.mother] !== undefined;
const difference = (person) => person.born - byName[person.mother].born;
const avgAge = average(ancestry.filter(hasMother).map(difference));
console.log(avgAge);