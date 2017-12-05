import Scroll from 'react-scroll';
import fullWidthTransformedUrl from 'utils/fullWidthTransformedUrl';
import currentPageNavigationOptions from './Navigation/currentPageNavigationOptions';
import FullNavigation from './Navigation/FullNavigation';
import LandingPageNavigation from './Navigation/LandingPageNavigation';
import NavigationSection from './Navigation/NavigationSection';
import ScrollToNextSectionLink from './Navigation/ScrollToNextSectionLink';

function ActualNavigation(
  { isLandingPage, bootstrapNavbarClassNames, toggleSearch, scrolled, navigationStyle, showSearch }
) {
  if (isLandingPage) {
    return <LandingPageNavigation navigationStyle={ navigationStyle } />;
  }

  return <FullNavigation
    bootstrapNavbarClassNames={ bootstrapNavbarClassNames }
    toggleSearch={ toggleSearch }
    showSearch={ showSearch }
    scrolled={ scrolled }
    navigationStyle={ navigationStyle }
  />;
}

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrolled: false,
      showSearch: false,
    };

    this.handleScroll = this.handleScroll.bind(this);
    this.toggleSearch = this.toggleSearch.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    // see https://stackoverflow.com/q/28633221/881759 for discussion about pageYOffset
    const scrollTop = event.currentTarget.pageYOffset;
    const scrolledToBe = scrollTop !== 0;

    if (this.state.scrolled !== scrolledToBe) {
      // only set state, if needed. Otherwise a render will be triggered on _every_ scroll.
      this.setState({ scrolled: scrolledToBe });
    }
  }

  toggleSearch() {
    this.setState({ showSearch: !this.state.showSearch });
  }

  render() {
    const {
      navigationStyle,
      backgroundImage,
      heigthClassName,
      useGradient,
      isLandingPage,
    } = currentPageNavigationOptions();

    const topSectionClassNames = ['navbar-fixed'];
    if (this.state.scrolled) {
      topSectionClassNames.push('scrolled');
    }

    if (navigationStyle === 'transparentDark') {
      topSectionClassNames.push('bg-dark-image');
    } else {
      topSectionClassNames.push('bg-white');
      topSectionClassNames.push('nav-only');
    }

    const bootstrapNavbarClassNames = [];
    if (this.state.showSearch) {
      bootstrapNavbarClassNames.push('show-search');
    }
    if (navigationStyle === 'transparentDark') {
      bootstrapNavbarClassNames.push('navbar-transparent');
    }

    const topSectionStyle = {};
    if (navigationStyle === 'transparentDark') {
      if (backgroundImage) {
        const backgroundUrl = fullWidthTransformedUrl(backgroundImage);
        if (useGradient) {
          topSectionStyle.background = 'no-repeat bottom / cover';
          topSectionStyle.backgroundImage = [
            'radial-gradient(ellipse at center, rgba(61,65,66,.5) 0%, rgba(61,65,66,1) 90%)',
            'linear-gradient(to bottom, rgba(61,65,66,0) 0%, rgba(61,65,66,1) 90%)',
            `url(${backgroundUrl})`,
          ].join(', ');
        } else {
          topSectionStyle.background = 'no-repeat center / cover';
          topSectionStyle.backgroundImage = [
            'linear-gradient(rgba(46, 53, 60, 0.7), rgba(46, 53, 60, 0.7))',
            `url(${backgroundUrl})`,
          ].join(', ');
        }
      }
    }

    if (heigthClassName) {
      topSectionClassNames.push(heigthClassName);
    }

    return (
      <React.Fragment>
        <section className={ topSectionClassNames.join(' ') } style={ topSectionStyle }>
          <ActualNavigation
            isLandingPage={ isLandingPage }
            bootstrapNavbarClassNames={ bootstrapNavbarClassNames }
            toggleSearch={ this.toggleSearch }
            showSearch={ this.state.showSearch }
            scrolled={ this.state.scrolled }
            navigationStyle={ navigationStyle }
          />

          <NavigationSection heigthClassName={ heigthClassName } />
          <ScrollToNextSectionLink heigthClassName={ heigthClassName } />
        </section>
        <Scroll.Element name="nextSection" />
      </React.Fragment>
    );
  }
}

export default Scrivito.connect(Navigation);
