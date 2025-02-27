import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";


const SearchBar =({value, onChange, onSearch })=>{
    return(

<div className="relative w-96 left-2/3">

<input
        type="text"
        aria-label="Search for a movie"
        placeholder="i'm looking for"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-80 rounded-lg py-2 pl-12 pr-4 text-white outline-none bg-blue-950"
      />
<button onClick={onSearch}>
      <FontAwesomeIcon 
    
        icon={faMagnifyingGlass} 
        className="absolute left-72 top-1/2 transform -translate-y-1/2 text-gray-400" 
      />
      
     </button>

</div>
    );
};
export default SearchBar;