import { Outlet } from 'react-router';
import React, { useState, useEffect } from 'react';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { authLogin } from 'redux/authSlice/authSlice';
import { selectAccessToken } from 'redux/authSlice/authSelectors';

const GoogleAuth = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector(selectAccessToken);
  //   const [user, setUser] = useState([]);
  const [profile, setProfile] = useState([]);

  const login = useGoogleLogin({
    onSuccess: codeResponse => {
      dispatch(authLogin(codeResponse));
    },
    onError: error => console.log('Login Failed:', error),
  });

  useEffect(() => {
    if (accessToken) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${accessToken}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
              Accept: 'application/json',
            },
          }
        )
        .then(res => {
          setProfile(res.data);
        })
        .catch(err => console.log(err));
    }
  }, [accessToken]);

  const logOut = () => {
    googleLogout();
    setProfile(null);
  };

  return (
    <>
      <div>
        <h1>google</h1>
        {profile ? (
          <div>
            {/* <img src={profile.picture} alt="user image" /> */}
            <h3>User Logged in</h3>
            <p>Name: {profile.name}</p>
            <p>Email Address: {profile.email}</p>
            <br />
            <br />
            <button onClick={logOut}>Log out</button>
          </div>
        ) : (
          <button onClick={() => login()}>Sign in with Google 🚀 </button>
        )}
      </div>
      <Outlet />
    </>
  );
};

export default GoogleAuth;
