import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Home } from './components/Home/Home';
import { SerieList } from './components/Programs/Series/SerieList';
import { MovieList } from './components/Programs/Movies/MovieList';

function App() {
  return (
    <> 
      <Header /> 
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/series" element={<SerieList />} />
          <Route path="/movies" element={<MovieList />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
