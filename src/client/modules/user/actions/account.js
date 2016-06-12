export default {
  login({ Meteor, LocalState }, { email, password }) {

    LocalState.set('LOGIN_ERROR', null);
    LocalState.set('LOGIN_SUCCESS', null);

    Meteor.loginWithPassword(email, password, (err) => {
      if (err && err.reason) {
        return LocalState.set('LOGIN_ERROR', err.reason);
      }
      return LocalState.set('LOGIN_SUCCESS', true);
    });
  },
  logout({ Meteor }) {
    Meteor.logout();
  }
};
