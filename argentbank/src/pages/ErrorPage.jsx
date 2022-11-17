// @ts-nocheck

// CSS Import
import "../styles/pages/ErrorPage.css"

// React/React-router components import
import { NavLink } from 'react-router-dom';

/**
 * Error Page used in case of wrong route
 * @returns JSX Code for the Error Page
 */
function ErrorPage() {
    return(
        <main>
            <div className="flex flex--column errorText">
                <h2>Error <span>404</span></h2>
                <p>
                    This page doesn't exist.
                </p>        
                <NavLink to="/" className="errorPageLink">
                    Go back to home page
                </NavLink>        
            </div>
        </main>
    );
}
export default ErrorPage;