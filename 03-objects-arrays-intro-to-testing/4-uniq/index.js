/**
 * uniq - returns array of uniq values:
 * @param {*[]} arr - the array of primitive values
 * @returns {*[]} - the new array with uniq values
 */
export function uniq(arr) {
  if (arr === undefined) {
    return [];
  }
  const arrData = arr;
  const mapData = new Map();
  for (const i of arrData) {
    mapData.set(i, i);
    mapData.values();
  }
  const result = Array.from(mapData.values());
  return result;
}
