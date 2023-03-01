import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import AdminPanel from './components/AdminPanel';
import Login from './components/auth/login';

function App() {
  return (
      
        <Routes>
          <Route path="/admin" element={<AdminPanel />}>
        </Route>
        <Route path="/" >
        <Route index element={<Login/>} />
        </Route>
     
        </Routes>
  );
}

export default App;
