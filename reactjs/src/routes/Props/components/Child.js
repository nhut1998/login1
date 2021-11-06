import React from 'react';

export default class Child extends React.Component {
  render() {
    const { id, name } = this.props // attribute được kế thừa từ React

    return (
      <div>
        {id}
        {name}
      </div>
    )
  }
}
