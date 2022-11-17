// @ts-nocheck

// CSS Import
import "../styles/pages/ProfilePage.css"

// Custom components import
import Account from "../components/Account";

// React/React-router components import
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

// API function import
import { updateUserName, getUserProfile } from "../services/bankAPI";

// Store functions import
import { setUser } from "../store/store";

/**
 * Profile page of the App, displaying user Name (possible edit of it) and all user accounts
 * @returns JSX Code for the Profile Page
 */
function UserPage() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    // Collect state data
    const token = useSelector((state) => state.userStore.userToken);
    const firstName = useSelector((state) => state.userStore.firstName);
    const lastName = useSelector((state) => state.userStore.lastName);

    useEffect(() => {
        if (token === null) {
            navigate("/login");
        }else{
            const setUserProfile = async () => {  
                const response = await getUserProfile(token);
                dispatch(setUser(response.body));  
            }  
            setUserProfile();     
        }        
    }, [token, dispatch, navigate])

    /**
     * If Edit button is visible (by default) and get clicked on, hide it and display form 
     * Else if clicking on cancel button, resets the form to restaure default values, hide the form and show Edit button.
     * @param {*} e Click event on the Edit/Cancel button
     */
    function manageEditFormDisplay(e){
        e.preventDefault();
        document.forms["form-edit"].reset();
        let form = document.getElementById("form-edit");
        form.classList.toggle('flex');
        let editBtn = document.getElementById("edit-button");
        editBtn.classList.toggle('flex');
    } 

    /**
     * It takes the new first name and last name from the form, sends it to the server, and if the
     * server responds with a success, it updates the user's first name and last name in the redux
     * store, then hide the form and display teh edit button by calling displayEditForm function
     * @param {object} e Button click event
     */
    async function updateUserInfos(e) {
        e.preventDefault();
        let newFirstName = document.getElementById("firstName").value;
        let newLastName = document.getElementById("lastName").value;
        if (newFirstName !== "" && newLastName !== "") {
            const response = await updateUserName(newFirstName, newLastName, token);
            if (response.body) {
                dispatch(setUser(response.body));
            }     
            manageEditFormDisplay(e);
        }else{
            document.getElementById("firstName").style.outlineColor = "#BC0000";
            document.getElementById("lastName").style.outlineColor = "#BC0000";
        }           
    }

    return(
        <main className="main bg-dark">
            <div className="header flex flex--column">
                <h1>
                    Welcome back<br/> 
                    {firstName} {lastName} !
                </h1>
                <button className="flex edit-button" id="edit-button" onClick={manageEditFormDisplay}>
                    Edit Name
                </button>
                <form action="" className="flex--column form-edit" id="form-edit">
                    <div className="flex flex--row input-container">
                        <input type="text" id="firstName" name='firstName' placeholder="First Name" defaultValue={firstName} required className="flex"/>
                        <input type="text" id="lastName" name='lastName' placeholder= "Last Name" defaultValue={lastName} required className="flex"/>
                    </div>
                    <div className="flex flex--row btn-container">
                        <button className="flex btn-edit" onClick={updateUserInfos}>Save</button>
                        <button className="flex btn-edit" onClick={manageEditFormDisplay}>Cancel</button>
                    </div>
                </form>
            </div>
            <h2 className="sr-only">Accounts</h2>
            <Account value="2,082.79" accountType="Checking" accountNumber={8349} />
            <Account value="10,928.42" accountType="Savings" accountNumber={6712} />
            <Account value="184.30" accountType="Credit Card" accountNumber={8349} />
        </main>
    );
}
export default UserPage;