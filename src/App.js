import React from 'react';
import { useSelector } from 'react-redux';
import {  Routes, Route } from 'react-router-dom';
import AdminPanel from './components/AdminPanel';
import Login from './components/auth/login';
import Dashboard from './components/dashboard';
import UserList from './components/userList';

function App() {
      const isLoggedIn = useSelector((state)=> state.auth.isLoggedIn)
      console.log("isloggedin ",isLoggedIn);
  return (
      <>
         { isLoggedIn && <AdminPanel/>}
        <Routes>
             <Route path="/" element={<Login/>} />
           { isLoggedIn && (
            <>
             <Route path="/admin" element={ <Dashboard/>} />
            <Route path="userlist" element={<UserList/>} />
            </>
           )}
        </Routes>
        </>
  );
}

export default App;
