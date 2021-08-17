//Import React
import React from 'react';

// Importing ShowPerson File
import ShowPerson from '../Pages/ShowPerson';

//Creating Functional Component
const ShowPersonComponent = props =>{
    return(
        <div>
            {props.activeState.map((items,index)=>{
                return <ShowPerson key={items.id} id={items.id} name={items.name} age={items.age} go={index}click={(event)=>props.click(index)}/>
            })}
        </div>
    )

}

//Exporting ShowPersonComponent
export default ShowPersonComponent;