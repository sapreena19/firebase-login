import React, { useEffect } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import Login from "./components/login";
import SignUp from "./components/register";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Profile from "./components/profile";
import { useState } from "react";
import { auth } from "./components/firebase";
import TasksList from "./components/TasksList";
import{useAuth} from './hooks/useAuth';
import MyVerticallyCenteredModal from'./components/updateTask';

//import{Row,Col} from "react-bootstrap";

function App() {
  
  const [user, setUser] = useState();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  });
  return (
    <Router>
      <div className="App">
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
            <Route
                path="/"
                element={user ? <Navigate to="/profile" />:<Login />}
              />
              
              
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<SignUp />} />
              <Route path="/profile" element={<Profile/>}/>
              <Route path='/TaskList' element ={<TasksList/>}/>
                <Route path='/updateTask' element={<MyVerticallyCenteredModal/>}/>
            </Routes>
            
            
            <ToastContainer />
            </div>
            </div>
          </div>
      
    </Router>
  );
}

export default App;