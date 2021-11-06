import React, { useState, useImperativeHandle, forwardRef, useCallback } from 'react'

function MultiChoice({ id, answers, refProp }) {
  const [isExact, setExact] = useState(false)

  const checkExact = useCallback(() => {
    return isExact ? 1 : 0
  }, [isExact])

  useImperativeHandle(refProp, () => ({ checkExact }), [checkExact])

  return answers.map((ans, idx) => (
    <div key={idx} className='form-check'>
      <label className='form-check-label'>
        <input onChange={() => setExact(ans.exact)} type='radio' className='form-check-input' name={'ans-' + id} />
        {ans.content}
      </label>
    </div>
  ))
}

export default forwardRef((props, ref) => <MultiChoice {...props} refProp={ref} />)
