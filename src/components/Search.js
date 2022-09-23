import React, {useState} from "react";

function Search() {
  const [search, setSearch] = useState("All")

  function handleSearch (event){
    setSearch(event.target.value);
  }

  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        onChange={handleSearch}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;