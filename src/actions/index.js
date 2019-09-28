import alt from '../alt';
import Firebase from 'firebase';
import _ from 'lodash';
import ProductItem from '../react-components/Product/ProductItem';

// TODO 環境変数で使用する。
// Firebaseのconfig設定する。
var config = {
  apiKey: "YOUR_FIREBASE_API_KEY",
  authDomain: "your_firebase_app_name.firebaseapp.com",
  databaseURL: "https://your_firebase_app_name.firebaseio.com",
  storageBucket: "your_firebase_app_name.appspot.com"
};

// Firebaseを初期化する。
Firebase.initializeApp(config);

class Actions {
  initSession() {
    return (dispatch) => {

      Firebase.auth().onAuthStateChanged(function(result) {
        var profile = null;

        if (result) {
          profile = {
            id: result.id,
            name: result.providerData[0].displayName,
            avatar: result.providerData[0].photoURL,
          }
        }

        dispatch(profile);
      });
    }
  }

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

  logout() {
    return(dispatch) => {
      Firebase.auth().signOut().then(function() {
        dispatch(null);
      }, function(error) {
        console.log(error);
      });
    }
  }

  getProducts() {
    return(dispatch) => {
      Firebase.database().ref('products').on('value', function(snapshot) {
        var products = _(productValue).keys().map((productKey) => {
          var item = _.clone(productValue[productKey]);
          item.key = ProductKey;
          return item
        })
        .value()
        dispatch(products);
      });
    }
  }

  addProduct(product) {
    return (dispatch) => {
      Firebase.database().ref('products').push(product);
    }
  }

  addVote(productId, userId) {
    return (dispatch) => {
      var firebaseRef = Firebase.database().ref('products/' + productId + '/upvote');

      var vote = 0;
      firebaseRef.on('value', function(snapshot) {
        vote = snapshot.val();
      });
      firebaseRef.set(vote+1)
    }
  }
}

export default alt.createActions(Actions);
