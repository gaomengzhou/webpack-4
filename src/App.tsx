import asiox from 'axios';
import React, { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Nodefind from './404';
import HomePage from './Home';
import ListPage from './List';

const App: React.FC = () => {
  useEffect(() => {
    asiox.get('/react/api/header.json').then((res) => console.log('res', res));
  }, []);
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/list" element={<ListPage />} />
      <Route path="nodefind" element={<Nodefind />} />
      <Route path="*" element={<Navigate to="nodefind" />} />
    </Routes>
  );
};
export default App;
