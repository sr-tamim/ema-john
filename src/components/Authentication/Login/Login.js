import React, { useContext, useEffect, useRef } from 'react';
import { useHistory, useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../../contexts/UserContext';
import "./Login.css";

const Login = () => {
    const { user, emailLogin, googleLogin,
        error, setError } = useContext(UserContext);
    useEffect(() => setError(null), [setError]);

    const history = useHistory();
    const location = useLocation();
    const goBackPath = location.state?.from.pathname || '/profile';
    user && history.push(goBackPath);

    const formInputs = {
        email: useRef(),
        password: useRef()
    }
    function handleSubmit(event) {
        event.preventDefault();
        const { email, password } = formInputs;
        password.current.value.length > 5 ?
            emailLogin(email.current.value, password.current.value)
            : setError({ message: 'Password must be at least 6 characters long' });
    }
    return (
        <div className="login-container">
            <h1>Login</h1>
            {goBackPath !== '/profile' &&
                <h4>Login first to visit {goBackPath.slice(1, goBackPath.length).toUpperCase()} page</h4>
            }
            <form onSubmit={handleSubmit} className="primary-form">
                {error &&
                    <h5 className="firebase-error">{error.message}</h5>
                }
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
            <h4 style={{ marginTop: '40px' }}>Don't have account? <NavLink to="/signup">Sign up</NavLink></h4>
        </div>
    );
};

export default Login;