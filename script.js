function calculateAverage() {

    let m1 = Number(document.getElementById("m1").value);
    let m2 = Number(document.getElementById("m2").value);
    let m3 = Number(document.getElementById("m3").value);

    if (
        document.getElementById("m1").value === "" ||
        document.getElementById("m2").value === "" ||
        document.getElementById("m3").value === ""
    ) {
        document.getElementById("result").innerHTML =
            "⚠ Please enter all marks";
        return;
    }

    let average = (m1 + m2 + m3) / 3;

    let grade = "";

    if (average >= 90) {
        grade = "A+";
    }
    else if (average >= 80) {
        grade = "A";
    }
    else if (average >= 70) {
        grade = "B";
    }
    else if (average >= 60) {
        grade = "C";
    }
    else if (average >= 50) {
        grade = "D";
    }
    else {
        grade = "Fail";
    }

    document.getElementById("result").innerHTML =
        "Average Marks : " +
        average.toFixed(2) +
        "<br>Grade : " +
        grade;
}
