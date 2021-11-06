import React, { Component } from 'react'

export default class Child extends Component {
  shouldComponentUpdate(nextProps) {
    // if (nextProps.stable === true) return false
    // return true
    console.log('shouldComponentUpdate', !nextProps.stable)
    return !nextProps.stable
  }

  render() {
    console.log('child\'s render')

    return (
      <div>
        Child
      </div>
    )
  }
}
