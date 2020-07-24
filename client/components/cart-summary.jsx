import React from 'react';
import CartSummaryItem from './cart-summary-item';
import { CSSTransitionGroup } from 'react-transition-group';

export default class CartSummary extends React.Component {

  render() {
    const items = this.props.cart.map((item, index) => {
      return (
        <CartSummaryItem key={index} item={item} />
      );
    });

    return (
      <CSSTransitionGroup
        transitionName="transition"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeave={false}>
        <div className="container">
          <h4><a href="#" className="card-link m-1 mt-3 text-muted" style={{ cursor: 'pointer' }} onClick={() => { this.props.setView('catalog', {}); }}> &lt; Back to Catalog</a></h4>
          <h3>My Cart</h3>
          {items}
        </div>
      </CSSTransitionGroup>
    );
  }
}
