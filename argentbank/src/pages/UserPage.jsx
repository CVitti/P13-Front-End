// @ts-nocheck

// CSS Import
import "../styles/pages/UserPage.css"

// Custom components import
import Account from "../components/Account";

/**
 * 
 * @returns JSX Code for the User Page
 */
function UserPage() {
    return(
        <main className="main bg-dark">
            <div className="header">
                <h1>Welcome back<br />Tony Jarvis!</h1>
                <button className="edit-button">Edit Name</button>
            </div>
            <h2 className="sr-only">Accounts</h2>
            <Account value="2,082.79" accountType="Checking" accountNumber={8349} />
            <Account value="10,928.42" accountType="Savings" accountNumber={6712} />
            <Account value="184.30" accountType="Credit Card" accountNumber={8349} />
        </main>
    );
}
export default UserPage;