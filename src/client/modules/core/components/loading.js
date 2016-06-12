import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Loading extends Component {
  render() {
    const { error } = this.props;
    console.log(this.props.error);
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }
}
