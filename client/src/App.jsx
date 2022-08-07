import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Switch,
  Routes,
  Route,
} from "react-router-dom";
import HomePage from "./Routes/HomePage";
import Getinvolved from "./Routes/Getinvolved";
import Aboutus from "./Routes/Aboutus";
import Thanks from "./Routes/Thanks";
import Quiz from "./Routes/Quiz";
import Admin from "./Routes/Admin";
import ContactList from "./Routes/ContactList";
import PrivateRoutes from "./utils/PrivateRoutes";
import AdminPage from "./Routes/AdminPage";
import ChangeCount from "./Routes/ChangeCount";

const App = () => {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/getinvolved" element={<Getinvolved />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/thanks" element={<Thanks />} />
          <Route path="/quiz" element={<Quiz />} />

          {/* require authorization */}

          <Route element={<PrivateRoutes name="one" />}>
            <Route path="/admin" element={<Admin />} />
          </Route>
          <Route element={<PrivateRoutes name="two" />}>
            <Route path="/adminpage" element={<AdminPage />} />
            <Route path="/contactlist" element={<ContactList />} />
            <Route path="/updatecount" element={<ChangeCount />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
