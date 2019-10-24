import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <span className="navbar-brand mb-0 h1">Algorithm Visualizer Site</span>
                <button className="navbar-toggler collapsed" 
                        type="button" 
                        data-toggle="collapse" 
                        data-target="#myNavbar" 
                        aria-controls="myNavbar" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="navbar-collapse collapse" id="myNavbar">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/sorting" className="nav-link">Sorting Algorithms</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;