import React from 'react';
import {Link} from 'react-router-dom';



const Header = () => {
  return(
    <div class="container-fluid">
      <div className="dropdown float-left">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          IIII
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenu">
          <Link className="dropdown-item" to="/climb">Climb</Link>
          <Link className="dropdown-item" to="/run">Run</Link>
          <div className="dropdown-divider"></div>
          <Link className="dropdown-item" to="/rpi">RPi</Link>
          <div className="dropdown-divider"></div>
          <Link className="dropdown-item" to="/">Home</Link>
        </div>
      </div>
      <button type="button" class="btn btn-info float-right">Action
      </button>      
    </div>
)
};

export default Header;
