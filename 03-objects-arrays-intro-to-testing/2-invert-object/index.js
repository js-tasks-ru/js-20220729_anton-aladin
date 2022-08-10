/**
 * invertObj - should swap object keys and values
 * @param {object} obj - the initial object
 * @returns {object | undefined} - returns new object or undefined if nothing did't pass
 */
export function invertObj(obj) {
  if (obj === undefined) {
    return obj;
  }
  if (obj === {}) {
    return obj;
  }
  else {
    const objData = {...obj};
    return Object.fromEntries(Object.entries(objData).map(([key, value])=>[value, key]));
  }
}
