import React from 'react'

export default class Button extends React.Component {
  render() {
    const { onBtnClick, children } = this.props
    // props children là mặc định của React

    return (
      <button onClick={() => onBtnClick()}>{children}</button>
    )
  }
}
