import Home from './Home'
import Backlog from './Backlog'
import SingleGame from './SingleGame'
import { Route, Switch } from 'react-router-dom'
import React, {Component} from 'react'

export default class Main extends Component {
   render(){
       return (
          <Switch>
           <Route exact path='/' component={Home}/>
           <Route exact path='/game/:gameTitle' component={SingleGame} />
           <Route exact path='/user/:userId' component={Backlog} />
          </Switch>
       )
   }
}