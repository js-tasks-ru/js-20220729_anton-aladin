/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */
export const pick = (obj, ...fields) => {
  let constData = obj,
      fieldsData = fields,
      i = 0,
      arrContainer = new Map();
  for (let key in constData) {
    arrContainer.set(fieldsData[i], constData[fieldsData[i]]);
    i++;
  }
  return Object.fromEntries(arrContainer);
};
