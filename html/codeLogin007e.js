// Global

// User Data
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

let localUsersObj = JSON.stringify(users)

// Check to see if the users object exists in local storage
// iF yes, replace the ACTIVE javascript users object within the local storage

if(localStorage.getItem("LocalUsers")) {
    console.log("A localstroage version of users exists");
    let localUsersString = localStorage.getItem("localUsers")
    users = JSON.parse(localUsersString)
}

// Fake test below

// check to see if anyone is logged in
// users[10].currentlyLoggedIn = true;

loggedInStatus = (i) => {
    document.getElementById("status").innerHTML = `<p style="color: green;">Hello ${users[i].firstName}. You are logged in.</p>`
}

loggedOutStatus = (i) => {
    document.getElementById("status").innerHTML = `<p style="color: crimson;">No users are logged in.</p>`  
}

writeActiveToLocal = () => {
    localUsersObj = JSON.stringify(users)
    localStorage.setItem("localUsers", localUsersObj)
}

for (let i = 0; i < users.length; i++) {
    if (users[i].currentlyLoggedIn) {
        // document.getElementById("status").innerHTML = `<p style="color: green;">Hello ${users[i].firstName}. You are logged in.</p>`   
        loggedInStatus(i)
        break
    } else {
        loggedOutStatus()
    }
}

login = () => {
    event.preventDefault();

    console.log("the login function executed")

    let loginUserName = document.getElementById("userName").value
    let loginUserPassword  = document.getElementById("password").value
    
    for ( let i = 0; i < users.length; i++) {
        if (loginUserName == users[i].username && loginUserPassword == users[i].password) {
            users[i].totalLogins++
            users[i].currentlyLoggedIn = true
            // let loggedInCount = users[i].totalLogins

            // Updates localstorage with new new information
            writeActiveToLocal() // writes the changed active users object to local storage
            
            loggedInStatus(i)
            
        }
    }

}

