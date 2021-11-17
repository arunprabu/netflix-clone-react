// Fn comp with Named Fn 
import React from 'react';
import Menu from './Menu';

// Named Fn 
function Header(){
  // should return JSX 
  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Netflix Clone App</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <Menu></Menu>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header;