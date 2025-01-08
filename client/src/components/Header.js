import {Link} from "react-router-dom";
import React, {useEffect} from "react";

export default function Header() {
    const [userInfo, setUserInfo] = React.useState(null);
    const username = userInfo ? userInfo.username : null;

  useEffect(() => {
    fetch('http://localhost:5001/profile', {
      credentials: 'include',
    }).then(response => {
      response.json().then(userInfo => {
     
      });
    });
  }, []);

  function logout() {
    fetch('http://localhost:5001/logout', {
      credentials: 'include',
      method: 'POST',
    });
    setUserInfo(null);
  }

 

  return (
    <header>
      <Link to="/">Recruit Header</Link>
      <nav>
        {username && (
          <>
            <Link to="/create">Create new post</Link>
            <Link onClick={logout}>Logout ({username})</Link>
          </>
        )}
        {!username && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
}