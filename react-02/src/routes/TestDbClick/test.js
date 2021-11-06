import React from 'react'

export default class test extends React.Component {
    render() {
        const { handleEditing } = this.props
        return (
            <li className='item'>
                <div onDoubleClick={handleEditing}>...</div>
                <input type="text" className='textInput' />
            </li>
        )
    }
}
