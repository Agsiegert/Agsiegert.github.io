function arrayToObject(array) {
  return Object.assign(
    ...array.map(([key, value]) => ({ [key]: value }))
  );
}

export default arrayToObject;
