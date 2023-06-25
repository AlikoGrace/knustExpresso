import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from "./pages/home_page/Home";
import './App.css';
import SignIn from "./auth-pages/student/signIn/SignIn";
import Dashboard from "./auth-pages/student/dashboard/Dashboard";
import StudentRegistrationPage from "./auth-pages/student/registration/StudentRegistrationPage";
import SignUp from "./auth-pages/student/signUp/SignUp";
import StudentEmailVerificationPage from "./auth-pages/student/signUp/StudentEmailVerificationPage";
import Oops from "./auth-pages/student/signUp/Oops";
import MyDashboard from "./auth-pages/student/myDashboard/MyDashboard";
import LecturerDashboard from "./auth-pages/student/myDashboard/LecturerDashboard";
import DepartmentDashboard from "./auth-pages/student/myDashboard/DepartmentDashboard";
import InternshipRequest from "./auth-pages/student/requestPages/InternshipRequest";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' exact element={<Home/>}/>
                <Route path='/dashboard' exact element={<Dashboard/>}/>
                <Route path='/myDashboard' exact element={<MyDashboard/>}/>
                <Route path='/lecturerDashboard' exact element={<LecturerDashboard/>}/>
                <Route path='/proficiencyDashboard' exact element={<LecturerDashboard/>}/>
                <Route path='/departmentDashboard' exact element={<DepartmentDashboard/>}/>
                <Route path='/student/account-registration' exact element={<StudentRegistrationPage/>}/>
                <Route path='/student/internshipRequest' exact element={<InternshipRequest/>}/>
                <Route path='/signup/student' exact element={<SignUp/>}/>
                <Route path='/signin/student' exact element={<SignIn/>}/>
                <Route path='/verify/student' exact element={<StudentEmailVerificationPage/>}/>
                <Route path='/oops/student' exact element={<Oops/>}/>
               {/* <Route path='/verify' exact element={<h1>Email Verified</h1>}/>*/}
            </Routes>
        </Router>
    )
}
export default App
