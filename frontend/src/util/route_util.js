import React, { Component } from "react";
import { connect } from "react-dedux";
import { Route, Redirect, withRouter } from 'react-router-dom';

const Auth = ({ component: Component, path, loggedIn, exact }) => (
    <Route path={path} exact={exact} render={(props) => (
        !loggedIn? (
            <Component {...props}/>
        ) : (
            <Redirect to="/user/id" />
        )
    )} />
)

const Protected = ({ component: Component, loggedIn, ...rest}) => (
    <Route
    {...rest}
    render={props => loggedIn? (
        <Component {...props} />
    ) :     (
            <Redirect to="/login" />
            )
        }
    />
)

export const AuthRoute = withRouter(connect(mSTP)(Auth))
export const ProtectedRoute = withRouter(connect(mSTP)(Protected))
