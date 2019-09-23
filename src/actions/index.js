import alt from '../alt';
import Firebase from 'firebase';

class Actions {
  login() {
    return (dispatch) => {
      // TODO Facebook Login動作しない
      var provider = new Firebase.auth.FacebookAuthProvider();
      Firebase.auth().signInWithPopup(provider).then(function(result) {
        var user = result.user;

        var profile = {
          id: user.uid,
          name: user.providerData[0].displayName,
          avatar: user.providerData[0].photoURL
        }

        Firebase.database().ref('/users/' + user.uid).set(profile);
        dispatch(user);

      }).catch(function(error) {
        console.log('Failed!', error);
      });
    }
  }
}

export default alt.createActions(Actions);