import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GoogleLoginRedirect from './GoogleLoginRedirect';
import OneBox from './OneBox';
import Login from './Login';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/google-login" element={<GoogleLoginRedirect />} />
                <Route path="/onebox" element={<OneBox />} />
            </Routes>
        </Router>
    );
};

export default App;
