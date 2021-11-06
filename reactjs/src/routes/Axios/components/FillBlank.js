// import React, { useState, useImperativeHandle, forwardRef, useCallback } from 'react'

// function FillBlank({ answers, refProp }) {
//   const [ans, setAns] = useState('')

//   const checkExact = useCallback(() => {
//     return ans === answers[0].content ? 1 : 0
//   }, [ans, answers])

//   useImperativeHandle(refProp, () => ({ checkExact }), [checkExact])

//   return (
//     <div className='form-group'>
//       <input
//         onChange={e => setAns(e.target.value)}
//         type='text'
//         className='form-control'
//         placeholder='Nhập đáp án'
//       />
//     </div>
//   )
// }

// export default forwardRef((props, ref) => <FillBlank {...props} refProp={ref} />)

import React, { Component } from 'react'

export default class FillBlank extends Component {
  state = {
    ans: ''
  }

  checkExact () {
    return this.state.ans === this.props.answers[0].content ? 1 : 0
  }

  render() {
    return (
      <div className='form-group'>
        <input
          onChange={e => this.setState({ ans: e.target.value })}
          type='text'
          className='form-control'
          placeholder='Nhập đáp án'
        />
      </div>
    )
  }
}
