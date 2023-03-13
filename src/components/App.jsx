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

const Main = lazy(() => import('../pages/Main'));
const CharcterInfo = lazy(() => import('../pages/CharacterInfo'));
const GoogleAuth = lazy(() => import('../components/GoogleAuth'));

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

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<GoogleAuth />}>
            <Route path="/" element={<Main />} />
            <Route path="character/:charId" element={<CharcterInfo />} />
            <Route path="*" element={<Main />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};
