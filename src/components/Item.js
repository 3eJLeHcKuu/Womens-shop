import React, { Component } from 'react'

export class Item extends Component {
  render() {
    return (
      <div className='item'>
        <img src={"./img/" + this.props.item.img} alt='' onClick={() => this.props.onShowItem(this.props.item)} /> 
        <b>{this.props.item.desc}</b>
        <p>{this.props.item.price} UAH</p>
        <div className='button-basket' onClick={() =>this.props.onAdd(this.props.item)}>+</div>
      </div>
    )
  }
}

export default Item