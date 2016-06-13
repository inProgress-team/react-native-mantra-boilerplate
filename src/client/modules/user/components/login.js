import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Container, Content, Button, Card, CardItem } from 'native-base';

import LoginForm from '../forms/login';

export default class Login extends Component {
  login() {
    const { login } = this.props;
    const value = this.refs.form.getValue();
    if(value) {
      login(value);
    }
  }
  render() {
    const { error, success } = this.props;

    return (
      <Container>
        <Content style={styles.content}>
          <LoginForm ref="form" />
          <Button block onPress={this.login.bind(this)} style={styles.loginButton}>Login</Button>
          {success &&
            <Card>
              <CardItem header>
                  <Text>Success</Text>
              </CardItem>
              <CardItem>
                  <Text>You are logged in</Text>
              </CardItem>
            </Card>
          }
          {error &&
            <Card>
              <CardItem header>
                  <Text>Error</Text>
              </CardItem>
              <CardItem>
                  <Text>{error}</Text>
              </CardItem>
            </Card>
          }
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    padding: 10
  },
  loginButton: {
    marginBottom: 20
  }
});
