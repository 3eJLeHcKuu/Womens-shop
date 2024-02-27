import React, { Component } from 'react'
import Picture from './Picture'

export class Pictures extends Component {
  render() {
    return (
      <main>
        {this.props.pictures.map(el =>(
            <Picture key={el.id} picture={el} />
            ))}
      </main>
    )
  }
}

export default Pictures