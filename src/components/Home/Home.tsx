import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Inicio</h1>
      <Link to="/series">
        <div>
          <h2>Go to Series Page</h2>
        </div>
      </Link>
      <Link to="/movies">
        <div>
          <h2>Go to Movies Page</h2>
        </div>
      </Link>
    </div>
  );
}

export { Home };
