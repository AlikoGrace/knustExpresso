import logo from "../../assets/logo.png"
import profile from "../../assets/myProfie.jpg"
import {GiHamburgerMenu} from "react-icons/gi";
import React, {useState} from "react";
import {NavLink} from 'react-router-dom';
import './navbar.css'
import DashboardSideMdNav from "../../pages/dashboard/DashboardSideMdNav";

function DashboardNav(){

    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <nav className={'navbar navbar-expand-lg navbar-light bg-theme justify-content-between'}>
            <div className="navbar-brand brand">
                <img src={logo} alt="Expresso Logo" className={'expresso-logo'}/> &nbsp;&nbsp; <span className={'font-weight-bold'}>Xpresso</span>
            </div>
            <div className="right-controls">
                <img src={profile} alt="" className={'dashboard-avatar'} width={40} height={40}/> &nbsp;Grace Aliko&nbsp;&nbsp;

                <button className="navbar-toggler" type="button"  onClick={toggleNav} data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><GiHamburgerMenu/></button>
            </div>
             <div className={`sidenav ${isNavOpen ? 'active' : ''}`}>
               <DashboardSideMdNav/>
            </div>
        </nav>
    )
}


export default DashboardNav;