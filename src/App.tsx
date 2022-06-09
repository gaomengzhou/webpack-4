import asiox from 'axios';
import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Nodefind from './404';
import HomePage from './Home';
import Layout from './Layout';
import ListPage from './List';
import ListOne from './ListOne';
import ListTow from './ListTow';

const App: React.FC = () => {
  useEffect(() => {
    asiox.get('/react/api/header.json').then((res) => console.log('res', res));
  }, []);
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="list">
          <Route index element={<ListPage />} />
          <Route path="list-one" element={<ListOne />} />
          <Route path="list-two" element={<ListTow />} />
        </Route>
        <Route path="nodefind" element={<Nodefind />} />
        <Route path="*" element={<Navigate to="nodefind" />} />
      </Route>
    </Routes>
  );
};
export default App;
