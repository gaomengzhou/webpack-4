import { Link, Outlet } from 'react-router-dom';

const ListPage: React.FC = () => (
  <div>
    <h1>ListPage</h1>
    <Outlet />
    <Link to="/">goHome</Link>
  </div>
);

export default ListPage;
