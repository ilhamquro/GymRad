const isAllFilled = (obj) => {
  const unfilledProperties = [];
  // eslint-disable-next-line array-callback-return
  Object.keys(obj).map((key) => {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      if (
        obj[key] === undefined ||
        obj[key] === null ||
        obj[key].length === 0
      ) {
        unfilledProperties.push(key);
      }
    }
  });
  return unfilledProperties;
};

export default isAllFilled;
