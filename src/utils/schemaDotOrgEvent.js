import formatDate from 'utils/formatDate';
import pickBy from 'lodash/pickBy';
import urlFromBinary from 'utils/urlFromBinary';

function schemaDotOrgEvent(event) {
  const data = {
    '@context': 'http://schema.org',
    '@type': 'Event',
    name: event.get('title'),
    url: Scrivito.urlFor(event),
    startDate: formatDate(event.get('date'), 'YYYY-MM-DD'),
    location: locationFromEvent(event),
    image: urlFromBinary(event.get('image')),
    description: event.get('metaDataDescription'),
  };

  return pickBy(data, v => v);
}

function locationFromEvent(event) {
  const name = event.get('locationName');
  const address = addressFromEvent(event);

  if (!name && !address) { return null; }

  return pickBy({ '@type': 'Place', name, address }, v => v);
}

function addressFromEvent(event) {
  let address = {
    '@type': 'PostalAddress',
    streetAddress: event.get('locationStreetAddress'),
    addressLocality: event.get('locationLocality'),
    addressRegion: event.get('locationRegion'),
    postalCode: event.get('locationPostalCode'),
    addressCountry: event.get('locationCountry'),
  };

  address = pickBy(address, v => v);

  if (Object.keys(address).length === 1) { return null; }

  return address;
}

export default schemaDotOrgEvent;
