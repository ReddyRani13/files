import React, { Component } from 'react'
import Childc from './Components/Childc'
import FunState from './Components/FunState'
import Effect from './Components/Effect'
import ListRendering from './Components/ListRendering'
import { UserProvider } from './Components/UserContext'
import ComponentA from './Components/ComponentA'
import ComponentD from './Components/ComponentD'
import Finall3 from './Components/Finall3'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";



export class App extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'rani'
        }
    }
    handleClick=()=>{
        this.setState({name:'joe'})
    }
    
    render() {
        return (
            <Router>
            <div>
                
            
            <nav>
            <ul>
              <li>
                <Link to="/Props">props</Link>
              </li>
              <li>
                <Link to="/Effect">Effect</Link>
              </li>
              <li>
                <Link to="/ComponenetA">ComponentA</Link>
              </li>
              <li>
                <Link to="/ComponenetD">ComponentD</Link>
              </li>
              <li>
                <Link to="/FunState">FunState</Link>
              </li>
              <li>
                <Link to="/ListRendering">ListRendering</Link>
              </li>
              <li>
                <Link to="/Finall3">Finall3</Link>
              </li>
            </ul>
          </nav>
  
          <Switch>
            <Route path="/Props">
            <Childc  name={this.state.name} handleClick={this.handleClick}/>
            </Route>
            <Route path="/FunState">
              <FunState />
            </Route>
            <Route path="/Effect">
              <Effect />
            </Route>
            <Route path="/ListRendering">
              <ListRendering />
            </Route>
            <Route path="/Finall3">
              <Finall3 />
            </Route>
            
          
          </Switch>
          <UserProvider value="john">
    <ComponentA />
    <ComponentD/>
        </UserProvider>
          </div>
    </Router>
    
      
        )
    }
}

export default App
