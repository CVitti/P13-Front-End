// @ts-nocheck

// Common URL for back-end routes
const baseAPIUrl = "http://localhost:3001/api/v1/user";

/**
 * It sends a POST request to the API with the user's email and password, and returns the response as a JSON object.
 * @param {string} userEmail - User email to check
 * @param {string} userPassword - User password to check
 * @returns {object} The response from the server containing request status/message/body
 */
async function checkCredentials(userEmail, userPassword) {

    // Building request body with user data
    const userInfos = {
        "email": userEmail,
        "password": userPassword
    };

    return await fetch(baseAPIUrl + "/login", 
        {
            method : "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams(userInfos)
        }
    ).then(response => {
        return response.json();
    }).catch((error) => {
        console.log("An error occurred during the request : ", error);
        return error;
    })
}
export {checkCredentials};

/**
 * This function will send a POST request to the API with the token in the header, and return the
 * response as a JSON object.
 * @param {string} token - The token that was returned from the login request
 * @returns {object} The response from the server containing request status/message/body
 */
async function getUserProfile(token) {
    return await fetch(baseAPIUrl + "/profile", 
        {
            method : "POST",
            headers: {
                'Authorization': token
            },
        }
    ).then(response => {
        return response.json();
    }).catch((error) => {
        console.log("An error occurred during the request : ", error);
        return error;
    })
}
export {getUserProfile};

/**
 * It takes the first name and the last name (could not be null) sent from the Edit Form and the login token as parameters, builds a request body with the new
 * user name and sends a PUT request to the API to change it in database.
 * @param firstName - New user firstName
 * @param lastName - New user lastName
 * @param token - the token that was returned from the login request
 * @returns {object} The response from the server containing request status/message/body
 */
async function updateUserName(firstName, lastName, token) {

    // Building request body with new user name
    const newUserName = {
        "firstName": firstName,
        "lastName": lastName
    };

    return await fetch(baseAPIUrl + "/profile", 
        {
            method : "PUT",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': token
            },
            body: new URLSearchParams(newUserName)
        }
    ).then(response => {
        return response.json();
    }).catch((error) => {
        console.log("An error occurred during the request : ", error);
        return error;
    })
}
export {updateUserName};