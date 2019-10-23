import React from 'react';
import cls from './Cockpit.css';
const cockpit = (props) => {
    const assignedCls = [];
    let btnClass = '';
    if(props.showPersons) {
        btnClass = cls.Red;
    }
    if(props.persons.length <= 2 ){
      assignedCls.push(cls.red); // class = ['red']
    }
    if (props.persons.length <= 1 ) {
      assignedCls.push(cls.bold) // class = ['red', 'bold']
    }

    return(
        <div className={cls.Cockpit}>
        <h1>Hi, I'm a React app</h1>
        <p className={assignedCls.join(' ')}>This is really working</p>
        <button 
        className ={btnClass}
        onClick={() => props.clicked()}>Toggle Persons</button>
        </div>
    );
};

export default cockpit;