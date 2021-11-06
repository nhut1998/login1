import React from 'react'

export default class Child extends React.Component {
    render() {
        const { id, name } = this.props
        return (
            <div>
                {id}
                {name}
            </div>
        )
    }
}