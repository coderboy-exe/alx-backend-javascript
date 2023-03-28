const cleanSet = (set, startString) => {
  if (!startString || startString === '') {
    return '';
  }
  const cleanedSet = [...set].filter((val) => val.startsWith(startString));
  const cleanedString = cleanedSet.map((val) => val.replace(startString, ''));
  return cleanedString.join('-');
};

export default cleanSet;
