// @ts-nocheck

// File import
import argentBankLogo from "../assets/argentBankLogo.png";

// CSS Import
import "../styles/components/Header.css"

// FontAwesome Icons import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

// React/React-router components import
import { NavLink } from 'react-router-dom';

// React/React-router/Redux components import
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

// Store import
import { disconnectUser } from "../store/store";

/**
 * 
 * @returns JSX code for the App Header
 */
function Header(){


    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isLogged = useSelector((state) => state.userStore.isLoggedIn);
    const firstName = useSelector((state) => state.userStore.firstName);

    function logOutUser(){
        dispatch(disconnectUser()); 
    }

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

            {isLogged === true &&
                <div className="flex flex--row flex--wrap loggedInNav">
                    <NavLink to="/profile" className="flex main-nav-item">
                        <FontAwesomeIcon icon={faUserCircle} /> 
                        {firstName}
                    </NavLink>
                    <NavLink to="/" className="flex main-nav-item" onClick={logOutUser}>
                        <FontAwesomeIcon icon={faArrowRightFromBracket} />
                        Sign out
                    </NavLink>
                </div>
            }

            {isLogged === false &&
                <div className="loggedOutNav">
                    <NavLink to="/login" className="flex main-nav-item">
                        <FontAwesomeIcon icon={faUserCircle} /> 
                        Sign In
                    </NavLink>
                </div>
            }            
        </nav>
    );   
}
export default Header;