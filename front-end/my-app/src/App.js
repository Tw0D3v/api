import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import CreateUser from "./component/account";
function App() {
  return (
    <Router>
      <div>
        <Route path="/" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
