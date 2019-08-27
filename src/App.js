import React, {Component} from 'react';
import Login from "./Login/login"
import MainContainer from "./MainContainer/maincontainer"
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      logged: false
    }
  }
  login = (userName, password) =>{
    if(userName && password){
      console.log(userName && password)
        this.setState({logged: true});
    } else {
        alert("You must enter a username and password to log in.")
    }
  }
  render(){
    return (
      <div className="App">
        {this.state.logged ? <MainContainer/> : <Login login={this.login}/>}
      </div>
    )
  }
}

export default App;
