import React from 'react';

class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      ProductList: [
        {
          id: 1,
          name: 'Yaaa',
          link: 'htthttps://github.com/sanoyo/Product-Huntps://code',
          upvote: 199,
          description: 'aaatest',
          maker: {
            name: 'sano',
            avator: '/img/hieu.jpeg'
          }
        },
        {
          id: 2,
          name: 'Waaa',
          link: 'htthttps://github.com/sanoyo/Product-Huntps://code',
          upvote: 19,
          description: 'aaatest',
          maker: {
            name: 'sano',
            avator: '/img/hieu.jpeg'
          }
        }
      ]
    }
  }

  render() {
    return (
      <section>
        <header>
          <img src="/img/banner.jpeg" width="100%" />
        </header>

        <section>
          <section className="container">
            <ul className="product-list">
              <li className="product-item">
                <a className="upvote-button" href="#">
                  <span>
                    <i className="fas fa-sort-up"></i>
                  </span>
                  <br/>
                  {this.state.productList[0].upvote}
                </a>

                <img className="product-item-media" src={this.state.productList[0].media} />
                <section className="product-item-info">
                  <a href="#">
                    <h2>{this.state.productList[0].name}</h2>
                  </a>
                  <p>{this.state.productList[0].description}</p>
                  <a href="#">
                    <img className="small-avator" src={this.state.productList[0].maker.description} />
                  </a>
                </section>
                <a className="product-item-link" href={this.state.productList[0].link}>
                  <span>
                    <i className="fas fa-external-link"></i>
                  </span>
                </a>
              </li>

              <li className="product-item">
                <a className="upvote-button" href="#">
                  <span>
                    <i className="fas fa-sort-up"></i>
                  </span>
                  <br/>
                  {this.state.productList[1].upvote}
                </a>

                <img className="product-item-media" src={this.state.productList[1].media} />
                <section className="product-item-info">
                  <a href="#">
                    <h2>{this.state.productList[1].name}</h2>
                  </a>
                  <p>{this.state.productList[1].description}</p>
                  <a href="#">
                    <img className="small-avator" src={this.state.productList[1].maker.description} />
                  </a>
                </section>
                <a className="product-item-link" href={this.state.productList[1].link}>
                  <span>
                    <i className="fas fa-external-link"></i>
                  </span>
                </a>
              </li>
            </ul>
          </section>
        </section>
      </section>
    )
  }
}

export default HomePage;
