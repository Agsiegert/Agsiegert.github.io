import './signUpForm.html';

class SignUpFormWidgetComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checkboxState: true,
    };
  }

  onSubmit() {
    this.preventDefault();
  }

  toggle() {
    this.setState({
      checkboxState: !this.state.checkboxState,
    });
  }

  render() {
    const widget = this.props.widget;
    const isEnabled = !this.state.checkboxState;
    const agreement = this.state.checkboxState
      ? 'checkbox missing' : 'checkbox';
    const reminder =
      <span>
        { this.state.checkboxState ? 'Please agree to text' : '' }
      </span>;
    const classNames = [];
    if (widget.get('isTransparent') === 'yes') {
      classNames.push('panel-white-transparent');
    } else {
      classNames.push('panel');
      classNames.push('panel-padding');
      classNames.push('floating-label');
    }

    return (
      <div className={ classNames.join(' ') }>
        <form method="post" onSubmit={ this.onSubmit.bind(this) }>
          <input type="hidden" name="form-name" value="signUp" />
          <div className="hidden">
              <label>Don’t fill this out: <input name="bot-field" /></label>
          </div>
          <Scrivito.ContentTag
            content={ widget }
            attribute="title"
            tag="h1"
            className="h3 text-center"
          />
          <div className="form-group">
            <label htmlFor="signUpUsername">Your username</label>
            <input
              className="form-control input-lg"
              id="signUpUsername"
              name="Username"
              placeholder="Username"
              type="text"
            />
          </div>
          <div className="form-group">
            <label htmlFor="SignUpEmail">Your email</label>
            <input
              className="form-control input-lg"
              id="SignUpEmail"
              name="Email"
              placeholder="alice@example.org"
              type="email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="SignUpPassword1">Your password</label>
            <input
              className="form-control input-lg"
              id="SignUpPassword1"
              name="Password1"
              placeholder="Password"
              type="password"
            />
          </div>
          <div className="form-group">
            <label htmlFor="SignUpPassword2">Confirm password</label>
            <input
              className="form-control input-lg"
              id="SignUpPassword2"
              name="Password2"
              placeholder="Confirm Password"
              type="password"
            />
          </div>
          <div className={ agreement }>
            <label>
              <input
                type="checkbox"
                value="true"
                name="agreementRead"
                onClick={ this.toggle.bind(this) }
              />
              I read the licence agreement.
            </label>
            { reminder }
          </div>
          <button
            disabled={ !isEnabled }
            className="btn btn-primary btn-block"
            type="submit">
            { widget.get('buttonText') || 'Sign up now' }
          </button>
        </form>
      </div>
    );
  }
}

Scrivito.provideComponent('SignUpFormWidget', SignUpFormWidgetComponent);
