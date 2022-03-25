import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { UserContext } from '../../../contexts/UserContext';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, userLoading } = useContext(UserContext);
    return (
        <>
            {userLoading ? <h1>Loading</h1> :
                <Route {...rest}
                    render={({ location }) => user ? children : <Redirect
                        to={{ pathname: '/login', state: { from: location } }}
                    />}
                />
            }
        </>
    );
};

export default PrivateRoute;