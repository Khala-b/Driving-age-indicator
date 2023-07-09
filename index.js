function showOutput(event) {
    event.preventDefault(); // Prevent form submission

    var ageInput = document.getElementById("age_container");
    var age = ageInput.value;
    var outputSection = document.getElementById("show_ans");

    if (age >= 18) {
        outputSection.textContent = "You are old enough to drive.";
    } else {
        var yearsRemaining = 18 - age;
        if (yearsRemaining >=0 ) {
            outputSection.textContent = "You need to wait " + yearsRemaining + " more years to drive.";
        }
    }
}