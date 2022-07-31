import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Loading } from '../../../App';
import { UserContext } from '../../../contexts/UserContext';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, userLoading } = useContext(UserContext);
    return (
        <>
            {userLoading ? <Loading /> :
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