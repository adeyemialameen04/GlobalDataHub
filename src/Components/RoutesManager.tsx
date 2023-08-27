import { Routes, Route } from "react-router-dom";
import CountryLists from "./CountryLists/CountryLists";
import CountryDetail from "./CountryDetail/CountryDetail";

const RoutesManager = () => {
  return (
    <Routes>
      <Route path="/" element={<CountryLists />} />
      <Route path="/country/:name" element={<CountryDetail />} />
    </Routes>
  );
};

export default RoutesManager;
