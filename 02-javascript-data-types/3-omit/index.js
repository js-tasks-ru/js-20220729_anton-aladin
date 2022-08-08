/**
 * omit - creates an object composed of enumerable property fields
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to omit
 * @returns {object} - returns the new object
 */
export const omit = (obj, ...fields) => {
  const constData = obj;
  const fieldsData = fields;
  let i = 0;
  let arrContainer = new Map(Object.entries(constData));
  for (let key in constData) {
    if (Object.hasOwn(constData, fieldsData[i])) {
      arrContainer.delete(fieldsData[i], constData[fieldsData[i]]);
      i++;
    }
  }
  return Object.fromEntries(arrContainer);
};
