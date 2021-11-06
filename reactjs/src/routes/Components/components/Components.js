import React from 'react'
import Button from './Button'

export default class Components extends React.Component {
  state = {
    counter: 0
  }

  render() {
    const { counter } = this.state

    return (
      <div className='container'>
        <h1 className='text-center'>Demo components</h1>
        <div className='me-2 d-inline-block'>{counter}</div>
        <Button
          onBtnClick={() => { // onBtnClick là tên props đặt gì cũng được
            // counter++ === counter = counter + 1
            this.setState({ counter: counter + 1 })
          }}
        >
          Increase+
        </Button>
      </div>
    )
  }
}
