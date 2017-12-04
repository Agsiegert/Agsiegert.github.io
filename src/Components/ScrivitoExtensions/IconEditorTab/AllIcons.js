import fontAwesomeIcons from './fontAwesomeIcons';
import SingleIcon from './SingleIcon';

function AllIcons({ setWidgetIcon, currentIcon, hide }) {
  if (hide) { return null; }

  return (
    <React.Fragment>
      <div className="scrivito_detail_label">
        <span>All icons</span>
      </div>
      <div id="icons">
        {
          Object.entries(categoryMap).map(([category, icons], index) =>
            <section key={ `${category}${index}` }>
              <i>{ category }</i>
              <div className="row">
                {
                  icons.map((icon, innerIndex) =>
                    <SingleIcon
                      key={ `${icon.id}${innerIndex}` }
                      icon={ icon }
                      currentIcon={ currentIcon }
                      setWidgetIcon={ setWidgetIcon }
                    />)
                }
              </div>
            </section>
          )
        }
      </div>
    </React.Fragment>
  );
}

const categoryMap = {};
fontAwesomeIcons.forEach(
  icon => icon.categories.forEach(
    category => {
      if (!categoryMap[category]) { categoryMap[category] = []; }
      categoryMap[category].push(icon);
    }
  )
);

export default AllIcons;
