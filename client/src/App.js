import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Creatures from './components/Creatures'
import SingleCreature from './components/SingleCreature'

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/creatures" component={Creatures}/>
            <Route path="/creatures/:id" component={SingleCreature}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App