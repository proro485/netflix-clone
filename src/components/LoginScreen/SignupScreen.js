import React, { useState } from 'react';
import './SignupScreen.css';
import { auth } from '../../firebase';

export default function SignupScreen(props) {
    const [email, setEmail] = useState(props.email);
    const [password, setPassword] = useState('');

    const handleSignUp = (event) => {
        event.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
            .then((authUser) => {
                console.log(authUser);
            }).catch((e) => {
                alert(e.message);
            })
    }

    const handleSignIn = (event) => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then((authUser) => {
                console.log(authUser);
            }).catch((e) => {
                alert(e.message);
            })
    }

    return (
        <div className="signupScreen">
            <form>
                <h1>Sign In</h1>
                <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <input placeholder='Password' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type='submit' onClick={handleSignIn}>Sign In</button>
                <h5>
                    <span className='signupScreen_grey'>New to Netflix?&nbsp;</span>
                    <span className='signupScreen_link' onClick={handleSignUp}>Sign Up now.</span>
                </h5>
            </form>
        </div>
    );
}