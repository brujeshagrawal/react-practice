import React, { Component } from 'react';
import Radium, {StyleRoot} from 'radium';

import './App.css';
import Person from './Person/Person';
import ErrorBoundary from './ErroBoundary/ErrorBoundary';

class App extends Component {

  state = {
    persons : [
      { id: 1, name: 'Brujesh', age: 24},
      { id: 2, name: 'Yogesh', age: 21},
      { id: 3, name: 'Mukesh', age: 31}
    ],
    showPersons: false
  };

  nameChangedHandler = (event, personId) => {
    const persons = [...this.state.persons];
    const personIndex = persons.findIndex(p => p.id===personId)
    persons[personIndex].name = event.target.value;
    this.setState({persons});
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {

    const style = {
      backgroundColor: 'green',
      color: 'white',
      border: '1px solid blue',
      padding: '8px',
      font: 'inherit',
      cursor: 'pointer',
      ':hover': {
        color: 'black',
        backgroundColor: 'lightgreen'
      }
    };

    let persons = null;
    if(this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <ErrorBoundary key={person.id}>
                <Person 
                  click={() => this.deletePersonHandler(index)}
                  changed={(event) => this.nameChangedHandler(event, person.id)}
                  name={person.name} 
                  age={person.age} 
                />
              </ErrorBoundary>
            )
          })}
        </div>
      );
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    const classes = [];
    if(this.state.persons.length<=2){
      classes.push('red');
    }
    if(this.state.persons.length<=1){
      classes.push('bold');
    }

    return (
      <StyleRoot>
        <div className="App">
          <h1>Hi, I'm a React Application.</h1>
          <p className={classes.join(' ')}>It is working fine.</p>

          <button 
            style={style}
            onClick={this.togglePersonsHandler}
          >Toggle Persons</button>

          {persons}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
