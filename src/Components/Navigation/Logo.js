function logoObj({ scrolled, navigationStyle }) {
  let logoVersion;
  if (scrolled) {
    logoVersion = 'logoDark';
  } else if (navigationStyle === 'transparentDark') {
    logoVersion = 'logoWhite';
  } else {
    logoVersion = 'logoDark';
  }

  return Scrivito.Obj.root().get(logoVersion);
}

function Logo({ scrolled, navigationStyle }) {
  if (!Scrivito.Obj.root()) { return null; }

  const logo = logoObj({ scrolled, navigationStyle });
  if (!logo) { return null; }

  return (
    <Scrivito.LinkTag to={ Scrivito.Obj.root() } className="navbar-brand">
      <Scrivito.ImageTag content={ logo } alt="Logo" />
    </Scrivito.LinkTag>
  );
}

export default Scrivito.connect(Logo);
