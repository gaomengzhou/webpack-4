import { Link } from "react-router-dom";

export const HomePage: React.FC = () => {
  return (
    <div>
      <h1>HomePage</h1>
      <Link to="/list">goList</Link>
    </div>
  );
};
