// Global Variables

// Cars Array
cars = [
    {
        make: "Toyota",
        model: "Camry",
        year: 2022,
        rentalRatePerDay: 45, // in dollars
        availability: true
    },
    {
        make: "Ford",
        model: "Fusion",
        year: 2021,
        rentalRatePerDay: 40, // in dollars
        availability: false
    },
    {
        make: "Chevrolet",
        model: "Malibu",
        year: 2022,
        rentalRatePerDay: 50, // in dollars
        availability: true
    },
    {
        make: "Honda",
        model: "Accord",
        year: 2023,
        rentalRatePerDay: 47, // in dollars
        availability: true
    }
]

// Display only available cars within the list
for (let i = 0; i < cars.length; i++) {
    if (cars[i].availability === true) {
        const availableCars = cars[i].make;
        console.log(`Here are the available cars: ${availableCars}`);
        let availableCarsList = document.getElementById("availableCars").innerHTML += `<option id = "selectedCar" value="${availableCars}">${availableCars}</option>`;
    };
};

// Rent Car Function
const rentCar = () => {
    let firstName = document.getElementById("fName").value;
    let lastName = document.getElementById("lName").value;
    let licenseNum = document.getElementById("licenseNum").value;
    let rentalDays = document.getElementById("rentalDays").value;
    let carSelect = document.getElementById("availableCars");
    let carSelected = carSelect.options[carSelect.selectedIndex].text; 
    if (firstName && lastName && licenseNum && rentalDays) {
        document.getElementById("carRentalStatus").innerHTML = `<p style="color: green;">Thank you ${firstName}! Your car rental of a ${carSelected} is successful</p>`;
    }
}


