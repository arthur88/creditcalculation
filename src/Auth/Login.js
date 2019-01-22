import React from 'react';
import { Redirect } from 'react-router-dom';
import Lock from './Lock';
import isAuthenticated from './isAuthenticated';

const Login = (props) => (
    isAuthenticated() ? (
        <Redirect to={{
            pathname: '/about',
            state: { from: props.locaton }
        }} />
    ) : (
        <Lock location={props.location} />
    )
)

export default Login;


