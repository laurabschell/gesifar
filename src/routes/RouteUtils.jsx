import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

export const HomeRedirect = () => <Navigate to='/' />
export const LoginRedirect = () => <Navigate to='/login' />

export const renderRoutes = (routes, extraProps = {}, switchProps = {}) =>
    routes ? (
        <Routes {...switchProps}>
            {routes.map((route, i) => (
                <Route
                    exact={route.exact}
                    key={route.key || i}
                    path={route.path}
                    render={props => route.render
                        ? route.render({ ...props, extraProps, route: route })
                        : <route.component {...props} {...extraProps} route={route} />}
                    strict={route.strict}
                />
            ))}
        </Routes>
    ) : null