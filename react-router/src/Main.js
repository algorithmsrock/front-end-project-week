import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import LambaNotes from './LambdaNotes'
import UpdateNotes from './UpdateNotes'

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
			<Route path='/lambdanotes' component={LambdaNotes}/>
      <Route path='/updatenotes' component={UpdateNotes}/>
    </Switch>
  </main>
)

export default Main
