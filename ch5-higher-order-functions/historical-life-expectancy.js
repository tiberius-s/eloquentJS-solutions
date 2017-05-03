const ancestryFile = require('./ancestry');
const ancestry = JSON.parse(ancestryFile);

function average(array) {
  function plus(a, b) { return a + b; }
  return Math.round((array.reduce(plus) / array.length) * 100) / 100;
}

function groupByCentury(array) {
  let group = {};
  array.forEach(person => {
    let century = Math.ceil(person.died / 100);
    if (!group.hasOwnProperty(century)) {
      group[century] = [];
      group[century].push(person);
    } else {
      group[century].push(person);
    }
  })
  return group;
}

function calculateAverages(groups) {
  for (let century in groups) {
    let ages = groups[century].map(person => person.died - person.born);
    console.log(`Century ${century} average was ${average(ages)}`);
  }
}

calculateAverages(groupByCentury(ancestry));

