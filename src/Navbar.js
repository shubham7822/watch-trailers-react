import { auth } from "./firebase";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [user, setUser] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser("");
      }
    });
  }, []);

  const handleLogout = () => {
    auth.signOut();
  };
  return (
    <div className='navbar'>
      <img
        className='navbar_logo'
        src='https://www.freelogoservices.com/api/main/images/1j+ojFVDOMkX9Wytexe43D6kifCGpR9OmR3NwXs1M3EMoAJtliAugPNi8vg+'
      />

      <div className='navbar_links'>
        <div className='navbar_linkone'>
          <span className='navbar_username'>hello,{user.displayName}</span>
          <Link className='navbar_link' to='/login'>
            <p onClick={handleLogout}>
              {user ? (
                <p className='navbar_cursor'>LogOut</p>
              ) : (
                <p className='navbar_cursor'>Login </p>
              )}
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
