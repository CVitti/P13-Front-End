// @ts-nocheck

// File import
import argentBankLogo from "../assets/argentBankLogo.png";

// CSS Import
import "../styles/components/Header.css"

// FontAwesome Icons import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

// React/React-router components import
import { NavLink } from 'react-router-dom';

/**
 * 
 * @returns JSX code for the App Header
 */
function Header(){
    return (
        <nav className="main-nav">
            <NavLink to="/" className="main-nav-logo">
                <img
                    className="main-nav-logo-image"
                    src={argentBankLogo}
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </NavLink>
            <div>
                <NavLink to="/sign-in" className="main-nav-item">
                    <FontAwesomeIcon icon={faUserCircle} /> Sign In
                </NavLink>
            </div>
        </nav>
    );
}
export default Header;