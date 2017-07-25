function logoStyle({ scrolled, navigationStyle }) {
  let logoVersion;
  if (scrolled) {
    logoVersion = 'logoDark';
  } else if (navigationStyle === 'transparentDark') {
    logoVersion = 'logoWhite';
  } else {
    logoVersion = 'logoDark';
  }

  const logoUrl = Scrivito.Obj.root().get(logoVersion).get('blob').url;

  return {
    background: `rgba(0, 0, 0, 0) url(${logoUrl}) no-repeat scroll center center / contain`,
  };
}

const Logo = Scrivito.createComponent(({ scrolled, navigationStyle }) =>
  <Scrivito.React.Link
      to={ Scrivito.Obj.root() }
      className="navbar-brand"
      style={ logoStyle({ scrolled, navigationStyle }) }>
  </Scrivito.React.Link>
);

export default Logo;
