import React, { Component } from 'react';
import Radium, {StyleRoot} from 'radium';

import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

import './App.css';

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
    let persons = null;
    if(this.state.showPersons){
      persons = (
        <Persons
          personsList={[...this.state.persons]}
          click={this.deletePersonHandler}
          changed={this.nameChangedHandler} />
      );
    }

    return (
      <StyleRoot>
        <div className="App">
          <Cockpit
            personsLength={this.state.persons.length}
            showPersons={this.state.showPersons}
            click={this.togglePersonsHandler}
          />
          {persons}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
