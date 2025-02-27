import './App.css';
import Search from './components/Search';
import { MovieProvider } from './components/MovieContex';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import SignUp from './components/SignUp';
import ForgotP from './components/ForgotP';




function App() {
  return (
  
<Router>  
  <Navbar />
 < Routes>
<Route
path="/"
element={
    <MovieProvider>
    <Search />
  </MovieProvider>
}
  />
   <Route path='/About' element={<About/>} />
   <Route path='/Contact' element={<Contact/>} />
   <Route path='/Login' element={<Login />} />
   <Route path='/SignUp' element={<SignUp />} />
   <Route path='/ForgotP' element={<ForgotP />} />

  </Routes>
  
  </Router>
  );
}

export default App;
