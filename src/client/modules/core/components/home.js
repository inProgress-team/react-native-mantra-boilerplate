import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Button } from 'native-base';

export default class Home extends Component {
  render() {
    const { Actions } = this.props;

    return (
      <Container>
        <Content style={styles.content}>
          <Button block onPress={Actions.login}>Login</Button>
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
