import { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router';
import {
  fetchChars,
  fetchCharsByName,
  fetchCharsByPage,
} from 'redux/charSlice/charOperation';
import {
  selectCurrentPage,
  selectSearchValue,
} from 'redux/charSlice/charSelectors';

const Main = lazy(() => import('../pages/Main'));
const CharcterInfo = lazy(() => import('../pages/CharacterInfo'));

export const App = () => {
  const page = useSelector(selectCurrentPage);
  const searchValue = useSelector(selectSearchValue);
  const dispatch = useDispatch();

  useEffect(() => {
    const controller = new AbortController();

    (() => {
      if (searchValue !== '') {
        dispatch(fetchCharsByName(searchValue));
        return;
      }

      if (!page && searchValue === '') {
        dispatch(fetchChars(controller));
        return;
      }
      if (searchValue === '') {
        dispatch(fetchCharsByPage({ controller, page }));
      }
    })();

    return () => controller.abort();
  }, [dispatch, page, searchValue]);

  return (
    <div>
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
