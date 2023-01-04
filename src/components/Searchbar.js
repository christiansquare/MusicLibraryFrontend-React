import React from 'react' 
import './SearchBar.css'
import SearchIcon from '@mui/icons-material/Search';

function SearchBar({placeholder, data}) {
    return(
        <div className="search">
            <div className="searchsongs">
                <input type="text" placeholder={placeholder}/>
                <div className="searchIcon">
                    <SearchIcon/>
                </div>
                "</div>
            <div className="Songresults">
                {data.map((value, key)=>{
                    return <div>{Value.title}</div>
                })}
            </div>
        </div>
        );
}

export default SearchBar;