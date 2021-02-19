import React from 'react';

import Person from './Person/Person';

const persons = (props) => {
    return (
        <div>
          {props.personsList.map((person, index) => {
            return (
              <Person 
                click={() => props.click(index)}
                changed={(event) => props.changed(event, person.id)}
                name={person.name} 
                age={person.age} 
                key={person.id}
              />
            );
          })}
        </div>
    );
}

export default persons;