import React, {useRef} from 'react';
import style from './signUp.module.css'
import axios from 'axios';


function SignUp(props) {
    const emailRef=useRef();
    const passKeyRef=useRef()
    const confirmPassKeyRef=useRef()

    const signUpHandler=(e)=>{
        e.preventDefault()
        if(passKeyRef.current.value===confirmPassKeyRef.current.value){
            console.log({
                email:emailRef.current.value,
                passkey:passKeyRef.current.value
            })

            axios.post('http://localhost:9999/api/students/account-registration', {
                email:emailRef.current.value,
                passKeyRef:passKeyRef.current.value
            })
                .then(response => {
                    console.log(response.data);
                })
                .catch(error => {
                    console.error(error);
                });

        }else{
            alert("Notice: Unmatching passwords")
        }
    }


    return (
        <section className={style.loginBody}>
            <main className={style.loginContent}>
                <form onSubmit={signUpHandler} className={`${style.signInForm} py-3`} id="passwordSignInForm" method="post">
                   {/* <img src={logo}  alt=""/>*/}
                    <div>
                        <label className={style.label} htmlFor="Username">Email or Username</label>
                        <input required id="Username" ref={emailRef} name="Username" type="text"/>
                    </div>
                    <div>
                        <label className={style.label} htmlFor="Password">Password</label>
                        <input required id="Password" ref={passKeyRef} maxLength="128" name="Password" type="password"/>
                    </div>
                    <div>
                        <label className={style.label} htmlFor="Password">Confirm Password</label>
                        <input required id="Password"  ref={confirmPassKeyRef} maxLength="128" name="Password" type="password"/>
                    </div>
                    <button type="submit" id="login" className={style.signinBtn}>Sign Up</button>
                </form>

            </main>
        </section>
    );
}

export default SignUp;