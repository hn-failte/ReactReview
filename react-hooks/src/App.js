import React, { Suspense } from 'react'
import pages from './pages'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

export default class extends React.Component {
  render() {
    return (
      <Suspense
        fallback={
          <div style={{ textAlign: 'center', marginTop: 200 }}>Loading...</div>
        }
      >
        <Router>
          <Switch>
            {pages.map((page) => (
              <Route
                exact
                path={page.path}
                render={() => <page.component bus={this.bus} />}
              />
            ))}
            <Redirect from="**" to="/menu" />
          </Switch>
        </Router>
      </Suspense>
    )
  }
}
