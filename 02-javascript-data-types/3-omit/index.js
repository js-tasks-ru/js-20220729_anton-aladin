/**
 * omit - creates an object composed of enumerable property fields
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to omit
 * @returns {object} - returns the new object
 */
export const omit = (obj, ...fields) => {
  let constData = obj,
    fieldsData = fields,
    i = 0,
    arrContainer = new Map(Object.entries(constData));
  for (let key in constData) {
    arrContainer.delete(fieldsData[i], constData[fieldsData[i]]);
    i++;
  }
  return Object.fromEntries(arrContainer);
};
