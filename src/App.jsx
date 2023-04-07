import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { UserStorage } from "./UserContext";
import Home from "./Views/Home";
import Login from "./Views/Login/Login";
import ProtectedRoute from "./Components/Helpers/ProtectedRoute";
import User from "./Views/User/User";
import Photo from './Components/Photo/Photo';
import UserProfile from "./Views/User/UserProfile";
import NotFound from "./Views/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserStorage>
          <Header />
          <main className="AppBody">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="login/*" element={<Login />} />
              <Route path="conta/*" element={<ProtectedRoute> <User /> </ProtectedRoute>} />
              <Route path="photo/:id" element={<Photo />} />
              <Route path="perfil/:user" element={<UserProfile />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
