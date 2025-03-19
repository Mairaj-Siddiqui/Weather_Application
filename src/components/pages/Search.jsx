import React from 'react'
import { useState } from 'react'

const Search = ({onSearch}) => {

    const [location, setLocation] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!location) return;
        onSearch(location); 
        setLocation(""); //Clear input field
    }

  return (
    <form onSubmit={handleSubmit} className="search-bar">
        <input type="text" placeholder="Enter City"
         value={location} onChange={(e) => {setLocation(e.target.value)}} />
        <button type="submit"> Search </button>
      </form>
  )
}

export default Search