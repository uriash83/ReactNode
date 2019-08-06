import React from 'react';



const Header = () => {
  return(
    <div className="dropdown">
      <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Menu
      </button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenu">
        <a className="dropdown-item" href="/climb">Climb</a>
        <a className="dropdown-item" href="/run">Run</a>
        <a className="dropdown-item" href="/rpi">RPi</a>
        <div className="dropdown-divider"></div>
        <a className="dropdown-item" href="/">Home</a>
      </div>
    </div>
)
};

export default Header;
