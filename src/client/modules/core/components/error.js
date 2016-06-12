import React, { Component } from "react";
import { View, Text } from 'react-native';

export default class Error extends Component {
  render() {
    console.log('ERROR');
    return (
      <View>
        <Text>Error</Text>
      </View>
    );
  }
}
