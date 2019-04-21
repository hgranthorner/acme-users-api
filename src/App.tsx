import React from 'react'
import { Nav, Home, Users } from './components'
import { Route, Switch, Redirect } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <h1>Acme Users</h1>
      <Nav/>
      <Switch>
        <Route path={'/'} exact render={() => <Redirect to={'/home'}/>} />
        <Route path={'/home'} exact component={ Home } />
        <Route path={'/users'} exact comoponent={ Users } />
      </Switch>
    </div>
  )
}

export default App