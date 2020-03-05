import React, { Component } from 'react'
import './App.css';
import { Route, Switch} from 'react-router-dom'

//Examples
import ButtonExample from './components/Button/example';
import DropDownListExample from './components/DropDownList/example';
import InputExample from './components/Input/example';

//Screens
import Home from './screens/home';
import Inventory from './screens/inventory';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ButtonExample />
        <DropDownListExample />
        <InputExample />
        

        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/inventory" component={Inventory}/>
        </Switch>

    </div>
    );

  }
}




export default App;
