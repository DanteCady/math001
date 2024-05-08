// Array of users
let users = [
    { username: "zzz", password: "zzz", firstName: "zzzperson", lastName: "zzzLastname", currentlyLoggedIn: false, totalLogins: 0 },
    { username: "amil", password: "sup3rsecret", firstName: "Arnell", lastName: "Milhouse", currentlyLoggedIn: false, totalLogins: 0 },
    { username: "bubbG1", password: "runFor3st!", firstName: "Bubba", lastName: "Green", currentlyLoggedIn: false, totalLogins: 0 },
    { username: "charlie01", password: "Pass1234!", firstName: "Charlie", lastName: "Brown", currentlyLoggedIn: false, totalLogins: 0 },
    { username: "deltaEcho", password: "deltaEcho2$", firstName: "Diana", lastName: "Echols", currentlyLoggedIn: false, totalLogins: 0 },
    { username: "foxtrotG", password: "Foxtrot98@", firstName: "Frank", lastName: "Gallagher", currentlyLoggedIn: false, totalLogins: 0 },
    { username: "golfSierra", password: "golfSierra#1", firstName: "Gary", lastName: "Sierra", currentlyLoggedIn: false, totalLogins: 0 },
    { username: "hotelBravo", password: "Hotel@Bravo", firstName: "Hannah", lastName: "Bravo", currentlyLoggedIn: false, totalLogins: 0 },
    { username: "india2Juliet", password: "indiaJ2$", firstName: "Ian", lastName: "Juliet", currentlyLoggedIn: false, totalLogins: 0 },
    { username: "kiloLima", password: "KiloLima3^", firstName: "Karl", lastName: "Lima", currentlyLoggedIn: false, totalLogins: 0 },
    { username: "mikeNovember", password: "mikeN7%", firstName: "Michael", lastName: "November", currentlyLoggedIn: false, totalLogins: 0 },
    { username: "oscarPapa", password: "OscarP@2024", firstName: "Oliver", lastName: "Papa", currentlyLoggedIn: false, totalLogins: 0 },
    { username: "quebecRomeo", password: "QuebecRomeo#5", firstName: "Quentin", lastName: "Romeo", currentlyLoggedIn: false, totalLogins: 0 },
    { username: "sierraTango", password: "SierraT!99", firstName: "Samantha", lastName: "Tango", currentlyLoggedIn: false, totalLogins: 0 },
    { username: "uniformVictor", password: "UVictor1*", firstName: "Ursula", lastName: "Victor", currentlyLoggedIn: false, totalLogins: 0 },
    { username: "whiskeyXray", password: "WhiskeyX#8", firstName: "William", lastName: "Xray", currentlyLoggedIn: false, totalLogins: 0 },
    { username: "yankeeZulu", password: "YanZul_7!", firstName: "Yasmine", lastName: "Zulu", currentlyLoggedIn: false, totalLogins: 0 },
    { username: "alpha29", password: "AlphaTwoNine$", firstName: "Aaron", lastName: "Alpha", currentlyLoggedIn: false, totalLogins: 0 },
    { username: "betaCharlie", password: "Beta$Charlie1", firstName: "Bella", lastName: "Charlie", currentlyLoggedIn: false, totalLogins: 0 },
    { username: "gammaDelta", password: "GammaDelta2024!", firstName: "Gemma", lastName: "Delta", currentlyLoggedIn: false, totalLogins: 0 },
    { username: "epsilonZeta", password: "EpsZeta@22", firstName: "Evan", lastName: "Zeta", currentlyLoggedIn: false, totalLogins: 0 },
    { username: "thetaIota", password: "Theta*Iota3", firstName: "Theodore", lastName: "Iota", currentlyLoggedIn: false, totalLogins: 0 },
    
];


// Converts the users array object to a JSON string
let localUsersObj = JSON.stringify(users)

// Identify if a user is within the local storage and updates the login count on successful login
if (localStorage.getItem("localUsers")) {
    console.log("local storage exists");
    let localUsersText =  localStorage.getItem("localUsers") // Obtains the localUsers from the local browser storage
    users = JSON.parse(localUsersText) // Converts the JSON string to a JavaScript object

    let loginCheck = 0
        // Iterate through users array and indetify if user is current logged in
        for (let i = 0; i < users.length; i++) {
            if (users[i].currentlyLoggedIn) {
                loginCheck++ // Updates loginCheck variable
                document.getElementById("status").innerHTML = `<p style="color: green">Hello ${users[i].firstName}, You are Logged In! You have logged in ${users[i].totalLogins} times</p>`
                break
            }
        }
        // Displays message if loginCheck is 0 
        if (loginCheck == 0) {
            document.getElementById("status").innerHTML = `<p style="color: red">No Users Currently Logged In</p>`
            document.getElementById("newAccountStatus").innerHTML = ``
    
        }


} else {
    // If local storage does not container localUsers, set localUsers in local storage
    console.log("local storage DOES NOT exists");
    let usersString = JSON.stringify(users)
    localStorage.setItem("localUsers", usersString)
}



// Login Function

