export default {
  login({ Meteor, LocalState }, { email, password }) {

    LocalState.set('TEST', true);
    setTimeout(()=>{
      LocalState.set('TEST', false);
    }, 2000);
    /*
    //LocalState.set('LOGIN_ERROR', null);
    console.log('login', email, password);
    Meteor.loginWithPassword(email, password, (err) => {
      if (err && err.reason) {
        //return LocalState.set('LOGIN_ERROR', err.reason);
      }
      return LocalState.set('LOGIN_SUCCESS', true);
      console.log(err);
      console.log(Meteor.user());
    });
    */
  }
};
