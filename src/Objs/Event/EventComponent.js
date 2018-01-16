import formatDate from 'utils/formatDate';
import InPlaceEditingPlaceholder from 'Components/InPlaceEditingPlaceholder';

Scrivito.provideComponent('Event', ({ page }) =>
  <div>
    <section className="bg-white">
      <div className="container">
        <Scrivito.ContentTag tag="h1" className="h2" content={ page } attribute="title" />
        <h2 className="h4">
          <i className="fa fa-calendar fa-lg" aria-hidden="true" title="date" />
          { ' ' }
          <EventDate date={ page.get('date') } />
        </h2>
        <h2 className="h4">
          <i className="fa fa-map-marker fa-lg" aria-hidden="true" title="location" />
          { ' ' }
          Location
        </h2>
        <EventLocation event={ page } />
      </div>
    </section>
    <Scrivito.ContentTag tag="div" content={ page } attribute="body" />
  </div>
);

function EventDate({ date }) {
  if (!date) {
    return (
      <InPlaceEditingPlaceholder>
        Select a date in the event page properties.
      </InPlaceEditingPlaceholder>
    );
  }

  return formatDate(date, 'MM/DD/YYYY');
}

const EventLocation = Scrivito.connect(({ event }) => {
  const locality = event.get('locationLocality');
  const region = event.get('locationRegion');
  const postalCode = event.get('locationPostalCode');
  const localityRegionPostalCode = [locality, region, postalCode].filter(n => n).join(' ');

  const address = [
    event.get('locationName'),
    event.get('locationStreetAddress'),
    localityRegionPostalCode,
    event.get('locationCountry'),
  ].filter(n => n);

  return (
    <div>
      { address.map((line, index) => <span key={ index }>{ line } <br /></span>) }
    </div>
  );
});
