import './App.css';
import Search from './components/Search';
import { MovieProvider } from './components/MovieContex';

function App() {
  return (
  

    <MovieProvider>
    <Search />
  </MovieProvider>


  );
}

export default App;
