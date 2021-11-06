import React from 'react'

export default class Button extends React.Component {
    render() {
        const { onBtnClick, children } = this.props
        return (
            <button onClick={onBtnClick}>{children}</button>
        )
    }
}