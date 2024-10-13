import React from "react";
import Login from "./Login"

var userLogin = True

function conditionalLogin() {
  if (userLogin) {
    return <h1>Hello</h1>
  } else {
    <Login />;
  }
}

function App() {
  return (
    <div className="container">
      {conditionalLogin()}
    </div>
  );
}

export default App;
