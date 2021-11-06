import { render } from '@testing-library/react'
import React from 'react'

const colors = [
    {id: 1, colorCode: 'red'},
    {id: 2, colorCode: 'green'},
    {id: 3, colorCode: 'blue'},
    {id: 4, colorCode: 'purple'},
    {id: 5, colorCode: 'black'}
]

export default class ChooseColor extends React.Component {
    state = {
        colorDefault: 'red',
        colorArr: colors,
        sizeDefault: 16
    }

    changeColor(colorNew) {
        this.setState({ colorDefault: colorNew })
    }

    changeSize(number) {
        if (number === 1) {
            this.setState({ sizeDefault: this.state.sizeDefault +1 })
        } else {
            this.setState({ sizeDefault: this.state.sizeDefault -1})
        }
    }

    render() {
        const { colorDefault, colorArr, sizeDefault } = this.state
        return (
           <React.Fragment>
            <div>
                {
                    colorArr.map(color => {
                        return (
                            <div onClick={() => this.changeColor(color.colorCode)} key={color.id} style={{ backgroundColor: color.colorCode, width: 100, height: 100, cursor: 'pointer' }}></div>
                        )
                    })
                }
            </div>
            <button onClick={() => this.changeSize(-1)} className='btn-danger'>-</button> <button onClick={() => this.changeSize(+1)} className='btn-success'>+</button>
            <p style={{ color: colorDefault, fontSize: sizeDefault }}>This color is {colorDefault} and the size is {sizeDefault}px </p>
           </React.Fragment>
        )
    }
}