import formatDate from 'utils/formatDate';
import InPlaceEditingPlaceholder from 'Components/InPlaceEditingPlaceholder';
import schemaDotOrgEvent from 'utils/schemaDotOrgEvent';

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
    <script type="application/ld+json">
      { JSON.stringify(schemaDotOrgEvent(page)) }
    </script>
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
  if (Scrivito.isInPlaceEditingActive()) {
    return (
      <table>
        <tbody>
          <tr>
            <td>Location name:</td>
            <Scrivito.ContentTag tag="td" content={ event } attribute="locationName" />
          </tr>
          <tr>
            <td>Street address:</td>
            <Scrivito.ContentTag tag="td" content={ event } attribute="locationStreetAddress" />
          </tr>
          <tr>
            <td>Locality:</td>
            <Scrivito.ContentTag tag="td" content={ event } attribute="locationLocality" />
          </tr>
          <tr>
            <td>Region:</td>
            <Scrivito.ContentTag tag="td" content={ event } attribute="locationRegion" />
          </tr>
          <tr>
            <td>Postal code:</td>
            <Scrivito.ContentTag tag="td" content={ event } attribute="locationPostalCode" />
          </tr>
          <tr>
            <td>Country:</td>
            <Scrivito.ContentTag tag="td" content={ event } attribute="locationCountry" />
          </tr>
        </tbody>
      </table>
    );
  }

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
