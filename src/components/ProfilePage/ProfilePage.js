import React from 'react';
import Navbar from '../Navbar/Navbar';
import './ProfilePage.css';
import avatar from '../../assets/avatar.jpeg';
import { useSelector } from 'react-redux';
import { auth } from '../../firebase';
import { Link } from 'react-router-dom';

export default function ProfilePage() {
    const handleSignOut = () => {
        auth.signOut();
    }

    return (
        <>
            <Navbar />
            <div className='profilePage'>
                <div className="profilePage_content">
                    <h1 className='profilePage_heading'>Edit Profile</h1>
                    <hr className='profilePage_horizontalRuler' />
                    <div className='profilePage_info'>
                        <img src={avatar} alt="" className='profilePage_avatar' />
                        <div className="profilePage_userEmail">{useSelector(store => store.user.email)}</div>
                    </div>
                    <Link onClick={handleSignOut} to='/'>
                        <button className='profilePage_signOut'>Sign Out</button>
                    </Link>
                </div>
            </div>
        </>
    );
}
