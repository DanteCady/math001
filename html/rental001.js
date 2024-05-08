// Global Variables

// Cars Array
cars = [
    { make: "Toyota", model: "Camry", year: 2022, rentalRatePerDay: 45, availability: true},
    { make: "Ford", model: "Fusion", year: 2021, rentalRatePerDay: 40, availability: false },
    { make: "Chevrolet", model: "Malibu", year: 2022, rentalRatePerDay: 50, availability: true },
    { make: "Honda", model: "Accord", year: 2023, rentalRatePerDay: 47, availability: true }
]

// Accounts Array
const accounts = [
    { firstName: "Alice", lastName: "Johnson", licenseNum: "AL12345" },
    { firstName: "Bob", lastName: "Williams", licenseNum: "BW67890" },
    { firstName: "Charlie", lastName: "Brown", licenseNum: "CB23456" },
    { firstName: "Diana", lastName: "Evans", licenseNum: "DE78901" },
    { firstName: "Ethan", lastName: "Garcia", licenseNum: "EG34567" },
    { firstName: "Fiona", lastName: "Hernandez", licenseNum: "FH89012" },
    { firstName: "George", lastName: "Lopez", licenseNum: "GL45678" },
    { firstName: "Hannah", lastName: "Martinez", licenseNum: "HM90123" },
    { firstName: "Ian", lastName: "Nguyen", licenseNum: "IN56789" },
    { firstName: "Jane", lastName: "O'Connor", licenseNum: "JO12345" }
]

// Display only available cars within the list
for (let i = 0; i < cars.length; i++) {
    if (cars[i].availability === true) {
        const availableCars = cars[i].make + " " + cars[i].model
        console.log(`Here are the available cars: ${availableCars}`)
        let availableCarsList = document.getElementById("availableCars").innerHTML += `<option id = "selectedCar" value="${availableCars}">${availableCars}</option>`
    };
};

// Check if user has an account to rent
const checkAccount = () => {
    // Get user details
    const firstName = document.getElementById("fName").value.trim()
    const lastName = document.getElementById("lName").value.trim()
    const licenseNum = document.getElementById("licenseNum").value.trim()

    // iterate through accounts array to check if user has an account
    for (let i = 0; i < accounts.length; i++) {
        if (accounts[i].firstName === firstName && accounts[i].lastName === lastName && accounts[i].licenseNum === licenseNum) {
            console.log(`Welcome ${firstName}! You have an account with us.`)
        } else {
            console.log(`Sorry, you do not have an account with us.`)
        }
    }
    // Check if user details are valid
    if (!firstName || !lastName || !licenseNum) {
        alert("Please enter all your details correctly.")
        return
    }

    // Check if user has an account to rent
    const accountExists = accounts.some(account =>
        account.firstName === firstName &&
        account.lastName === lastName &&
        account.licenseNum === licenseNum
    );
    // If account exists, proceed to rent car
    if (accountExists) {
        rentCar();
    } else {
        alert("You must have a valid account to rent a car.")
    }
};

// Rent Car Function
const rentCar = () => {
    // Get rental details
    const firstName = document.getElementById("fName").value;
    const lastName = document.getElementById("lName").value;
    const licenseNum = document.getElementById("licenseNum").value;
    const rentalDays = parseInt(document.getElementById("rentalDays").value);
    const carSelect = document.getElementById("availableCars");
    const carSelectedText = carSelect.options[carSelect.selectedIndex].text;
    const startDate = new Date(document.getElementById("startDate").value);
    const endDate = new Date(document.getElementById("endDate").value);

    // Find the selected car from the cars array
    const carSelected = cars.find(car => car.make + " " + car.model === carSelectedText);

    // Condition to check if all fields are filled
    if (firstName && lastName && licenseNum && rentalDays && carSelected) {
        const rentalRatePerDay = carSelected.rentalRatePerDay; // Get rental rate per day
        const totalCost = rentalRatePerDay * rentalDays; // Calculate total cost
        // Display rental status
        document.getElementById("carRentalStatus").innerHTML = `
            <p style="color: green;">
                Thank you ${firstName}! Your car rental of a ${carSelected.make} ${carSelected.model} is successful.
                <br>
                Rental Period: ${startDate.toDateString()} to ${endDate.toDateString()}.
                <br>
                Rental Rate: $${rentalRatePerDay} per day.
                <br>
                Total Cost: $${totalCost}.
            </p>`;

        // Reset input fields
        document.getElementById("fName").value = '';
        document.getElementById("lName").value = '';
        document.getElementById("licenseNum").value = '';
        document.getElementById("rentalDays").value = '';
        document.getElementById("startDate").value = '';
        carSelect.selectedIndex = 0; // Reset car selection
    } else {
        alert("Please enter valid rental details.");
    }
};
