import React from 'react';
import './Person.css'

const person = (props) => {
    return (
        <div className='Person'>
            <h1 onClick={props.click}>I'm {props.name}.</h1>
            <p>My age is {props.age} years.</p>
            <p>{props.children}</p>
            <input type='text' onChange={props.changed} value={props.name} />
        </div>
    );
};

export default person;