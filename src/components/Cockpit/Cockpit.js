import React, {useEffect} from 'react';
import cls from './Cockpit.css';
const cockpit = (props) => {
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    // combined of componentDidUpdate + componentDidMount 
    setTimeout(() => {
      alert('saved data to cloud');
    }, 1000);
    return () => {
      console.log('[Cockpit.js] cleanup work in useEffect');
    };
  }, []) //empty array means no depencdency so no never re-run but only default first time  // or can pass props.persons to only check on persosns

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');
    return () => {
      console.log('[Cockpit.js] cleanup work in 2nd useEffect'); // this is fucking executed before the one above
    };
  })
  // userEffect();
  const assignedCls = [];
  let btnClass = '';
  if(props.showPersons) {
      btnClass = cls.Red;
  }
  if(props.personsLength <= 2 ){
    assignedCls.push(cls.red); // class = ['red']
  }
  if (props.personsLength <= 1 ) {
    assignedCls.push(cls.bold) // class = ['red', 'bold']
  }

  return(
      <div className={cls.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedCls.join(' ')}>This is really working</p>
      <button 
      className ={btnClass}
      onClick={() => props.clicked()}>Toggle Persons</button>
      </div>
  );
};

export default React.memo(cockpit); // optimization might not need to update