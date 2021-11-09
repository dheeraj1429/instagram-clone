import React from "react";

import IconDiv from "../IconDiv/IconDiv";
import SearchComponent from "../SearchComponent/SearchComponent";

import "./NavbarComponent.css";

function NavbarComponent() {
  return (
    <div className="Navbar">
      <div className="Container">
        <div className="Navbar__Items">
          <div className="Logo__Div">
            <img src="/Images/logo.png" />
          </div>
          <div className="SearchDiv">
            <SearchComponent />
          </div>
          <div>
            <IconDiv />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavbarComponent;
