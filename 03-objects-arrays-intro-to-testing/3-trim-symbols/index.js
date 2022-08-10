/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
  const textData = string;
  const sizeData = size;
  const result = [];
  let i = 0;
  if (sizeData === 0) {
    return '';
  }
  if (sizeData === undefined) {
    return textData;
  }
  for (const liter of textData) {
    if (result[result.length - 1] === liter) {
      if (i < sizeData) {
        result.push(liter);
        i += 1;
      }
    } else {
      i = 1;
      result.push(liter);
    }
  }
  return result.join('');
}
