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
          { ' ' }
          <i className="fa fa-map-marker fa-lg" aria-hidden="true" title="location" />
          { ' ' }
          <Scrivito.ContentTag tag="span" content={ page } attribute="location" />
        </h2>
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
