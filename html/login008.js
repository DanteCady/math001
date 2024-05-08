// Assignment //
git 
// TODO
  When are user logs in do not display their username display their first name instead 
// X  When you tell the user that they have logged in, show the total number of times that they have logged in
// X The first version in your program will only be able to show the user that they've logged in one time
// X Use JavaScript local storage to show users that they've logged in more than one time
// X If a user types in the wrong username or password let them know that they typed in the wrong username or password
// X Create an option that allows the user to create a new user account to be added to your object database
// X Create an option that allows the user to reset their password
// X add a logout feature

// Global Variables//
// ################################################# //

// Array of users
let users = [
    { username: "amil", password: "sup3rsecret", firstName: "Arnell", lastName: "Milhouse", totalLogins: 0 },
    { username: "bubbG1", password: "runFor3st!", firstName: "Bubba", lastName: "Green", totalLogins: 0 },
    { username: "charlie01", password: "Pass1234!", firstName: "Charlie", lastName: "Brown", totalLogins: 0 },
    { username: "deltaEcho", password: "deltaEcho2$", firstName: "Diana", lastName: "Echols", totalLogins: 0 },
    { username: "foxtrotG", password: "Foxtrot98@", firstName: "Frank", lastName: "Gallagher", totalLogins: 0 },
    { username: "golfSierra", password: "golfSierra#1", firstName: "Gary", lastName: "Sierra", totalLogins: 0 },
    { username: "hotelBravo", password: "Hotel@Bravo", firstName: "Hannah", lastName: "Bravo", totalLogins: 0 },
    { username: "india2Juliet", password: "indiaJ2$", firstName: "Ian", lastName: "Juliet", totalLogins: 0 },
    { username: "kiloLima", password: "KiloLima3^", firstName: "Karl", lastName: "Lima", totalLogins: 0 },
    { username: "mikeNovember", password: "mikeN7%", firstName: "Michael", lastName: "November", totalLogins: 0 },
    { username: "oscarPapa", password: "OscarP@2024", firstName: "Oliver", lastName: "Papa", totalLogins: 0 },
    { username: "quebecRomeo", password: "QuebecRomeo#5", firstName: "Quentin", lastName: "Romeo", totalLogins: 0 },
    { username: "sierraTango", password: "SierraT!99", firstName: "Samantha", lastName: "Tango", totalLogins: 0 },
    { username: "uniformVictor", password: "UVictor1*", firstName: "Ursula", lastName: "Victor", totalLogins: 0 },
    { username: "whiskeyXray", password: "WhiskeyX#8", firstName: "William", lastName: "Xray", totalLogins: 0 },
    { username: "yankeeZulu", password: "YanZul_7!", firstName: "Yasmine", lastName: "Zulu", totalLogins: 0 },
    { username: "alpha29", password: "AlphaTwoNine$", firstName: "Aaron", lastName: "Alpha", totalLogins: 0 },
    { username: "betaCharlie", password: "Beta$Charlie1", firstName: "Bella", lastName: "Charlie", totalLogins: 0 },
    { username: "gammaDelta", password: "GammaDelta2024!", firstName: "Gemma", lastName: "Delta", totalLogins: 0 },
    { username: "epsilonZeta", password: "EpsZeta@22", firstName: "Evan", lastName: "Zeta", totalLogins: 0 },
    { username: "thetaIota", password: "Theta*Iota3", firstName: "Theodore", lastName: "Iota", totalLogins: 0 }
];

// Sets current status for login
    document.getElementById(
      "lgn-status"
    ).innerHTML = `<p style="color: blue; font-weight: bold">Please login to continue!</p>`;



