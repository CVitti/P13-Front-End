// @ts-nocheck

// Common URL for back-end routes
const baseAPIUrl = "http://localhost:3001/api/v1/user";

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