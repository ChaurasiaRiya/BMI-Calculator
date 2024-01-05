window.onload = () => {
    let button = document.querySelector("#btn");
    button.addEventListener("click", calculateBMI);
};

function calculateBMI() {
    let height = parseFloat(document.querySelector("#height").value);
    let weight = parseFloat(document.querySelector("#weight").value);
    let result = document.querySelector(".result");

    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        result.innerHTML = "Provide valid height and weight.";
    } else {
        let bmi = (weight / ((height * height) / 10000)).toFixed(2);

        if (bmi < 18.6) {
            result.innerHTML = `BMI: ${bmi} - Underweight`;
        } else if (bmi >= 18.6 && bmi < 24.9) {
            result.innerHTML = `BMI: ${bmi} - Normal Weight`;
        } else {
            result.innerHTML = `BMI: ${bmi} - Overweight`;
        }
    }
}
