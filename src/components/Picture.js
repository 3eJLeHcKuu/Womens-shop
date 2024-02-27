import React, { Component } from 'react'

export class Picture extends Component   {
  render() {
    return (
      <div className='picture'>
        <img src={"./img/" + this.props.picture.img} alt='' /> 
      </div>
    )
  }
}

export default Picture
