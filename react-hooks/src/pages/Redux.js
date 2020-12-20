import React from 'react'
import { createStore, combineReducers, applyMiddleware } from 'redux'

/* redux start */
const reducer1 = (
  state = {
    a: 1,
  },
  { type, payload }
) => {
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

const reducer2 = (
  state = {
    a: 2,
  },
  { type, payload }
) => {
  switch (type) {
    default:
      return state
  }
}

const store = createStore(combineReducers({ reducer1, reducer2 }))
/* redux end */

// 常规类组件中使用Redux
export default class extends React.Component {
  constructor() {
    super()
    this.state = {
      ...store.getState(),
    }
    console.log(this.state)

    store.subscribe(() => {
      this.setState(
        {
          ...store.getState(),
        },
        () => {
          console.log(this.state)
        }
      )
    })
  }
  render() {
    const { reducer1, reducer2 } = this.state
    return (
      <div
        onClick={() => {
          store.dispatch({ type: 'change1a', payload: 100 })
        }}
      >
        <div>reducer1: {JSON.stringify(reducer1)}</div>
        <div>reducer2: {JSON.stringify(reducer2)}</div>
      </div>
    )
  }
}
