import React from "react";

const MovieDetails = ({ movie }) => {
  if (!movie) return null;

  return (
    <div className="bg-gray-900 text-white min-h-screen w-full flex items-center justify-center">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-4xl">
        <h2 className="text-3xl font-semibold mb-4">{movie.Title}</h2>
        <img
          src={movie.Poster !== "N/A" ? movie.Poster : "/placeholder.jpg"}
          alt={`Poster of ${movie.Title}`}
          className="w-full h-96 object-cover rounded-lg mb-4"
        />
        <p><strong>Year:</strong> {movie.Year}</p>
        <p><strong>Genre:</strong> {movie.Genre}</p>
        <p><strong>Director:</strong> {movie.Director}</p>
        <p><strong>Plot:</strong> {movie.Plot}</p>
        <p><strong>Rating:</strong> {movie.imdbRating}</p>



<div className="mt-6">
        <a 
        href={movie.DownloadLink}
        download={`${movie.Title}.mp4`}
        type="video/mp4"
        className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-blue-600 transition"
>
  Download {movie.Title}
</a>
</div>
      </div>
      
      
    </div>
  );
};

export default MovieDetails;
