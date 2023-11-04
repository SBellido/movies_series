import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <h1>Inicio</h1>
      <Link to="/series">
        <div>
          <h2>Go to Series Page</h2>
        </div>
      </Link>
      <Link to="/movie">
        <div>
          <h2>Go to Movies Page</h2>
        </div>
      </Link>
    </>
  );
}

export { Home };
