import React from "react";

const SearchBar =({value, onChange, onSearch })=>{
    return(
        <div className="flex flex-col space-y-4">
        <input
          type="text"
          aria-label="Search for a movie"
          placeholder="e.g., Inception"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="px-4 py-2 rounded-lg border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
        <button
          onClick={onSearch}
          className="bg-yellow-500 text-gray-900 font-bold py-2 px-4 rounded-lg hover:bg-yellow-600 transition duration-300"
        >
          Search
        </button>
      </div>


    );
};
export default SearchBar;