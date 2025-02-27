import React, {useEffect, useState} from "react";
import { useMovies } from "./MovieContex";
import MovieCard from "./MovieCard";
import MovieDetails from "./MovieDetails";
import { fetchMovieDetails, fetchMoviesByTitle } from "../Services/OMBDservice";
import SearchBar from "./SearchBar";


const Search =()=>{

    const { movies, setMovies, selectedMovie, setSelectedMovie } = useMovies();
    const [searchMovie, setSearchMovie] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchDefaultMovies = async () => {
        setLoading(true);
        setError(null);
  
        try {
          const responseBadBoys = await fetchMoviesByTitle("Bad boys");
          const responseAvengers = await fetchMoviesByTitle("Avengers");
          const responseBlade = await fetchMoviesByTitle("Blade");
      
        
          const combinedMovies = [...responseBadBoys, ...responseAvengers, ...responseBlade];
      
          setMovies(combinedMovies);
          const response = await fetchMoviesByTitle("Bad boys", "Avengers");
        
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };
  
      fetchDefaultMovies();
    }, [setMovies]);
  
    const handleSearch = async () => {
      setLoading(true);
      setError(null);
  
      try {
        const response = await fetchMoviesByTitle(searchMovie);
        setMovies(response || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
  
    const handleMovieClick = async (imdbID) => {
      try {
        setLoading(true);
        const details = await fetchMovieDetails(imdbID);
        setSelectedMovie(details);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
  
    return (
      
      <div className="bg-gray-900 text-white min-h-screen p-6">
        
        <div className="">
          <SearchBar
            value={searchMovie}
            onChange={setSearchMovie}
            onSearch={handleSearch}
          />
        </div>
  
        {loading && <p className="text-yellow-500 text-center mt-6">Loading...</p>}
        {error && <p className="text-red-500 text-center mt-6">{error}</p>}
  
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-8">
          {movies.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              movie={movie}
              onClick={handleMovieClick}
            />
          ))}
        </div>
  
        {selectedMovie && (
          <div className="mt-8">
            <MovieDetails movie={selectedMovie} />
          </div>
        )}
      </div>
    );
  };
  
  export default Search
  