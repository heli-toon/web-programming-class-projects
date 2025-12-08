function checkResult() {
    let grade = ""; 
    
    let mark = parseInt(document.getElementById("number-input").value);

    if (mark < 0 || mark > 100) {
        grade = "Invalid Mark";
    } 
    else {
        if (mark >= 80 && mark <= 100) { 
            grade = "A";
        } 
        else if (mark >= 70 && mark < 80) { 
            grade = "B";
        } 
        else if (mark >= 60 && mark < 70) {
            grade = "C";
        } 
        else if (mark >= 50 && mark < 60) {
            grade = "D";
        } 
        else {
            grade = "F";
        }
    }

    document.getElementById("result").innerHTML = `Your grade is: ${grade}`; 
}