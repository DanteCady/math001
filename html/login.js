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
let header = document.getElementById("header").innerHTML = "Login Form";
// let loginStatus = document.getElementById("login-status").innerHTML = "You are logged in " + username + "!";

const loginButton = document.getElementById("login-button");
loginButton.addEventListener("click", login);

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  console.log("username:", username ,"password:", password);
  const loginSuccessMsg = document.getElementById("login-success");
  const loginErrorMsg = document.getElementById("login-error");
  const loginCredsNeeded = document.getElementById("login-noCreds");
  for (let i = 0; i < users.length; i++) {
    
    if (username === users[i].username && password === users[i].password) {
      loginSuccessMsg.innerHTML = "You are logged in " + username + "!";
    } else if (username === "" || password === "") {
      loginCredsNeeded.innerHTML = "Please enter your username and password!";

    } else if (username !== users[i].username || password !== users[i].password){  
    }
  }
  return false;

}

console.log(login()); // Debugging line`