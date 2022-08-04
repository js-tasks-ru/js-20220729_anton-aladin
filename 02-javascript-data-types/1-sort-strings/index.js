/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  if (param === 'asc') {
    let arrayDatta = [...arr];
    arrayDatta.sort((a, b) => a.localeCompare(b, ['ru', 'en'], {caseFirst: 'upper'}));
    return arrayDatta;
  }
  if (param === 'desc') {
    let arrayData = [...arr];
    arrayData.sort((b, a) => a.localeCompare(b, ['ru', 'en'], {caseFirst: 'lower'}));
    return arrayData;
  }
  else {
    return 0;
  }
}
