import React, { useContext } from 'react';
import { UserContext } from '../../../contexts/UserContext';
import "./Profile.css";

const Profile = () => {
    const { user, logout } = useContext(UserContext);
    return (
        <div className="profile-container">
            {
                user && <>
                    <img src={user.photoURL} alt="" />
                    <h1>{user.displayName}</h1>
                    <h5>{user.email}</h5>
                    <button className="primary-button" onClick={logout}>Log out</button>
                </>
            }
        </div>
    );
};

export default Profile;