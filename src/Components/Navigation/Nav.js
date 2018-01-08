import supportsTouchEvents from 'utils/supportsTouchEvents';

function Nav({ closeExpanded }) {
  return (
    <Scrivito.ChildListTag
      className="nav navbar-nav navbar-right"
      parent={ Scrivito.Obj.root() }
      renderChild={ child => renderChild(child, closeExpanded) }
    />
  );
}

function renderChild(child, closeExpanded) {
  if (child.children().length === 0) {
    return renderSingleChild(child, closeExpanded);
  }

  return <Dropdown child={ child } closeExpanded={ closeExpanded } />;
}

function renderSingleChild(child, closeExpanded) {
  const classNames = [];
  if (isActive(child)) { classNames.push('active'); }

  return (
    <li className={ classNames.join(' ') } onClick={ closeExpanded }>
      <Scrivito.LinkTag to={ child }>
        { child.get('title') }
      </Scrivito.LinkTag>
    </li>
  );
}

class BaseDropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };

    this.closeDropdown = this.closeDropdown.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  toggleDropdown() {
    this.setState({ open: !this.state.open });
  }

  closeDropdown() {
    this.setState({ open: false });
  }

  render() {
    const child = this.props.child;

    const classNames = [];
    if (this.state.open) { classNames.push('open'); }
    if (isActive(child)) { classNames.push('active'); }

    const topLevelProps = {
      className: classNames.join(' '),
      onClick: () => {
        this.props.closeExpanded();
        this.closeDropdown();
      },
    };

    if (!supportsTouchEvents()) {
      topLevelProps.onMouseEnter = this.toggleDropdown;
      topLevelProps.onMouseLeave = this.closeDropdown;
    }

    return (
      <li { ...topLevelProps }>
        <Scrivito.LinkTag
          to={ child }
          className="dropdown-toggle"
          role="button"
          aria-haspopup="true"
          aria-expanded="false"
        >
          { child.get('title') }
        </Scrivito.LinkTag>
        <span
          className="menu-toggle"
          onClick={
            e => {
              this.toggleDropdown();
              e.stopPropagation();
            }
          }
        >
          <i className="fa fa-angle-down" aria-hidden="true" />
        </span>
        <Scrivito.ChildListTag
          className="dropdown-menu"
          parent={ child }
          renderChild={
            innerChild => renderSingleChild(innerChild, this.props.closeExpanded)
          }
        />
      </li>
    );
  }
}

const Dropdown = Scrivito.connect(BaseDropdown);

function isActive(page) {
  if (!Scrivito.currentPage()) { return false; }

  const currentPath = Scrivito.currentPage().path();
  if (currentPath) {
    return currentPath.startsWith(page.path());
  }

  if (Scrivito.currentPage().objClass() === 'BlogPost') {
    return page.objClass() === 'Blog';
  }

  return false;
}

export default Scrivito.connect(Nav);
