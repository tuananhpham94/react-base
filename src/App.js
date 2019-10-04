import React, { Component } from 'react';
import cls from './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {id:1, name: 'Daniel', age: 26},
      {id:2, name: 'Ly', age: 25},
      {id:3, name: 'test', age: 25}
    ],
    otherState: 'test',
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    let persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

 

  render() {

    let persons = null;
    let btnClass = '';
    if (this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
            click={() =>this.deletePersonHandler(index)}
            name={person.name} 
            age={person.age}
            key={person.id} 
            changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
          
        </div> 
      );
      btnClass = cls.Red;
    }

    const assignedCls = [];

    if(this.state.persons.length <= 2 ){
      assignedCls.push(cls.red); // class = ['red']
    }
    if (this.state.persons.length <= 1 ) {
      assignedCls.push(cls.bold) // class = ['red', 'bold']
    }

    return (
        <div className={cls.App}>
          <h1>Hi, I'm a React app</h1>
          <p className={assignedCls.join(' ')}>This is really working</p>
          <button 
          className ={btnClass}
          onClick={() => this.togglePersonsHandler()}>Toggle Persons</button>
          {persons}
        </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'should be wokr'));
  }
}

export default App;
