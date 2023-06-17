function calculateBMI() {
  // Get the values entered by the user
  var weight = parseFloat(document.getElementById("weight").value);
  var height = parseFloat(document.getElementById("height").value);

  // Validate the inputs
  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    alert("Please enter valid values for weight and height.");
    return;
  }

  // Calculate the BMI
  var bmi = weight / (height * height);

  // Display the result
  document.getElementById("result").innerHTML =
    "Your BMI is: " + bmi.toFixed(2);
}
