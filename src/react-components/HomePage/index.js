import React from 'react';
import ProductList from '../Product/ProductList';
import Firebase from 'firebase'

// TODO 環境変数で使用する。
// Firebaseのconfig設定する。
var config = {
  apiKey: "product-hunt",
  authDomain: "product-hunt",
  databaseURL: "product-hunt.com",
  projectId: "product-hunt",
  storageBucket: "product-hunt.com",
  messagingSenderId: "product-hunt",
  appId: "product-hunt"
};

// Firebaseを初期化する。
Firebase.initializeApp(config);


class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      productList: []
    }

    Firebase.database().ref('products').on('value', (snapshot) => {
      // Firebaseからデータを取得する。
      var products = snapshot.val();
      console.log(products)

      this.setState({
        productList: products
      })
    });
  }

  render() {
    return (
      <section>
        <header>
          <img src="/img/banner.jpeg" width="100%" />
        </header>

        <section>
          <section className="container">
            {
              this.state.productList
              ?
              <ProductList productList={this.state.productList} />
              :
              null
            }
          </section>
        </section>
      </section>
    );
  }
}

export default HomePage;