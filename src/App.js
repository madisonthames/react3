import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css';
import Navigation from './components/Navigation'
import Data from './components/Data'
import Main from './components/Main'
import Buttons from './components/Buttons'
import NewForm from './components/NewForm'

 

class App extends Component {
  constructor() {
    super()

    this.state = {
      users: Data,
      activeId: 1
    }

    this.nextUser = this.nextUser.bind(this);
    this.previousUser = this.previousUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
  }

  nextUser() {
    if (this.state.activeId === this.state.users.length) {
    this.setState({ activeId: 1})
    } else {
      this.setState({ activeId: this.state.activeId += 1})
    }
  }

  previousUser() {
  if (this.state.activeId === 1) {
    this.setState({ activeId: this.state.users.length })
  } else {
    this.setState({ activeId: this.state.activeId -= 1})
  }
  }

  deleteUser() {
    this.state.users.splice(this.state.activeId - 1, 1)
    this.setState({activeId: this.state.activeId})
  }

  // newUser() {

  // }

  render() {
  return (
    <div className="App">
      <Navigation />
      <Main users={this.state.users} activeId={this.state.activeId}/>
      <Buttons activeId={this.state.activeId} actionNext={this.nextUser} actionPrevious={this.previousUser} actionDelete={this.deleteUser} actionNew={this.newUser}/>
    </div>
  );
  }
}

export default App;
