/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  const arrayData = [...arr];
  if (param === 'asc') {
    arrayData.sort((a, b) => a.localeCompare(b, ['ru', 'en'], {caseFirst: 'upper'}));
    return arrayData;
  }
  if (param === 'desc') {
    arrayData.sort((b, a) => a.localeCompare(b, ['ru', 'en'], {caseFirst: 'lower'}));
    return arrayData;
  }
  else {
    return 0;
  }
}