// Function to login user //
// ################################################# //
const login = () => {
    // Stops default functionality of form
    event.preventDefault();
    // Access information in the username field
    let loginUserName = document.getElementById("lgn-username").value;
    // Access information in the username field
    let loginPassword = document.getElementById("lgn-password").value;
    // Loop to iterate through the users array
    for (let i = 0; i < users.length; i++) {
        // Condition to identify if username/password is correct
        if (loginUserName === users[i].username && loginPassword === users[i].password) {
            letLoggedInUser = users[i].firstName;
            // Set login details in local storage
            window.localStorage.setItem('currentUser', JSON.stringify(users[i]));
            // Updates status based on successful login
            document.getElementById("lgn-status").innerHTML = `<p style="color: green">Hello ${letLoggedInUser}, you are Logged In!</p>`
            // Updates total logins
            users[i].totalLogins ++;
            // Updates total logins status based on record in local storage
            window.localStorage.getItem('currentUser', JSON.stringify(users[i].totalLogins))
            document.getElementById("totalCountStatus").innerHTML = `<p style="color: green">You have logged in ${users[i].totalLogins} times today!</p>`;
            break;
        }
        // Condition to identify if username/password is provided
        else if (loginUserName === "" || loginPassword === "") {
            document.getElementById("lgn-status").innerHTML = `<p style="color: orange">Please provide a Username and Password!</p>`
            break;
        }
        // Condition to identify if username/password is incorrect
        else if (loginUserName === users[i].username != loginPassword === users[i].password) {
            document.getElementById("lgn-status").innerHTML = `<p style="color: red">Wrong Username and Password combination!</p>`
            break;
        }
    }
}

// Function to logout user //
// ################################################# //

const logout = () => {
    // Gets current user from local storage
    let currentUser = JSON.parse(window.localStorage.getItem('users'));
    // Logs out user
    window.localStorage.removeItem('currentUser', JSON.stringify(currentUser));
    window.localStorage.clear();
    // Updates logout status based on successful logout
    document.getElementById("lgo-status").innerHTML = `<p style="color: red">You have been logged out!</p>`
    // Clears logout status after 5 seconds
    setTimeout(function () {
      document.getElementById("lgo-status").innerHTML = "";
    }, 5000);
    // Update login status based on successful logout
    document.getElementById("lgn-status").innerHTML = `<p style="color: blue; font-weight: bold">Please login to continue!</p>`
    // Update total logins status based on successful logout
    document.getElementById("totalCountStatus").innerHTML = "";
    // Reloads page to reset login status
    if (window.localStorage === null) {
        location.reload();
    } else {
        return false;
    }
}


// Function to create user account in array/database //
// ################################################# //
const createAccount = () => {

        // Stops default functionality of form
        event.preventDefault();
        // Access information in the first name field
        let createFirstName = document.getElementById("crt-firstname").value;
        // Access information in the last name field
        let createLastName = document.getElementById("crt-lastname").value;
        // Access information in the username field
        let createUserName = document.getElementById("crt-username").value;
        // Access information in the pasword field
        let createPassword = document.getElementById("crt-password").value;

        users.push({
            username: `${createUserName}`,
            password: `${createPassword}`,
            firstName: `${createFirstName}`,
            lastName: `${createLastName}`,
            totalLogins: 0
        });
    // Identifies if user account was created
    if (users.length > users.length - 1) {
        // Updates status based on successful account creation
        document.getElementById("crt-status").innerHTML = `<p style="color: green">Account Created Successfully!</p>`
    } else {
        // Updates status based on unsuccessful account creation
        document.getElementById("crt-status").innerHTML = `<p style="color: red">Account Creation Failed!</p>`
    }
}

// Function to allow user to reset password//
// ################################################# //
const resetPassword = () => {
    // Get current user from local storage
    const currentUser = JSON.parse(window.localStorage.getItem('currentUser'));
    if (currentUser) {
        let newPassword = prompt("Please enter your new password:");
        // Update the password of the current user in the users array
        for (let i = 0; i < users.length; i++) {
            if (users[i].username === currentUser.username) {
                users[i].password = newPassword;
                break;
            }
        }
        // Condition to identify if password is provided
        if (newPassword === "") {
            document.getElementById("lgn-status").innerHTML = `<p style="color: orange">Please provide a new password!</p>`;
        } else {
            // Updates status based on successful password reset
            document.getElementById("lgn-status").innerHTML = `<p style="color: green">Password Reset Successful!</p>`;
        }
    }
}


console.log(users); // debuggin line
