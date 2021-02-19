import React from 'react';
import Radium from 'radium';

const cockpit = (props) => {
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

    const classes = [];
    if(props.personsLength<=2){
      classes.push('red');
    }
    if(props.personsLength<=1){
      classes.push('bold');
    }

    if(props.showPersons){
        style.backgroundColor = 'red';
        style[':hover'] = {
            backgroundColor: 'salmon',
            color: 'black'
        }
    }

    return (
        <div>
            <h1>Hi, I'm a React Application.</h1>
            <p className={classes.join(' ')}>It is working fine.</p>
            <button 
                style={style}
                onClick={props.click}
            >Toggle Persons</button>
        </div>
    );
}

export default Radium(cockpit);