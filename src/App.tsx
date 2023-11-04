import React from 'react';
import { Programs } from './components/Programs/Programs';
import { Header } from './components/Common/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Footer } from './components/Common/Footer';
import { Home } from './components/Home/Home';

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Header /> 
      <Router>
        <Routes>
          <Route path="/" 
            element={<Home />} 
          />
          <Route path="/series" 
            element={<Programs programType={ 'series' } />} 
          />
          <Route path="/movie" 
            element={<Programs programType={ 'movie' } />} 
          />
        </Routes>
      </Router>
      <Footer />
    </React.Fragment>
  );
};
// const App: React.FC = () => {
//   return (
//     <React.Fragment>
//       <Home />
//       <h1>Popular Programs</h1>
//       <Programs programType={ 'movie' } />
//       <Programs programType={ 'series' } />
//     </React.Fragment>
//   );
// };

export { App };

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Header } from './components/Common/Header/Header';
// import { Footer } from './components/Common/Footer/Footer';
// import { Home } from './components/Home/Home';
// import { SerieList } from './components/Programs/SerieList';
// import { MovieList } from './components/Programs/MovieList';

// function App() {
//   return (
//     <> 
//       <Header /> 
//       <Router>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/series" element={<SerieList />} />
//           <Route path="/movies" element={<MovieList />} />
//         </Routes>
//       </Router>
//       <Footer />
//     </>
//   );
// }

// export default App;
