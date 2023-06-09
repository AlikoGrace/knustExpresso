import React from 'react';
import DashboardSideNav from "../DashboardSideNav";
import CoordinatorNav from "../../../pages/reusables/CoordinatorNav";
import style from './CoordinatorAccommodation.module.css'
import {MdAssignmentTurnedIn, MdViewList} from "react-icons/md";
import {BiUserPlus} from "react-icons/bi"
import {Link} from "react-router-dom";
import {FaUserTie} from "react-icons/fa";
import useCoordinatorAuth from "../../../hooks/useCoordinatorAuth";
import {GiHouse} from "react-icons/gi";


function PartnersMenuPage(props) {
    useCoordinatorAuth()
    return (
        <section>
            <CoordinatorNav/>
            <main className={'coordinator-main'}>
                <DashboardSideNav/>
                <aside className={'main-body'}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <Link to="#" className={style.menuLink}>
                                    <div className={`${style.internshipMenuContent}`}>
                                        <GiHouse size={24}/>
                                        <span className={`${style.menuTitle}`}>Upload Accommodation</span>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-md-4">
                                <Link to={'#'} className={style.menuLink}>
                                    <div className={`${style.internshipMenuContent}`}>
                                        <MdViewList size={24} />
                                        <span className={`${style.menuTitle}`}>View All</span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </aside>
            </main>
        </section>
    );
}

export default PartnersMenuPage;