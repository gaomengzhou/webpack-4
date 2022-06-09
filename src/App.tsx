import { ListPage } from "./List";
import { HomePage } from "./Home";
import { Nodefind } from "./404";
import asiox from "axios";
import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
export const App: React.FC = () => {
  useEffect(() => {
    asiox.get("/react/api/header.json").then((res) => console.log("res", res));
  }, []);
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/list" element={<ListPage />} />
      <Route path="nodefind" element={<Nodefind />} />
      <Route path="*" element={<Navigate to={"nodefind"} />} />
    </Routes>
  );
};