login = () => {
    event.preventDefault() // Prevents form from submitting
    let loginUserName = document.getElementById("username").value // Obtains the username from the username field
    let loginPassword = document.getElementById("password").value // Obtains the password from the password field
    let badUserCount = 0

    for (let i = 0; i < users.length; i++) {
        // console.log(Boolean(loginUserName == users[i].username && loginPassword == users[i].password));
        // Sets condition to verify credentials and login user
        if (loginUserName == users[i].username && loginPassword == users[i].password) {
            let loggedInUser = users[i].firstName // stores user's firstname in variable
            users[i].totalLogins++ // Update total login count for the current logged in user
            users[i].currentlyLoggedIn = true // Updates curentlyLoggedIn element in users array
            let loggedInCount = users[i].totalLogins // stores total login count in a variable

            localUsersObj = JSON.stringify(users) 
            localStorage.setItem("localUsers", localUsersObj)
            
            // Updates the HTML with a success message
            document.getElementById("status").innerHTML = `<p style="color: green">Hello ${users[i].firstName}, You are Logged In! You have logged in ${loggedInCount} times</p>`
            document.getElementById("newAccountStatus").innerHTML = ``
            console.log(badUserCount);


            break

        } else {
            // If credential fails, update badUserCount
            badUserCount++
        }

    }
    // Condition to provide error status if wrong credentials are provided
    if (badUserCount == users.length) {
        console.log(badUserCount);
        console.log(users.length);
        console.log("username or password issue");

        document.getElementById("status").innerHTML = `<p style="color: red">Username or Password is incorrect. Enter the correct Username or Reset Password Below.</p>`
        document.getElementById("resetPassword").innerHTML = `<hr><form onSubmit="resetPw()"> <input type="submit" value="Reset Password"> </form>`
    }

    localUsersObj = JSON.stringify(users)
    localStorage.setItem("localUsers", localUsersObj)
    // Changes inputs to null 
    document.getElementById("username").value = ""
    document.getElementById("password").value = ""


}
// Create Account Function
createAccount = () => {
    event.preventDefault()

    // Sets variables for the firstname, lastname, username, and password from the form
    let loginFirstName = document.getElementById("newFirstName").value
    let loginLastName = document.getElementById("newLastName").value
    let loginUserName = document.getElementById("newUsername").value
    let loginPassword = document.getElementById("newPassword").value
    console.log(loginFirstName);
    console.log(loginLastName);
    console.log(loginUserName);
    console.log(loginPassword);

    console.log(`{ username: ${loginUserName}, password: ${loginPassword}, firstName: ${loginFirstName}, lastName: ${loginLastName}, currentlyLoggedIn: false, totalLogins: 0 },`); 
    // Adds new user account details into the users array
    users.push({ username: loginUserName, password: loginPassword, firstName: loginFirstName, lastName: loginLastName, currentlyLoggedIn: false, totalLogins: 0 }); 
    // Converts updated users array to json
    localUsersObj = JSON.stringify(users)
    // Updates the localUsers in local storage with the current localUserObj
    localStorage.setItem("localUsers", localUsersObj)


    // let newAccount = `{ username: ${loginUserName}, password: ${loginPassword}, firstName: ${loginFirstName}, lastName: ${loginLastName}, currentlyLoggedIn: false, totalLogins: 0 },`
    document.getElementById("newAccountStatus").innerHTML = `<p style="color: green">Hello ${loginFirstName}, Youre account has been created.  You may now login above</p>`
    console.log(users);
}

// Logout Function
logout = () => {
    event.preventDefault()
    // Iterates through the users array and updates the currentlyLoggedIn element to false
    for (let i = 0; i < users.length; i++) {
            users[i].currentlyLoggedIn = false
        }
        // Updates the localUsersObj with the updated users array
        localUsersObj = JSON.stringify(users)
        localStorage.setItem("localUsers", localUsersObj)
        localUsersObj = JSON.stringify(users)
        localStorage.setItem("localUsers", localUsersObj)
        // Updates the HTML with a message
        document.getElementById("status").innerHTML = `<p style="color: red">No Users Currently Logged In</p>`
        document.getElementById("newAccountStatus").innerHTML = ``


    }

// Reset Password Function
resetPw = () => {
    
    event.preventDefault()
    document.getElementById("resetAccount").innerHTML = 
    `<br>    
    <hr>
    <p>Create New Password:</p>
    <form onSubmit="writeNewPassword()">
    <label for="">Last Name:</label>
    <input type="text" id="accountLastname">
    <label for="">Username:</label>
    <input type="text" id="accountUsername">
    <label for="">New Password:</label>
    <input type="password" id="accountPassword">
    <input type="submit" value="submit">
    </form>`
    
} 

// Write New Password Function
writeNewPassword = () => {
    event.preventDefault()
    console.log("write new pw stuff");
    // Sets variables for the lastname, username, and password from the form
    let accountLastname = document.getElementById("accountLastname").value
    let accountUsername = document.getElementById("accountUsername").value
    let accountPassword = document.getElementById("accountPassword").value
    // Sets a variable to track if the password has been changed
    let pwChange = 0
    // Iterates through the users array and updates the password for the user
    for (let i = 0; i < users.length; i++) {
        if (users[i].username == accountUsername) {
            users[i].password = accountPassword
            pwChange++
            document.getElementById("resetAccount").innerHTML = ""
            document.getElementById("resetPassword").innerHTML = ""

            document.getElementById("status").innerHTML = `<p style="color: green">Your password has been updated</p>`

        }
    }
    // Updates the localUsersObj with the updated users array
    if (pwChange != 0) {
        localUsersObj = JSON.stringify(users)
        localStorage.setItem("localUsers", localUsersObj)
        localUsersObj = JSON.stringify(users)
        localStorage.setItem("localUsers", localUsersObj)
    }

}
