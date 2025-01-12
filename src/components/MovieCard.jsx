import React from "react";

const MovieCard =({movie, onClick })=>{
    return(
        <div
        className="bg-gray-800 p-4 rounded-lg shadow-lg text-center hover:scale-105 transform transition duration-300 cursor-pointer"
        onClick={() => onClick(movie.imdbID)}
      >
        <h2 className="text-lg font-semibold mb-2">{movie.Title}</h2>
        <p className="text-sm mb-2">
          <strong>Year:</strong> {movie.Year}
        </p>
        <img
          src={movie.Poster !== "N/A" ? movie.Poster : "/placeholder.jpg"}
          alt={`Poster of ${movie.Title}`}
          className="w-full h-64 object-cover rounded-lg"
        />
      </div>

        
    );
};

export default MovieCard;