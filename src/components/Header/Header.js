import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div>
           <nav className="navbar navbar-expand-lg navbar-light my-bg">
  <div className="container-fluid">
    <a className="navbar-brand fw-bold text-white" href="#">The Billionaires</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-auto  ">
        <li className="nav-item">
          <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item mx-5">
          <a className="nav-link active text-white" aria-current="page" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active text-white" aria-current="page" href="#">Topper</a>
        </li>
        
        <li className="nav-item">
          <a className="nav-link active text-white" aria-current="page" href="#">Everything</a>
        </li>
        
        <li className="nav-item">
          <a className="nav-link active text-white" aria-current="page" href="#">Tips</a>
        </li>
        
       
       
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
        </div>
    );
};

export default Header;