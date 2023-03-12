import { Outlet } from 'react-router';
import React, { useEffect } from 'react';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import { useDispatch } from 'react-redux';
import { authLogin, authLogout } from 'redux/authSlice/authSlice';
import { fetchGoogleAuth } from 'redux/authSlice/authOperations';
import { useAuth } from 'hooks/useAuth';
import { Header, Btn, Greetings } from './GoogleAuth.styled';
import { FaGoogle } from 'react-icons/fa';

const GoogleAuth = () => {
  const dispatch = useDispatch();
  const { accessToken, isLoggedIn, name } = useAuth();

  //google login
  const login = useGoogleLogin({
    onSuccess: codeResponse => {
      dispatch(authLogin(codeResponse));
    },
    onError: error => console.log('Login Failed:', error),
  });

  //get google Info by access_token
  useEffect(() => {
    const controller = new AbortController();

    if (accessToken !== '') {
      dispatch(fetchGoogleAuth({ controller, accessToken }));
    }

    return () => controller.abort();
  }, [accessToken, dispatch]);

  //google logout
  const logOut = () => {
    googleLogout();
    dispatch(authLogout());
  };

  return (
    <>
      <Header>
        {isLoggedIn ? (
          <>
            <Greetings>Hi: {name}</Greetings>
            <Btn onClick={logOut}>Log out</Btn>
          </>
        ) : (
          <Btn onClick={() => login()}>
            Sign in with <FaGoogle size={20} />
          </Btn>
        )}
      </Header>
      <Outlet />
    </>
  );
};

export default GoogleAuth;
