import React, { createContext, useContext } from 'react'

const store = {
  a: 1,
  b: 2,
}

const Context = createContext(store.a) // 默认值

// hooks中Context的用法
const ComA = () => {
  const state = useContext(Context)
  return (
    <div>
      <div>state: {state}</div>
    </div>
  )
}

export default () => {
  return (
    <Context.Provider value={store.b}>
      <ComA />
    </Context.Provider>
  )
}
