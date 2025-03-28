function calculate() {
    // Get input values
    const age = parseInt(document.getElementById("age").value);
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseInt(document.getElementById("height").value);
    const gender = document.getElementById("gender").value;

    // Check for missing input
    if (isNaN(age) || isNaN(weight) || isNaN(height)) {
        alert("Please fill in all the fields.");
        return;
    }

    // Target weight range
    const targetMinWeight = 83; // Lower target weight
    const targetMaxWeight = 85; // Upper target weight

    // Calculate how much weight needs to be lost
    let weightToLoseMin = weight - targetMaxWeight;
    let weightToLoseMax = weight - targetMinWeight;

    // If the current weight is already within the target range, set weightToLose to 0
    if (weight <= targetMaxWeight) {
        weightToLoseMin = 0;
    }

    if (weight <= targetMinWeight) {
        weightToLoseMax = 0;
    }

    // Display the result
    const weightToLoseMinFormatted = weightToLoseMin > 0 ? weightToLoseMin.toFixed(2) : "0";
    const weightToLoseMaxFormatted = weightToLoseMax > 0 ? weightToLoseMax.toFixed(2) : "0";

    document.getElementById("weightToLose").textContent = `${weightToLoseMinFormatted} - ${weightToLoseMaxFormatted} KG`;
}
