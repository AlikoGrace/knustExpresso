
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Home} from './pages'
import './App.css';
import SignIn from "./pages/sign_in/SignIn";
import Dashboard from "./pages/dashboard/Dashboard";
import StudentRegistrationPage from "./pages/registration_page/StudentRegistrationPage";
const App = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' exact element={<SignIn/>}/>
                <Route path='/dashboard' exact element={<Dashboard/>}/>
                <Route path='/registration' exact element={<StudentRegistrationPage/>}/>
            </Routes>
        </Router>
    )
}
export default App
