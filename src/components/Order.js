import React, { Component } from "react";
import { FaTrash } from "react-icons/fa6";

export class Order extends Component {
  render() {
    return (
      <div className="item">
        <img src={"./img/" + this.props.item.img} alt="" />
        <b>{this.props.item.desc}</b>
        <p>{this.props.item.price} UAH</p>
        <FaTrash
          className="delete-icon"
          onClick={() => this.props.onDelete(this.props.item.id)}
        />
      </div>
    );
  }
}

export default Order;
