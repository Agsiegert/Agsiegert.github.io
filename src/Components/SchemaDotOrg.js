import isEmpty from 'is-empty';
import isPlainObject from 'lodash/isPlainObject';
import dataFromEvent from './SchemaDotOrg/dataFromEvent';

const SchemaDotOrg = Scrivito.connect(({ content }) => {
  const data = pruneEmptyValues(dataFromItem(content));

  return (
    <script type="application/ld+json">
      { JSON.stringify(data) }
    </script>
  );
});

function dataFromItem(item) {
  switch (item.objClass()) {
    case 'Event': return dataFromEvent(item);
  }

  throw `SchemaDotOrg for objClass ${item.objClass()} not supported!`;
}

function pruneEmptyValues(data) {
  // prune sub objects
  let prunedData = mapValues(data, subData => {
    if (isPlainObject(subData)) {
      return pruneEmptyValues(subData);
    }
    return subData;
  });

  // prune empty values
  prunedData = pickBy(prunedData, v => !isEmpty(v));

  // return empty array, if only keys starting with "@" exists
  const keysWithoutAt = Object.keys(prunedData).filter(sd => !sd.startsWith('@'));
  if (keysWithoutAt.length) {
    return prunedData;
  }
  return {};
}

function arrayToObject(array) {
  return Object.assign(
    ...array.map(([key, value]) => ({ [key]: value }))
  );
}

function mapValues(data, fn) {
  return arrayToObject(
    Object.entries(data)
      .map(([key, value]) => [key, fn(value)])
  );
}

function pickBy(data, fn) {
  return arrayToObject(
    Object.entries(data).filter(([_key, value]) => fn(value))
  );
}

export default SchemaDotOrg;
