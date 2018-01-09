import supportsTouchEvents from 'utils/supportsTouchEvents';

class Nav extends React.Component {
  constructor(props) {
    super(props);

    this.registeredDropdowns = [];

    this.closeAll = this.closeAll.bind(this);
    this.closeDropdowns = this.closeDropdowns.bind(this);
    this.registerDropdown = this.registerDropdown.bind(this);
  }

  closeAll() {
    this.props.closeExpanded();
    this.closeDropdowns();
  }

  closeDropdowns() {
    this.registeredDropdowns.forEach(dropdown => dropdown.closeDropdown());
  }

  registerDropdown(dropdownComponent) {
    this.registeredDropdowns.push(dropdownComponent);
  }

  render() {
    return (
      <Scrivito.ChildListTag
        className="nav navbar-nav navbar-right"
        parent={ Scrivito.Obj.root() }
        renderChild={
          child => renderChild(child, this.registerDropdown, this.closeAll, this.closeDropdowns)
        }
      />
    );
  }
}

function renderChild(child, registerDropdown, closeAll, closeDropdowns) {
  if (child.children().length === 0) {
    return renderSingleChild(child, closeAll);
  }

  return (
    <Dropdown
      child={ child }
      registerDropdown={ registerDropdown }
      closeAll={ closeAll }
      closeDropdowns={ closeDropdowns }
    />
  );
}

function renderSingleChild(child, closeAll) {
  const classNames = [];
  if (isActive(child)) { classNames.push('active'); }

  return (
    <li
      className={ classNames.join(' ') }
      onClick={ closeAll }
    >
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

  componentDidMount() {
    this.props.registerDropdown(this);
  }

  toggleDropdown() {
    const newOpen = !this.state.open;
    this.props.closeDropdowns();
    this.setState({ open: newOpen });
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
      onClick: this.props.closeAll,
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
          aria-expanded={ this.state.open }
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
            innerChild => renderSingleChild(innerChild, this.props.closeAll)
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
