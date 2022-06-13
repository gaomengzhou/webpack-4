import asiox from 'axios';
import { useEffect } from 'react';
import CustomRoutes from './Routes.config';
// import { Navigate, Route, Routes } from 'react-router-dom';
// import Nodefind from './404';
// import Layout from './Layout';
// import ListPage from './List';
// import ListOne from './ListOne';
// import ListTow from './ListTow';
// import HomePage from './Home';

const App: React.FC = (): JSX.Element => {
  useEffect(() => {
    asiox.get('/react/api/header.json').then((res) => console.log('res', res));
  }, []);
  return (
    <CustomRoutes />
    // <Routes>
    //   <Route path="/" element={<Layout />}>
    //     <Route index element={<HomePage />} />
    //     <Route path="list">
    //       <Route index element={<ListPage />} />
    //       <Route path="one" element={<ListOne />} />
    //       <Route path=":id" element={<ListTow />} />
    //     </Route>
    //   </Route>
    //   <Route path="nodefind" element={<Nodefind />} />
    //   <Route path="*" element={<Navigate to="nodefind" />} />
    // </Routes>
  );
};
export default App;
