import "./App.css";
import NavbarComponent from "./Components/NavbarComponent/NavbarComponent";
import HomePage from "./Pages/HomePage/HomePage";

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* Navbar-Component */}
      <NavbarComponent />

      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
