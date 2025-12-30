import { useState } from 'react';
import './App.css';
import logo from './assets/logo.jpg';

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [name, setName] = useState('');
  const [chooseoption, setChooseOption] = useState(false);

  return (
    <div className="main-container">
      <div className="app-header">
        <div className="logo-box">
          <img src={logo} alt="logo" className="logo" />
          <h1 className="logo-title">Tailors Hub</h1>
        </div>

        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/explore">Explore</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>

        <div className="auth-buttons">
          <form action="/search" method="GET" className='search-form'>
            <div className="search-wrap">
              <input className="form-control search-input" name="q" type="search" placeholder="Search" aria-label="Search" />
              <button className="search-btn" type="submit" aria-label="Submit search">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <circle cx="11" cy="11" r="7" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </button>
            </div>
          </form>
        </div>
         <div className='mobile-controls'>
          <button
            className="mobile-more"
            type="button"
            onClick={() => setMobileOpen(v => !v)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-dropdown"
          >
            {mobileOpen ? (
              <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden>
                <line x1="18" y1="6" x2="6" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden>
                <line x1="3" y1="6" x2="21" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <line x1="3" y1="12" x2="21" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <line x1="3" y1="18" x2="21" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <ul id="mobile-dropdown" className="mobile-dropdown">
          <li><a href="/home">Home</a></li>
          <li><a href="/explore">Explore</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
      )}
      <hr />
      <div className='contest-test'>
        <h1 className="contest-header">Welcome to the Tailors Hub Contest!</h1>
      </div>
      <div className='slide-show'>
        <h2 className="contest-title">Design Your Dream Outfit Contest</h2>
        <p className="contest-description">
          
        </p>
      </div>
        
      <button className="join-contest-btn" onClick={() => alert('Joined the contest!')}>
        Join contest
      </button>
    </div>
  );
}

export default App;