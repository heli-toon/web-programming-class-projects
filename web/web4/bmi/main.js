function calculateBMI() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value) / 100;
    const resultElement = document.getElementById("result");

    if (isNaN(weight) || isNaN(height) || height <= 0 || weight <= 0) {
        resultElement.innerHTML = "Please enter a valid height or weight value.";
        return;
    }

    const bmi = (weight / (height * height)).toFixed(2);
    let classification = "";

    if (bmi < 18.5) {
        classification = "Underweight";
    } else if (bmi < 24.9) {
        classification = "Normal weight";
    } else if (bmi < 29.9) {
        classification = "Overweight";
    } else {
        classification = "Obese";
    }

    resultElement.innerHTML = `Your BMI is ${bmi} (${classification})`;
}