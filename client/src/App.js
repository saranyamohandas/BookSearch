import React from "react";
import Books from "./pages/Books";
import SavedBooks from "./pages/Books";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
  	<Router>
    <div>
      <Nav />
      <Route exact path="/" component={Books} />
      {/* <Route exact path="/saved" component={SavedBooks} /> */}
     
    </div>
    </Router>
  );
}

export default App;
