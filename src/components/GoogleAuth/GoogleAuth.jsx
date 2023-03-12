import { Outlet } from 'react-router';
import React, { useEffect } from 'react';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import { useDispatch } from 'react-redux';
import { authLogin, authLogout } from 'redux/authSlice/authSlice';
import { fetchGoogleAuth } from 'redux/authSlice/authOperations';
import { useAuth } from 'hooks/useAuth';

const GoogleAuth = () => {
  const dispatch = useDispatch();
  const { accessToken, isLoggedIn, email, name } = useAuth;

  const login = useGoogleLogin({
    onSuccess: codeResponse => {
      dispatch(authLogin(codeResponse));
    },
    onError: error => console.log('Login Failed:', error),
  });

  useEffect(() => {
    const controller = new AbortController();

    if (accessToken !== '') {
      console.log('add fetch: ', accessToken);
      dispatch(fetchGoogleAuth());
    }

    return () => controller.abort();
  }, [accessToken, dispatch]);

  const logOut = () => {
    googleLogout();
    dispatch(authLogout());
  };

  return (
    <>
      <div>
        <h1>google</h1>
        {isLoggedIn ? (
          <div>
            {/* <img src={profile.picture} alt="user image" /> */}
            <h3>User Logged in</h3>
            <p>Name: {name}</p>
            <p>Email Address: {email}</p>
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
