import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons : [
      { name: 'Brujesh', age: 24},
      { name: 'Yogesh', age: 21},
      { name: 'Mukesh', age: 31}
    ]
  };

  switchNameHandler = (newNAme) => {
    // console.log('Was Clicked');
    this.setState({persons : [
      { name: newNAme, age: 24},
      { name: 'Yogesh', age: 21},
      { name: 'Mukesh', age: 35}
    ]})
  }

  nameChangedHandler = (event) => {
    this.setState({persons : [
      { name: 'Brujesh', age: 24},
      { name: event.target.value, age: 21},
      { name: 'Mukesh', age: 35}
    ]})
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React Application.</h1>

      <button onClick={() => this.switchNameHandler('Brujesh Agrawal')}>Switch Name</button>

        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age} 
          click={this.switchNameHandler.bind(this, 'Bru')}
          changed={this.nameChangedHandler} >My Hobbies : Racing </Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
