import React, { useState, useEffect, useRef } from 'react'

export default () => {
  const ref = useRef()
  const [val, setVal] = useState({})
  const [val2, setVal2] = useState({})
  useEffect(() => {
    console.log(val)
    return () => {
      console.log('componentWillUnmount')
    }
  }, [])
  useEffect(() => {
    console.log(val)
  }, [val])

  useEffect(() => {
    console.log(val2, ref.current)
  }, [val2])
  return (
    <div
      ref={ref}
      onClick={() => {
        console.log(ref.current)
        setVal(Object.assign({}, val, { val: 1 }))
        setVal2(Object.assign({}, val2, { val2: 1 }))
      }}
    >
      {val.val || 'val'}
      {JSON.stringify(val)}
    </div>
  )
}
