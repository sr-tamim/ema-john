import React, { useContext, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../../contexts/UserContext';

const SignUp = () => {
    const { signup, googleLogin, error, setError } = useContext(UserContext);
    useEffect(() => setError(null), [setError]);

    const formInputs = {
        name: useRef(),
        email: useRef(),
        password: useRef()
    }
    function handleSubmit(event) {
        event.preventDefault();
        const { name, email, password } = formInputs;
        password.current.value.length > 5 ?
            signup(name.current.value, email.current.value, password.current.value)
            : setError({ message: 'Password must be at least 6 characters long' });
    }
    return (
        <div className="login-container">
            <h1>Create Account</h1>
            <form onSubmit={handleSubmit} className="primary-form">
                {error &&
                    <h5 className="firebase-error">{error.message}</h5>
                }
                <div>
                    <label>Name</label>
                    <input type="text" ref={formInputs.name} required />
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" ref={formInputs.email} required />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" ref={formInputs.password} required />
                </div>

                <input type="submit" value="Sign up" className="primary-button" />
            </form>

            <div className="login-buttons-container">
                <h5>Sign in with</h5>
                <button className="login-button primary-button" onClick={googleLogin}><i class="fab fa-google"></i></button>
            </div>
            <h4 style={{ marginTop: '40px' }}>
                Already have an account? <NavLink to="/login">Login</NavLink>
            </h4>
        </div>
    );
};

export default SignUp;