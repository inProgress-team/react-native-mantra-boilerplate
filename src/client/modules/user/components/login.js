import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Button } from 'native-base';

import LoginForm from '../forms/login';

export default class Login extends Component {
  login() {
    const { login } = this.props;
    console.log(this.refs.form);
    const value = this.refs.form.getValue();
    console.log(value);
    if(value) {
      login(value);
    }
  }
  render() {
    const { login } = this.props;

    return (
      <Container>
        <Content style={styles.content}>
          <LoginForm ref="form" />
          <Button block onPress={this.login.bind(this)}>Login</Button>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    padding: 10
  }
});
