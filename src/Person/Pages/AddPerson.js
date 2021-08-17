//Importing React Package
import React, { useState } from 'react';

//Importing AddPerson.css File
import classes from './AddPerson.css'
//Creating a Functional Component
const AddPerson = props =>{
    const [enteredText,setEnteredText] = useState('');
    const [enteredAge,setEnteredAge] = useState('');
    const textChangeHandler = (event) =>{
        event.preventDefault();
        const goal = {
                    name:enteredText,
                    age:enteredAge
                }
        setEnteredText('');
        setEnteredAge('');
        props.click(goal);
    }

    const changeText = (event) =>{
        console.log("changeText working");
        setEnteredText(event.target.value);
    }

    const changeAgeText = (event) =>{
        console.log("changAgeText working");
        setEnteredAge(event.target.value);
    }
    return(
        <div>
            <form method="POST">
                <input type="text"  placeholder="Enter your Name" onChange={changeText} value={enteredText}/>
                <br />
                <br />
                <input type="text"  placeholder="Enter your Age"  onChange={changeAgeText} value={enteredAge}/>
                <br />
                <br />
                <button className={classes.myBtn} onClick={textChangeHandler} type="button">Add Persons</button>
            </form>
        </div>
    )
}

//Exporting AddPerson File
export default AddPerson;