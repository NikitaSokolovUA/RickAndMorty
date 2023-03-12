import { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router';
import {
  fetchChars,
  fetchCharsByName,
  fetchCharsByPage,
  fetchCharsByPageAndName,
} from 'redux/charSlice/charOperation';
import {
  selectCurrentPage,
  selectSearchValue,
} from 'redux/charSlice/charSelectors';
import { GoogleLogin } from '@react-oauth/google';

const Main = lazy(() => import('../pages/Main'));
const CharcterInfo = lazy(() => import('../pages/CharacterInfo'));

export const App = () => {
  const page = useSelector(selectCurrentPage);
  const searchValue = useSelector(selectSearchValue);
  const dispatch = useDispatch();

  useEffect(() => {
    const controller = new AbortController();

    if (!page && searchValue === '') {
      dispatch(fetchChars(controller));
    }

    if (searchValue !== '' && !page) {
      dispatch(fetchCharsByName(searchValue));
    }

    if (searchValue === '' && page) {
      dispatch(fetchCharsByPage({ controller, page }));
    }

    if (searchValue !== '' && page) {
      dispatch(fetchCharsByPageAndName({ searchValue, page, controller }));
    }

    return () => controller.abort();
  }, [dispatch, page, searchValue]);

  const responseMessage = response => {
    console.log(response);
  };

  const errorMessage = error => {
    console.log(error);
  };

  return (
    <div>
      <div>
        <h2>React Google Login</h2>
        <br />
        <br />
        <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/character/:charId" element={<CharcterInfo />} />
          <Route path="*" element={<Main />} />
        </Routes>
      </Suspense>
    </div>
  );
};
