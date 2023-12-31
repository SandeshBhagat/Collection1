import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Register from "./components/Register";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Welcome from "./components/Welcome";
import AddAdventure from "./components/AddAdventure";
import ViewAdventure from "./components/ViewAdventure";
import AllAdventures from "./components/AllAdventures";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/add" element={<AddAdventure />} />
        <Route path="/viewadv" element={<ViewAdventure />} />
        <Route path="/alladv" element={<AllAdventures />} />
      </Routes>
    </>
  );
}

export default App;
