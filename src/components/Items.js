import React, { Component } from "react";
import Item from "./Item";
import "./Items.scss";

export class Items extends Component {
  render() {
    return (
      <section>
        <h1 className="promo">Promotions and offers</h1>
        <div className="items">
          {this.props.items.map((el) => (
            <Item
              onShowItem={this.props.onShowItem}
              key={el.id}
              item={el}
              onAdd={this.props.onAdd}
            />
          ))}
        </div>
      </section>
    );
  }
}

export default Items;
