import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Main from "./pages/main";

import Login from "./pages/login";
import Search from "./pages/search";
import Registration from "./pages/registration";
import Add_Pet from "./pages/add_pet";
import {Routes, Route} from "react-router-dom";
import Profile from "./pages/profile";

import '../src/components/styles/login.css';

function App() {
  return (
    
      <div className="App">
        <Header />
        <Routes>
          <Route path={"/"} element={<Main />} />
          <Route path={"/profile"} element={<Profile/>} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/search"} element={<Search />} />
          <Route path={"/registration"} element={<Registration />} />
          <Route path={"/add_pet"} element={<Add_Pet />} />
        </Routes>
        <Footer />
      </div>
    
  );
}

export default App;
