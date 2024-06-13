import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import User from "./components/User";
import Management from "./components/Management";
import ManagementHome from "./components/Management/ManagementHome";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newuser" element={<User />} />
        <Route path="/management" element={<Management />} />
        <Route path="/management/Home" element={<ManagementHome/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
