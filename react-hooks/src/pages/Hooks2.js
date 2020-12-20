import React, { useReducer } from 'react'
import { createStore, combineReducers, applyMiddleware } from 'redux'

/* redux start */
const defaultState1 = {
  a: 2,
}

const reducer1 = (state = defaultState1, { type, payload }) => {
  switch (type) {
    case 'change1a':
      let newState = JSON.parse(JSON.stringify(state))
      newState.a = payload
      console.log(newState)
      return newState
    default:
      return state
  }
}

const defaultState2 = {
  a: 2,
}

const reducer2 = (state = defaultState2, { type, payload }) => {
  switch (type) {
    default:
      return state
  }
}
/* redux end */

// hooks中使用useReducer来处理Redux
export default () => {
  // 合并的
  const [state, dispatch] = useReducer(
    combineReducers({
      reducer1,
      reducer2,
    }),
    { defaultState1, defaultState2 }
  )
  // 单独的
  // const [state1, dispatch1] = useReducer(reducer1, defaultState1)
  // const [state2, dispatch2] = useReducer(reducer2, defaultState2)

  return (
    <div
      onClick={() => {
        // 合并的
        dispatch({ type: 'change1a', payload: 100 })
        // 单独的
        // dispatch1({ type: 'change1a', payload: 100 })
      }}
    >
      {/* 合并的 */}
      <div>state: {JSON.stringify(state)}</div>
      {/* 单独的 */}
      {/* <div>state1: {JSON.stringify(state1)}</div>
      <div>state2: {JSON.stringify(state2)}</div> */}
    </div>
  )
}
