function mapValues(data, fn) {
  return Object.assign(
    ...Object.entries(data).map(
      ([k, v]) => ({ [k]: fn(v) })
    )
  );
}

export default mapValues;
