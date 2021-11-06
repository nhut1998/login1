
import React from 'react'
import black from '../../../assets/images/iphone-12-black.jpeg'
import blue from '../../../assets/images/iphone-12-blue.jpeg'
import green from '../../../assets/images/iphone-12-green.jpeg'
import purple from '../../../assets/images/iphone-12-purple.jpeg'
import red from '../../../assets/images/iphone-12-red.jpeg'
import white from '../../../assets/images/iphone-12-white.jpeg'

const colors = [
    { id:1, color: blue, hex: '#073658' },
    { id:2, color: black, hex: '#201F25' },
    { id:3, color: white, hex: '#F9F8F6' },
    { id:4, color: green, hex: '#E6FADF' },
    { id:5, color: red, hex: '#E33939' },
    { id:6, color: purple, hex: '#C1B8EF' }
]
export default class State extends React.Component {
    state = {
        defaultColor: blue,
        colorArr: colors
    }

    onChangeColor(defaultColor) {
        return () => {this.setState({ defaultColor })}
    }

    render () {
        const { defaultColor, colorArr } = this.state
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-6'>
                        <img className='img-fluid' src={defaultColor} alt='iPhone-12' />
                    </div>
                    <div className='col-6'>
                        {
                            colorArr.map(radioColor => (
                                <div className='mt-3 pt-3'>
                                    <input className='d-none' type="radio" name="color-picker" id={radioColor.id} onChange={this.onChangeColor(radioColor.color)} />
                                    <label htmlFor={radioColor.id}>
                                        <div style={{ backgroundColor: radioColor.hex, width: 60, height: 60, cursor: 'pointer', borderRadius: 50 }} />
                                    </label>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        )
    }
}