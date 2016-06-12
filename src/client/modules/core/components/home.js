import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { Container, Content, Button } from 'native-base';

export default class Home extends Component {
  render() {
    const { Actions } = this.props;

    return (
      <Container>
        <Content style={{paddingHorizontal: 10}}>
          <Button block onPress={Actions.login}>Login</Button>
        </Content>
      </Container>
    );
  }
}
