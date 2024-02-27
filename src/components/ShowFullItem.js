import React, { Component } from 'react'
import { FaXmark} from "react-icons/fa6";

export class ShowFullItem extends Component {
  render() {
    return (
      <div className='full-item'>
        <div>
        <FaXmark className='btn-window' onClick={() => this.props.onShowItem(this.props.item)} />
        <img src={"./img/" + this.props.item.img} alt='' />
        <b>{this.props.item.desc}</b>
        <p>{this.props.item.price} UAH</p>
        <div className='button-basket' onClick={() =>this.props.onAdd(this.props.item)}>+</div>
      </div>
      </div>
    )
  }
}

export default ShowFullItem