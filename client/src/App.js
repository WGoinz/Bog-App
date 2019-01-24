import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Creatures from './components/Creatures'
import SingleCreature from './components/SingleCreature'
import styled from 'styled-components'


class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/creatures" component={Creatures} />
            <Route exact path="/creatures/:id" component={SingleCreature} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App