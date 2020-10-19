import React from 'react';
import { Header } from '../components';
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg'

export function HeaderContainer({ children }) {
    return (
        <Header>
            <Header.Frame>
                <Header.Logo src={logo} to={ROUTES.HOME} alt="Movieflix" />
                <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign-In</Header.ButtonLink>
            </Header.Frame>
            {children}
        </Header>
    )
}