import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import ProtectedPage from './ProtectedPage';

function App() {
    return (
        <BrowserRouter>
            <h1>Authentication Example</h1>
            <a href="/">Login</a>
            <a href="/register">Register</a>
            <a href="/protected">Products</a>
            <Routes>
              {/* Render the component by passing it as a JSX element */}
              <Route index element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/protected" element={<ProtectedPage/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
