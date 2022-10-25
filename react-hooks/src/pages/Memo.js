import React, { useState, memo, useMemo, useDebugValue } from 'react'

const MemoComA = memo((props) => {
  const [value, setValueA] = useState(0)
  console.log('MemoComA rendered')
  return <div onClick={() => setValueA(value + 1)}>
    <div>MemoComA</div>
    <div>{props.value}</div>
    <div>{props.anotherValue}</div>
    <div>{value}</div>
  </div>
}, () => true)

const MemoComB = (props) => {
  const [value, setValueA] = useState(100)
  return useMemo(() => {
    console.log('MemoComB rendered')
    return (
      <div onClick={() => setValueA(value + 1)}>
        <div>MemoComB</div>
        <div>{props.value}</div>
        <div>{props.anotherValue}</div>
        <div>{value}</div>
      </div>
    )},
    [props.value]
  )
}

const UnMemoComC = (props) => {
  const [value, setValueA] = useState(500)
  console.log('UnMemoComC rendered')
  return <div onClick={() => setValueA(value + 1)}>
    <div>UnMemoComC</div>
    <div>{props.value}</div>
    <div>{props.anotherValue}</div>
    <div>{value}</div>
  </div>
}

export default () => {
  const [value1, setValue1] = useState(1000)
  const [value2, setValue2] = useState(1000)
  useDebugValue('value1')
  return (
    <div>
      <MemoComA value={value1} />
      <MemoComB value={value1} />
      <UnMemoComC value={value1} />
      <div onClick={() => setValue1(value1 - 1)}>change value1</div>
      <div onClick={() => setValue2(value2 - 1)}>change value2</div>
    </div>
  )
}
