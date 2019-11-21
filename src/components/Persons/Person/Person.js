import React, {Component, Fragment} from 'react';
import PropStypes from 'prop-types';
import classes from './Person.css';
import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/Auxillary';
import AuthContext from '../../../context/auth-context';

class Person extends Component{
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext;

    componentDidMount () {
        // this.inputElement2.focus();
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated)
    }
    render(){
        console.log('[Person.js] rendering...');

        return (
                <Fragment>
                {this.context.authenticated ? <p>Is authenticated</p> : <p>Please login</p>}
                   
                <p key="i1" onClick={this.props.click}>
                    I'm a {this.props.name} and I am {this.props.age} years ago!
                    </p>
                <p key="i2">{this.props.children}</p>
                <input key="i3"
                    // ref={(inputEl) => {this.inputElement2 = inputEl}} 
                    ref={this.inputElementRef}
                    type="text" 
                    onChange={this.props.changed} 
                    value={this.props.name}/>
                    </Fragment>
                );
    }
   
}

Person.propTypes = {
    click: PropStypes.func,
    name: PropStypes.string,
    age: PropStypes.number,
    changed: PropStypes.func
};

export default withClass(Person, classes.Person);