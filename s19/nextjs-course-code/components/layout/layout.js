import { Fragment } from 'react'
import MainNavigation from './main-navigation'

export default function Layout({ children }) {
    return (
        <Fragment>
            <MainNavigation />
            {children}
        </Fragment>
    )
}