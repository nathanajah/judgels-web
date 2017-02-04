import React from 'react';
import { Field, reduxForm } from 'redux-form';

export class LoginForm extends React.Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form action="#" className="form-horizontal" method="post" role="form" onSubmit={handleSubmit}>
        <div className="form-group" id="usernameOrEmail_field">
          <label className="control-label col-md-4" htmlFor="usernameOrEmail">Username or Email</label>
          <div className="col-md-8">
            <Field name="usernameOrEmail" component="input" className="form-control" type="text"/>
          </div>
        </div>
        <div className="form-group" id="password_field">
          <label className="control-label col-md-4" htmlFor="password">Password</label>
          <div className="col-md-8">
            <Field name="password" component="input" className="form-control" type="password"/>
          </div>
        </div>
        <div className="form-group">
          <div className="col-md-8 col-md-offset-4">
            <button className="btn btn-primary" type="submit">Log In</button>
          </div>
        </div>
      </form>
    )
  }
}

// Decorate the form component
LoginForm = reduxForm({
  form: 'login' // a unique name for this form
})(LoginForm);
export default LoginForm;
