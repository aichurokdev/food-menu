import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import Admin from "./components/pages/Admin/Admin";
import Menu from "./components/pages/Menu/Menu";
import Orders from "./components/pages/Orders/Orders";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/menu" element={<Menu />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/" element={<Admin />} />
      </Routes>
    </>
  );
}

export default App;
