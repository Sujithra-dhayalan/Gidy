var gryffindor = document.querySelector(".reveal");
var password = document.getElementById("password");
var flyingCar = document.getElementById("flyingCar");
var curtain = document.querySelector(".curtain");

function checkPassword() {

    if (password.value === "Harry") {
        gryffindor.classList.add("show")
    } else {
        alert("Incorrect password");
    }
}

function nextPage() {
    curtain.style.display="block"
    flyingCar.classList.add("fly");
    setTimeout(function () {
        window.location.href = "entry.html";
    }, 3000);
}
