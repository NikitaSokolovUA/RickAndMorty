import { lazy, Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router';
import { fetchChars } from 'redux/charSlice/charOperation';

const Main = lazy(() => import('../pages/Main'));
const CharcterInfo = lazy(() => import('../pages/CharacterInfo'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const controller = new AbortController();

    dispatch(fetchChars(controller));

    return () => controller.abort();
  }, [dispatch]);

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/character" element={<CharcterInfo />} />
          <Route path="*" element={<Main />} />
        </Routes>
      </Suspense>
    </div>
  );
};
