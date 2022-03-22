import React, { useEffect } from 'react';
import './header.css';
import { useDispatch, useSelector } from "react-redux";
import { Link,useNavigate } from "react-router-dom";
import { auth, provider } from '../../firebase';
import {
  selectUserName,
  selectUserPhoto,
  setUserDetails,
  setLogoutState,
} from "../../slice/userSlice";
const Header = (props) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        navigate("/home");
      }
    });
  }, [userName]);
  
  const setUser = (user) => {
    dispatch(setUserDetails({
      name: user.displayName,
      email: user.email,
      photo: user.photoURL,
    })
    );
  };
  const handleAuth = () => {
    if (!userName) {
      auth.signInWithPopup(provider).then((result) => {
        setUser(result.user);
      }).catch((e) => {
        alert(e.message);
      });
    } else if(userName){
      auth.signOut()
        .then(() => {
          dispatch(setLogoutState());
          navigate("/");
        }).catch((e) => e.message);
    }
  };
    return (
        <nav>
            <a className='logo'>
            <img src="/images/logo.svg" alt="Disney+" />
        </a>
        {!userName ? (
          <a onClick={handleAuth} className='login'>Login</a>
        ) : (
          <div className='navmenu'>
            <a href="/home">
              <img src="/images/home-icon.svg" alt="HOME" />
              <span>HOME</span>
            </a>
            <a>
              <img src="/images/search-icon.svg" alt="SEARCH" />
              <span>SEARCH</span>
            </a>
            <a>
              <img src="/images/watchlist-icon.svg" alt="WATCHLIST" />
              <span>WATCHLIST</span>
            </a>
            <a>
              <img src="/images/original-icon.svg" alt="ORIGINALS" />
              <span>ORIGINALS</span>
            </a>
            <a>
              <img src="/images/movie-icon.svg" alt="MOVIES" />
              <span>MOVIES</span>
            </a>
            <a>
              <img src="/images/series-icon.svg" alt="SERIES" />
              <span>SERIES</span>
            </a>
            <div className='signout'>
              <img src={userPhoto} alt={userName} />
              <div className='dropdown'>
                <span onClick={handleAuth}>Sign out</span>
              </div>
            </div>
          </div>
        )}
        </nav>
    )
};
export default Header;