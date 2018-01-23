import arrayToObject from 'utils/arrayToObject';

function pickBy(data, fn) {
  return arrayToObject(
    Object.entries(data).filter(([_key, value]) => fn(value))
  );
}

export default pickBy;
