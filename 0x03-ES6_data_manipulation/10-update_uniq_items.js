const updateUniqueItems = (myMap) => {
  const newVal = myMap.forEach((value, key) => {
    if (value === 1) {
      myMap.set(key, 100);
    }
  });
  return newVal;
};

export default updateUniqueItems;
