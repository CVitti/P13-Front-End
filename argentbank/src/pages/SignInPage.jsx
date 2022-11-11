// @ts-nocheck

// CSS Import
import "../styles/pages/SignInPage.css"

// FontAwesome Icons import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

// React/React-router components import
import { useNavigate } from 'react-router-dom';

/**
 * 
 * @returns JSX Code for the SignIn Page
 */
function SignInPage(){
    const navigate = useNavigate();

    function Login(e){
        e.preventDefault();
        navigate("/user");
    }

    return(
        <main className="main bg-dark">
            <section className="sign-in-content">
                <FontAwesomeIcon icon={faUserCircle} size="5x" />
                <h1>Sign In</h1>
                <form>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" />
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">
                            Remember me
                        </label>
                    </div>
                    <button className="sign-in-button" onClick={((e) => {Login(e)})}>
                        Sign In
                    </button>
                </form>
            </section>
        </main>
    );
}
export default SignInPage;