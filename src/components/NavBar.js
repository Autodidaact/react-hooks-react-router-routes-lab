import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  const myNavStyles = {
    display: "inline-block",
    width: "50px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "blue",
    textDecoration: "none",
    color: "white",
  };
  return (
  <div className="navbar">{/*{code here}*/}
      <NavLink 
        to="/" 
        exact 
        style={myNavStyles}
        activeStyle={
          {background: "brown"}
        }
      >
        Home
      </NavLink>
      <NavLink 
        to="/Movies" 
        exact 
        style={myNavStyles}
        activeStyle={
          {background: "brown"}
        }
      >
        Movies
      </NavLink>
      <NavLink 
        to="/Directors" 
        exact 
        style={myNavStyles}
        activeStyle={
          {background: "brown"}
        }
      >
        Directors
      </NavLink>
      <NavLink 
        to="/Actors" 
        exact 
        style={myNavStyles}
        activeStyle={
          {background: "brown"}
        }
      >
        Actors
      </NavLink>
  </div>
  )
}

export default NavBar;
