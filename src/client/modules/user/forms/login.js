import React, { Component } from 'react';
import t from 'tcomb-form-native';
const Form = t.form.Form;

const Email = t.refinement(t.String, function (email) {
  var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
});
const LoginFormStructure = t.struct({
  email: Email,
  password: t.String
});

const options = {
  fields: {
    email: { error: 'Not a valid email.', keyboardType: 'email-address', autoCapitalize: 'none', autoCorrect: false},
    password: { password: true, error: 'Required.'}
  }
};

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: {
        email: __DEV__ ? 'theo.mathieu@in-progress.io' : '',
        password: __DEV__ ? '123456' : ''
      }
    };
  }
  getValue() {
    return this.refs.form.getValue();
  }
  _onChange(value) {
    this.setState({value: value});
  }
  render() {
    const { value } = this.state;
    return (
      <Form
        ref="form"
        type={LoginFormStructure}
        options={options}
        value={value}
        onChange={this._onChange.bind(this)}
      />
    );
  }
}