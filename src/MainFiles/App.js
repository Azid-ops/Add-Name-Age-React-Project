//Importing React and Component
import React, { Component } from 'react';

//Importing AddPersonComponent
import AddPersonComponent from '../Person/Components/AddPersonComponent';

//Importing App.css
import classes from './App.css';

//Creating Class Component
class App extends Component {
  render()
  {
    return (
      <div className={classes.App}>
        <AddPersonComponent />
      </div>
    );
  }
}

//Exporting App
export default App;
