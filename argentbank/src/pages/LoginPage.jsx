// @ts-nocheck

// CSS Import
import "../styles/pages/LoginPage.css"

// FontAwesome Icons import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

// React/React-router/Redux components import
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

// API function import
import { checkCredentials } from "../services/bankAPI";

// Store functions import
import { connectUser, setUserEmail } from "../store/store";

/**
 * Login page of the Argent Bank App
 * @returns JSX Code for the Login Page
 */
function LoginPage(){

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Collect state data
    const email = useSelector((state) => state.userStore.userEmail);
    
    /**
     * If the credentials are valid, the user is logged in and redirected to the profile page,
     * otherwise an error message is displayed in the console. 
     * If the checkbox is checked, user email is set in the storage to show it on the next login (without page refresh).
     * @param {object} e Click event triggered on form submit
     */
    async function handleFormSubmit(e) {

        // Submit cancel
        e.preventDefault();
  
        // Get data from login fields
        let userMail = document.getElementById('username').value;
        let userPassword = document.getElementById('password').value;
        let rememberChecked = document.getElementById('remember-me').checked;

        // API call to check if credentials are valid and decide to login user or not, rembember email or not and then navigate on profile page if valid
        let response = await checkCredentials(userMail, userPassword);
        if (response.body) {    
            dispatch(connectUser(response.body)); 
            if (rememberChecked) {
                dispatch(setUserEmail(userMail));
            }
            navigate("/profile"); 
        }else {
            console.log("Invalid credentials or an error occurred during the request");
        }  
    }

    return(
        <main className="main bg-dark">
            <section className="sign-in-content">
                <FontAwesomeIcon icon={faUserCircle} size="5x" />
                <h1>Sign In</h1>
                <form onSubmit={handleFormSubmit}>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" defaultValue={email} />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password"/>
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">
                            Remember me
                        </label>
                    </div>
                    <button className="sign-in-button">
                        Sign In
                    </button>
                </form>
            </section>
        </main>
    );
}
export default LoginPage;