/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
  const fieldData = path.split(".");
  const fieldDataLength = fieldData.length;
  let i = 0;
  return (productData) => {
    for (let names of fieldData) {
      if (productData === undefined) {
        return productData;
      }
      productData = productData[names];
      i++;
      if (fieldDataLength === i) {
        return productData;
      }
    }
  }
}
