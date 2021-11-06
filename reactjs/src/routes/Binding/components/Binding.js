import React from 'react';

const arr = ['a', 'b', 'c'] // Function outside

export default class Binding extends React.Component {
  content = 'Content data' // attribute của chính component. Function inside

  render() { // method
    const title = 'ReactJS - Binding data' // in render method

    return (
      <div>
        {title}
        <div>{this.content}</div>
        {arr}
        {/* đây gọi là binding data */}
      </div>
    )
  }
}
