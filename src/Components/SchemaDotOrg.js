import dataFromEvent from './SchemaDotOrg/dataFromEvent';

const SchemaDotOrg = Scrivito.connect(({ content }) => {
  const data = dataFromItem(content);

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

export default SchemaDotOrg;
