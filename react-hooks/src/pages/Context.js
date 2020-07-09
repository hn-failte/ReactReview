import React, { createContext } from 'react'

const store = {
  a: 1,
  b: 2,
}

const Context = createContext(store.a) // 默认值

class ComA extends React.Component {
  render() {
    return (
      <Context.Consumer>
        {(value) => (
          <div>
            <div>state: {value}</div>
          </div>
        )}
      </Context.Consumer>
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
