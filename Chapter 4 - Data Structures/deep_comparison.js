const deepEqual = (val1, val2) => {
  // check if values are strictly equal
  if (val1 === val2) {
    return true;
  }

  // return false if either of the params are null
  if (val1 === null || val2 === null) {
    return false;
  }
  // handle object property comparison
  if ((typeof val1 === 'object') && (typeof val2 === 'object')) {
    if (Object.keys(val1).length !== Object.keys(val2).length) {
      return false;
    }
    for (let key in val1) {
      if (val2.hasOwnProperty(key)){
        return deepEqual(val1[key], val2[key]);
      }
    }
  }
  // default
  return false;
}

const obj = { here: { is: "an" }, object: 2 };
console.log(`Test 1: ${deepEqual(obj, obj)}`);
console.log(`Test 2: ${deepEqual(obj, { here: 1, object: 2 })}`);
console.log(`Test 3: ${deepEqual(obj, { here: { is: "an" }, object: 2 })}`);