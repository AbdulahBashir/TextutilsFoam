import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function Navbar(props) {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('bg-dark'); // ✅ Background change
    document.body.classList.toggle('text-white'); // ✅ Text color change
  };

  const handleHomeClick = (event) => {
    event.preventDefault();
    window.location.reload(); // ✅ Reloads the page
  };

  return (
    <nav className={`navbar navbar-expand-lg ${darkMode ? 'navbar-dark bg-dark' : 'navbar-dark bg-dark'}`}>
      <div className="container-fluid">
        <a className="navbar-brand font-bold fw-bold text-xl font-extrabold" href="/" onClick={handleHomeClick}>
          {props.title}
        </a>  
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" href="/" onClick={handleHomeClick}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">{props.about}</a>
            </li>
          </ul>

          {/* ✅ Dark Mode Toggle Button */}
          <button className="btn btn-outline-secondary mx-2" onClick={toggleDarkMode}>
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  about: PropTypes.string,
};

Navbar.defaultProps = {
  title: "TextUtils",
  about: "About Us",
};
