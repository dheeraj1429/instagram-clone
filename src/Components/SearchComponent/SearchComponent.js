import React, { useState } from "react";

import "./SearchComponent.css";

function SearchComponent() {
  const [SearchData, setSearchData] = useState("");

  const ChangeSearchHandler = (event) => {
    setSearchData(event.target.value);
  };

  return (
    <div className="SearchGroup">
      <input type="search" placeholder="search" value={SearchData} onChange={ChangeSearchHandler} />
    </div>
  );
}

export default SearchComponent;
