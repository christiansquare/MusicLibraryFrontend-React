import React, { useState } from 'react' 
import './SearchBar.css'


function SearchBar(props) {
  const[searchInputs, setSearchInputs] = useState("");
    function handleSubmit(event){
       event.preventDefault()
       props.filterMusic(searchInputs)
  }

    return(
        <div className="search">
            <form onSubmit = {handleSubmit}className="searchInputs">
                <input
                 type="text" 
                onChange={(event)=>setSearchInputs(event.target.value)}/>
             <button type="submit">Search</button>
             </form>
             </div>
       );
}

export default SearchBar;