import React from 'react'
import {Link} from "react-router-dom"

function Header(){
	return(
		<nav className="navbar navbar-expand-lg bg-body-tertiary">
	  	<div className="container-fluid">
	    <a className="navbar-brand" href="www.google.com">McqApp</a>
	    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
	      <span className="navbar-toggler-icon"></span>
	    </button>
	    <div className="collapse navbar-collapse" id="navbarNavDropdown">
	      <ul className="navbar-nav">
	        <li className="nav-item">
	          <Link to="/" className="nav-link">Home</Link>
	        </li>
	        <li className="nav-item">
	          <Link to="/codesection" className="nav-link"> Compeate</Link>
	        </li>
	      </ul>
	    </div>
	  </div>
	</nav>
	)
}

export default Header