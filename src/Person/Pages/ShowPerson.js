//Importing React Package
import React from 'react';

//Importing ShowPerson.css
import classes from './ShowPerson.css'

//Creating a Functional Component
const ShowPerson = props =>{
    let value = parseInt(props.go)+parseInt(1);
    console.log(value);
    return(
        <div>
            <p className={classes.go}>{value}</p>
            <div className={classes.show}>
                <ul>
                    <li key={props.key}>My name is {props.name} and i am {props.age} years old</li>
                    <button className={classes.myBtn} onClick={props.click}>Delete</button>
                    <br />
                </ul>
            </div>
        </div>
        
    )
}

//Exporting ShowPerson File
export default ShowPerson;