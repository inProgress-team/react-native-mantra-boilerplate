import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Container, Content, Button, Card, CardItem } from 'native-base';

export default class Home extends Component {
  render() {
    const { Actions, user, logout } = this.props;
    console.log(user);
    return (
      <Container>
        <Content style={styles.content}>
          {!user &&
            <Button block onPress={Actions.login}>Login</Button>
          }

          {user &&
            <Button danger block onPress={logout}>Logout</Button>
          }
          {user &&
            <Card style={styles.card}>
              <CardItem header>
                <Text>Vous êtes connecté</Text>
              </CardItem>

              <CardItem>
                  <Text>_id: {user._id}</Text>
                  <Text>email: {user.emails[0].address}</Text>
                  <Text>name: {user.profile.firstName + ' ' + user.profile.lastName}</Text>
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
  card: {
    marginTop: 20
  }
});
