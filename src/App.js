import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Daniel', age: 26},
      {name: 'Ly', age: 25},
      {name: 'test', age: 25}
    ],
    otherState: 'test',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked');
    // DONT DO THIS: this.state.persons[0].name = "Tuan ANh";
    this.setState({
      persons: [
        {name: newName, age: 226},
        {name: 'Ly', age: 225},
        {name: 'test', age: 290}
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: "Manu", age: 226},
        {name: event.target.value, age: 225},
        {name: 'test', age: 290}
      ]
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

 

  render() {
    console.log(this.state.showPersons);
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;
    if (this.state.showPersons){
      persons = (
        <div>
          <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age} />
          <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age} 
            click={this.switchNameHandler.bind(this, 'MAXXXXXXX')}
            changed={this.nameChangedHandler}
            > My hoobies: Love </Person>
          <Person 
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age} />
        </div> 
      );
    }
    return (
      <div className="App">
        <h1>Hi, I'm a React app</h1>
        <p>This is really working</p>
        <button 
        style={style}
        onClick={() => this.togglePersonsHandler()}>Toggle Persons</button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'should be wokr'));
  }
}

export default App;
