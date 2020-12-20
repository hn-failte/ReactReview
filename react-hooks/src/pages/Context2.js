import React, { createContext } from 'react'

const store = {
  a: 1,
  b: 2,
}

const Context = createContext(store.a) // 默认值

class ComA extends React.Component {
  static contextType = Context
  render() {
    return (
      <div>
        <div>state: {this.context}</div>
      </div>
    )
  }
}

export default class extends React.Component {
  render() {
    return (
      <Context.Provider value={store.b}>
        <ComA />
      </Context.Provider>
    )
  }
}
