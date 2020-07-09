import React, { useState, useEffect, useRef } from 'react'

const useMyHook = (cb) => {
  const [valA, setValA] = useState('z')
  const [valB, setValB] = useState('z')
  useEffect(() => {
    console.log(valA, valB)
    console.log('My hook mounted')
    typeof cb === 'function' && cb(setValA, setValB)
    return () => {
      console.log('My hook unmount')
    }
  }, [valA, valB])
}

export default () => {
  const ref = useRef()
  const [val, setVal] = useState({})
  const [val2, setVal2] = useState({})
  useMyHook((setA, setB) => {
    setA(10)
    setB(20)
  })
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
      <div>{'Open Developer Panel'}</div>
      <div>{val.val || 'val'}{'Click To Change Val'}</div>
      {'val: ' + JSON.stringify(val)}
    </div>
  )
}
