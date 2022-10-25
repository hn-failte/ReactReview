import React, { Suspense, useState } from 'react'
import pages from './pages'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

export default () => {
  const [styles] = useState({ loading: { textAlign: 'center', marginTop: 200 }})

  return (
    <Suspense
      fallback={
        <div style={styles.loading}>Loading...</div>
      }
    >
      <Router>
        <Switch>
          {pages.map((page) => (
            <Route
              exact
              path={page.path}
              render={() => <page.component />}
            />
          ))}
          <Redirect from="**" to="/menu" />
        </Switch>
      </Router>
    </Suspense>
  )
}
