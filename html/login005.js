// Array of users 
let users = [
    {
        username: "amil",
        password: "sup3rsecret"
    },
    {
        username: "bubbG1",
        password: "runFor3st!"
    },
    {
        username: "charlie01",
        password: "Pass1234!"
    },
    {
        username: "deltaEcho",
        password: "deltaEcho2$"
    },
    {
        username: "foxtrotG",
        password: "Foxtrot98@"
    },
    {
        username: "golfSierra",
        password: "golfSierra#1"
    },
    {
        username: "hotelBravo",
        password: "Hotel@Bravo"
    },
    {
        username: "india2Juliet",
        password: "indiaJ2$"
    },
    {
        username: "kiloLima",
        password: "KiloLima3^"
    },
    {
        username: "mikeNovember",
        password: "mikeN7%"
    },
    {
        username: "oscarPapa",
        password: "OscarP@2024"
    },
    {
        username: "quebecRomeo",
        password: "QuebecRomeo#5"
    },
    {
        username: "sierraTango",
        password: "SierraT!99"
    },
    {
        username: "uniformVictor",
        password: "UVictor1*"
    },
    {
        username: "whiskeyXray",
        password: "WhiskeyX#8"
    },
    {
        username: "yankeeZulu",
        password: "YanZul_7!"
    },
    {
        username: "alpha29",
        password: "AlphaTwoNine$"
    },
    {
        username: "betaCharlie",
        password: "Beta$Charlie1"
    },
    {
        username: "gammaDelta",
        password: "GammaDelta2024!"
    },
    {
        username: "epsilonZeta",
        password: "EpsZeta@22"
    },
    {
        username: "thetaIota",
        password: "Theta*Iota3"
    }
];

// Access status div to provide login message
document.getElementById("status").innerHTML = `<p style="color: red">Logged Out</p>`

// Login function
login = () => {
    // Stops default functionality of form
    event.preventDefault();
    // Access information in the username field
    let loginUserName = document.getElementById("username").value;
     // Access information in the username field
     let loginPassword = document.getElementById("password").value;
     // Loop to iterate through the users array
     for (let i = 0; i < users.length; i++) {
        // Set condition based on username and password combination
        if (loginUserName === users[i].username && loginPassword === users[i].password) {
            letLoggedInUser = users[i].username;
            // Updates status based on successful login
            document.getElementById("status").innerHTML = `<p style="color: green">Hello ${letLoggedInUser}, you are Logged In!</p>`
            break;
        }
     }
}