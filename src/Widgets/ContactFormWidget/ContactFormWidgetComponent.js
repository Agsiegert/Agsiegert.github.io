import './contactForm.html';

class ContactFormWidgetComponent extends React.Component {
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
      <p>
        { this.state.checkboxState ? 'Please agree to text' : '' }
      </p>;

    return (
      <div className="row floating-label">
        <form method="post" onSubmit={ this.onSubmit.bind(this) }>
          <input
            type="hidden"
            name="form-name"
            value="contact"
          />
          <div className="hidden">
              <label>Don’t fill this out: <input name="bot-field" /></label>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <label htmlFor="contactName">Your name</label>
              <input
                className="form-control input-lg"
                id="contactName"
                name="contactName"
                placeholder="Name"
                type="text"
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <label htmlFor="contactFamilyName">Family name</label>
              <input
                className="form-control input-lg"
                id="contactFamilyName"
                name="contactFamilyName"
                placeholder="Family name"
                type="text"
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <label htmlFor="contactEmail">Email address</label>
              <input
                className="form-control input-lg"
                id="contactEmail"
                name="contactEmail"
                placeholder="Email"
                type="email"
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <label htmlFor="contactCompany">Company</label>
              <input
                className="form-control input-lg"
                id="contactCompany"
                name="contactCompany"
                placeholder="Company"
                type="text"
              />
            </div>
          </div>
          <div className="col-sm-12">
            <div className="form-group">
              <label htmlFor="contactMessage">Message</label>
              <textarea
                className="form-control input-lg"
                rows="3"
                id="contactMessage"
                name="contactMessage"
                placeholder="Your Message..."
              />
            </div>
            {
              widget.get('agreementText') && <div className={ agreement }>
                <label>
                  <input
                    type="checkbox"
                    name="contactAgreement"
                    value={ widget.get('agreementText') }
                    onClick={ this.toggle.bind(this) }
                  />
                  { widget.get('agreementText') }
                </label>
                { reminder }
              </div>
            }
            <button
              disabled={ !isEnabled }
              className="btn btn-primary btn-block"
              type="submit">
              { widget.get('buttonText') || 'send message' }
            </button>
          </div>
        </form>
      </div>
    );
  }
}

Scrivito.provideComponent('ContactFormWidget', ContactFormWidgetComponent);
