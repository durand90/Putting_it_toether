import React from 'react';
import './App.css';

import PersonCard from './components/PersonCard';

function App() {


  return (
    <div className="App">
      <div>
    <PersonCard lastName={"Doe, "}  firstName={" Jane"} age={45} hairColor={"Black"}/>
    <PersonCard lastName={"Fillmore, "} firstName={"Millard"} age={50} hairColor={"Brown"}/>
    <PersonCard lastName={"Smith, "} firstName={" Maria"} age={63} hairColor={"Brown"}/>
    <PersonCard lastName={"Smith, "} firstName={" John"} age={88} hairColor={"Brown"}/>
    </div>
    
    </div>
    
  );
}

export default App;
