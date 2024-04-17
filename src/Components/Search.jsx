import React from "react";
import { MdSearch } from 'react-icons/md'
const Search = ({ handleSearchStory }) => {
    return (

        <div className="search">
            <MdSearch className='search-icons' size='1.3em' />
            <input onChange={(event)=>handleSearchStory(event.target.value)}
            type= 'text' placeholder="Search"/>
        </div>
            
    )
};

export default Search;