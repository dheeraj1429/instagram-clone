import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import NavbarComponent from "./Components/NavbarComponent/NavbarComponent";
import HomePage from "./Pages/HomePage/HomePage";
import SingInAndLoginComponent from "./Components/SignInAndLoginComponent/SignInAndLoginComponent/SingInAndLoginComponent";

import { auth, CreateUserProfileDocument } from "./Components/Firebase/Firebase.util";

import { useDispatch } from "react-redux";
import { setUserData } from "./Redux/Action/action";

import "./App.css";

function App() {
  const dispatch = useDispatch();

  const [User, setUser] = useState({
    currentUser: null,
  });

  useEffect(() => {
    auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        setUser({ currentUser: userAuth });
        dispatch(setUserData(userAuth));
        CreateUserProfileDocument(userAuth);
      }
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
