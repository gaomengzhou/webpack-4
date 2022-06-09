import asiox from "axios";
import { useEffect } from "react";
export const App = () => {
  useEffect(() => {
    asiox.get("/react/api/header.json").then((res) => console.log("res", res));
  }, []);
  return <div>Hello TS</div>;
};
