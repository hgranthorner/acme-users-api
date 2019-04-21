import React from 'react'
import { Nav, Home, Users } from './components'
import { Route, Switch, Redirect } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <h1>Acme Users</h1>
      <div className="margin-btm-sm">
        <Nav/>
      </div>
      <Switch>
        <Route path={'/'} exact render={() => <Redirect to={'/home'}/>}/>
        <Route path={'/home'} exact component={Home}/>
        <Route path={'/users'} exact render={() => <Redirect to={'/users/0'}/>}/>
        <Route path={'/users/search/:term/:id'} exact
               render={({ match }) => <Users index={match.params.id} searchTerm={match.params.term}/>}
        />
        <Route path={'/users/:id'} exact render={({ match }) => <Users index={match.params.id} searchTerm={''}/>}/>
      </Switch>
    </div>
  )
}

export default App