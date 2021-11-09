import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import NavbarComponent from "./Components/NavbarComponent/NavbarComponent";
import HomePage from "./Pages/HomePage/HomePage";
import SingInAndLoginComponent from "./Components/SignInAndLoginComponent/SignInAndLoginComponent/SingInAndLoginComponent";

import { signInWithGoogle, auth } from "./Components/Firebase/Firebase.util";
import { useDispatch } from "react-redux";
import { setUserData } from "./Redux/Action/action";

import "./App.css";

function App() {
  const dispatch = useDispatch();

  const [User, setUser] = useState({
    currentUser: null,
  });

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      setUser({ currentUser: userAuth });
      dispatch(setUserData(User.currentUser));
    });
  }, []);

  return (
    <div className="App">
      {User.currentUser == null ? (
        <SingInAndLoginComponent />
      ) : (
        <>
          <NavbarComponent />

          <Switch>
            <Route exact path="/" component={HomePage} />
          </Switch>
        </>
      )}
    </div>
  );
}

export default App;
