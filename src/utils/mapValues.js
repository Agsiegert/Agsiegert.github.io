import arrayToObject from 'utils/arrayToObject';

function mapValues(data, fn) {
  return arrayToObject(
    Object.entries(data)
      .map(([key, value]) => [key, fn(value)])
  );
}

export default mapValues;
