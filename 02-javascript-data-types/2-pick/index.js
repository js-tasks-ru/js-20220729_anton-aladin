/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */
export const pick = (obj, ...fields) => {
  const constData = obj;
  const fieldsData = [...fields];
  let i = 0;
  const arrContainer = new Map();
  for (const key in constData) {
    if (Object.hasOwn(constData, fieldsData[i])) {
      arrContainer.set(fieldsData[i], constData[fieldsData[i]]);
      i++;
    }
  }
  return Object.fromEntries(arrContainer);
};
