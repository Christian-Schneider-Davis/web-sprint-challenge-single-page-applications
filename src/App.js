import React from "react";

const App = () => {
  return (
    <>
      <h1>Lambda Eats</h1>
      
    </>
  );
};

export default App;

function setUp() {
  return (
    <div className="App">
      <form>
        <label htmlFor= 'fnameInput'> First Name</label>
        <input
        maxLength ="20"
        placeholder= "First Name"
        id= "fnameInput"
        name= "fname"
        type="text" />
        /><br />
      </form>
    </div>
  );
}

//export default setUp;