import React from 'react';
import style from './signIn.module.css'
import logo from "../../assets/logo.png";
 import {Link} from "react-router-dom";

function SignIn(props) {
    return (
        <section className={style.loginBody}>
            <main className={style.loginContent}>
                <form action="/id" className={style.signInForm} id="passwordSignInForm" method="post">
                    <img src={logo} width={250} height={80} alt=""/>
                    <div>
                        <label className={style.label} htmlFor="Username">Email or Username</label>
                        <input className="" id="Username" name="Username" type="text"/>
                    </div>
                    <div>
                        <label className={style.label} htmlFor="Password">Password</label>
                        <input id="Password" maxLength="128" name="Password" type="password"/>
                    </div>
                    <button type="submit" id="login" className={style.signinBtn}>Sign in</button>
                </form>
                <div className="forgot-password">
                    <Link to="/id/ForgotPassword">Forgot
                        password?</Link>
                </div>
                <div className={style.or}>
                    <hr className={style.bar}/>
                </div>
                <Link to="/intern/account-activation" id="create-account-link"
                   className={style.activateAccount}>
                    <span className="">Activate Account</span>
                </Link>
            </main>
        </section>
    );
}

export default SignIn;