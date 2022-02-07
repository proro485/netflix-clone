import React, { useState } from 'react';
import './LoginScreen.css';
import logo from '../../assets/netflix.png';
import SignupScreen from './SignupScreen';

export default function LoginScreen() {
    const [signIn, setSignIn] = useState(false);
    const [email, setEmail] = useState('');

    const handleSignIn = () => {
        console.log('sign in');
        setSignIn(true);
    }

    return (
        <div className="loginScreen">
            <div className="loginScreen_background">
                <img className='loginScreen_logo'
                    src={logo}
                    alt=""
                />
                <button className="loginScreen_loginButton" onClick={handleSignIn}>
                    Sign In
                </button>
                <div className="loginScreen_gradient" />
            </div>
            <div className="loginScreen_body">
                {
                    signIn ? <SignupScreen email={email} /> : (
                        <>
                            <h1>Unlimited films, TV programmes and more.</h1>
                            <h2>Watch anywhere. Cancel at any time.</h2>
                            <h3>Ready to watch? Enter your email to create or restart your membership</h3>
                            <div className="loginScreen_input">
                                <form>
                                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email Address' />
                                    <button onClick={handleSignIn}>GET STARTED</button>
                                </form>
                            </div>
                        </>
                    )
                }
            </div>
        </div>
    );
}
