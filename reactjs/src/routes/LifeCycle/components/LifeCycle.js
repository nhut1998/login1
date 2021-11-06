import React, { Component } from 'react'
import Child from './Child'

export default class LifeCycle extends Component {
  constructor(props) {
    console.log('constructor')
    super(props)
    this.state = {
      couter: 0,
      stable: false
    }
  }

  componentDidMount() {
    console.log('componentDidMount')
    this.dirty = setInterval(() => {
      console.log('dirty')
    }, 1000) // 1000ms = 1s
  }

  componentDidUpdate() {
    console.log('componentDidUpdate')
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
    clearInterval(this.dirty)
  }

  render() {
    console.log('render')
    const { couter, stable } = this.state

    return (
      <React.Fragment>
        <div className='text-center display-4'>
          Life cycle {couter}
        </div>
        <button onClick={() => { this.setState({ couter: couter + 1 }) }}>Increase+</button>
        <button onClick={() => { this.setState({ stable: !stable }) }}>Toggle stable</button>
        <Child stable={stable} />
      </React.Fragment>
    )
  }
}
