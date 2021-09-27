import React from 'react';
import ComponentC from './ComponentC';
import { UserProvider } from './UserContext';


class App extends React.Component{
  render(){
    return(
      <div className="App">
        <UserProvider value="john">
        <ComponentC/>
        </UserProvider>
      </div>
    )
  }
}
export default App;