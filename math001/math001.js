// Global

// Function to create multiplied result
const newNum = () => {
    // Obtain number from input field
    const num1 = document.getElementById("num1").value 
    console.log("num1: ", num1)
    const num2 = document.getElementById("num2").value 
    console.log("num2: ", num2)

    // Parse text from input field to integer
    parseInt(num1)
    parseInt(num2)

    // Initialize variable from the multiplied numbers
    const output = num1 * num2
    console.log(`The output of ${num1} multiplied by ${num2} is ${output}`) // Output the resul to the console
    document.getElementById("output").innerHTML = output // Outputs result to HTML file
}
