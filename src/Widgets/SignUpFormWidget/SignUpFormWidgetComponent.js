Scrivito.provideComponent('SignUpFormWidget', ({ widget }) => {
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
      <form>
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
            placeholder="Username"
            type="text"
          />
        </div>
        <div className="form-group">
          <label htmlFor="SignUpEmail">Your email</label>
          <input
            className="form-control input-lg"
            id="SignUpEmail"
            placeholder="alice@example.org"
            type="email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="SignUpPassword1">Your password</label>
          <input
            className="form-control input-lg"
            id="SignUpPassword1"
            placeholder="Password"
            type="password"
          />
        </div>
        <div className="form-group">
          <label htmlFor="SignUpPassword2">Confirm password</label>
          <input
            className="form-control input-lg"
            id="SignUpPassword2"
            placeholder="Confirm Password"
            type="password"
          />
        </div>
        <div className="checkbox">
          <label>
            <input value="" type="checkbox" />
            I read the licence agreement.
          </label>
        </div>
        <button className="btn btn-primary btn-block">
          { widget.get('buttonText') || 'Sign up now' }
        </button>
      </form>
    </div>
  );
});
