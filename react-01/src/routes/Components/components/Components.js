import React from 'react'
import Button from './Button'

export default class Components extends React.Component {
    state = {
        counter: 1
    }
    render() {
        const { counter } = this.state
        return (
            <div className='text-center'>
                <Button onBtnClick={() => {this.setState({counter: counter + 1})}}>
                    Increase Number by 1
                </Button>
                <div>{counter}</div>
            </div>

        )
    }
}