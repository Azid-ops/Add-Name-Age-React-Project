//Importing React and Component
import React, {  useState } from 'react';

//Importing AddPerson File
import AddPerson from '../Pages/AddPerson';

//Importing ShowPersonComponent
import ShowPersonComponent from './ShowPersonComponent';

//Importing ShowPersonComponent.css
import classes from './ShowPersonComponent.css';

//Creating a Class Component
const AddPersonComponent= () =>{
    const [members,setmembers]=useState([
    ]);

    const deleteHandler = (id) =>{
        setmembers(members.filter((item,index)=>{
            console.log("Item value is: " + item);
            console.log("Index value is: " + index);
            console.log("Id value is: " + id);
            console.log(id!==index);
            return id !== index;
        }));
        console.log("deleteHandler responding");
    }

    const addPersonHandler = (goal) =>{
        setmembers((previousGoal)=>{
            return previousGoal.concat(goal);
        })
        console.log(members)
    }

    let noData = null;

    let noDataColor=[];
    if(members.length === 0)
    {
        noDataColor.push(classes.Red);
        noDataColor.push(classes.Bold)
        noData = (
            <div className={classes.card}>
                <h4 className={noDataColor.join(' ')}>No Data to Preview</h4>
            </div>
        )
    }

    return(
        <div>
            <h1>React Practice</h1>
            <AddPerson click={addPersonHandler} send={members}/>
            {noData}
            <ShowPersonComponent activeState={members} click={deleteHandler}/>
        </div>
    )
}

//Exporting AddPersonComponent
export default AddPersonComponent;