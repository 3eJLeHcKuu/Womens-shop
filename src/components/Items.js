import React, { Component } from "react";
import Item from "./Item";
import "./Items.scss"

export class Items extends Component {
  render() {
    return (
      <>
        <h1 className="promotion">Promotions and offers</h1>
        <main>
          {this.props.items.map((el) => (
            <Item
              onShowItem={this.props.onShowItem}
              key={el.id}
              item={el}
              onAdd={this.props.onAdd}
            />
          ))}
        </main>
      </>
    );
  }
}

export default Items;
