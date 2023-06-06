
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Home} from './pages'
import './App.css';
import SignIn from "./pages/sign_in/SignIn";
const App = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' exact element={<SignIn/>}/>
            </Routes>
        </Router>
    )
}
export default App
