import { Link, Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div>
      <nav>
        <Link style={{ marginRight: 20 }} to="/">
          HOME
        </Link>
        <Link to="/list">LIST</Link>
      </nav>
      <Outlet />
      <footer>FOOTER</footer>
    </div>
  );
}

export default Layout;
