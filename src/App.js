import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import Admin from "./components/pages/Admin/Admin";
import Menu from "./components/pages/Menu/Menu";
import Orders from "./components/pages/Orders/Orders";
import { useEffect, useState } from "react";

function App() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const storeDarkMode = localStorage.getItem("darkMode");
    if (storeDarkMode !== null) {
      setDark(storeDarkMode === "true");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", dark.toString())
  }, [dark])

  return (
    <div
      style={{
        background: dark ? "rgb(3,37,65)" : "",
        height: dark ? "46.2em" : "",
      }}
    >
      <Header dark={dark} setDark={setDark} />
      <Routes>
        <Route path="/menu" element={<Menu dark={dark} setDark={setDark}/>} />
        <Route path="/orders" element={<Orders dark={dark} />} setDark={setDark} />
        <Route path="/" element={<Admin dark={dark} />} setDark={setDark} />
      </Routes>
    </div>
  );
}

export default App;
