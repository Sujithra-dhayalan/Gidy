
//for both the pages

//this allows the music to play or pause

var music = document.getElementById("music");
var count = 0;
function musicPlayer() {
    count++;
    if (count % 2 == 0) {
        music.pause();
    }
    else {
        music.play();
    }
}

//for index page

var gryffindor = document.querySelector(".reveal");
var password = document.getElementById("password");
var flyingCar = document.getElementById("flyingCar");
var curtain = document.querySelector(".curtain");
var lion = document.getElementById("lion");


function checkPassword() {

    if (password.value === "Harry Potter") {
        gryffindor.classList.add("show")
    } else {
        alert("Incorrect password");
    }
}

//this function makes the enter button also use the same function
// password.addEventListener("keydown",function(event){
//     if (event.key === "Enter"){
//         checkPassword();
//     }
// });

function nextPage() {
    curtain.style.display = "block"
    flyingCar.classList.add("fly");
    setTimeout(function () {
        window.location.href = "entry.html";
    }, 3000);
}

//for the entry page

var pen = document.getElementById("pen");
var logBook = document.querySelector(".logging");
var book = document.querySelector(".main");
var saveButton = document.getElementById("save");
var deleteButton = document.getElementById("delete");
var dateInput = document.getElementById("date");
var descriptionInput = document.getElementById("description");
var envelopeContainer = document.getElementById("envelope-container");
var candle = document.querySelector(".candle");
var searchInput = document.getElementById("search");
var searchIcon = document.querySelector(".search-icon");
// this line retrieves the data from the local storage of the browser everytime we load it
var entries = JSON.parse(localStorage.getItem('journalEntries')) || [];

function save() {
    var date = dateInput.value;
    var description = descriptionInput.value;
    console.log("saved");
    book.style.display = "block";
    if (date && description) {
        var entry = { date, description };
        entries.push(entry);
        localStorage.setItem('journalEntries', JSON.stringify(entries));

        //now we want to add the data to the screen
        addEnvelope(entry); //this function will basically add the entry that is recently entered into display
        logBook.style.display = "none";
        dateInput.value = "";
        descriptionInput.value = "";
    }
}

function addEnvelope(entry) {
    var envelope = document.createElement("div");
    envelope.classList.add("display");
    envelope.innerHTML = `<h2 style="margin-bottom:10px">Date: ${entry.date}</h2>
                        <img src="/JournalProject/assets/envelope.jpeg" alt="envelope" class="envelope">`;
    envelope.addEventListener("click", function () {
        displayEntry(entry);
    });
    envelopeContainer.appendChild(envelope);
}

function displayEntry(entry) {
    book.style.display = "none";
    logBook.style.display = "block";
    date.value = entry.date;
    description.value = entry.description;
}

function loadEntries() {
    entries.forEach(addEnvelope);
}

pen.addEventListener("click", function () {
    logBook.style.display = "block";
    book.style.display = "none";
})

saveButton.addEventListener("click", save);

deleteButton.addEventListener("click", function () {
    var date = dateInput.value;
    var description = descriptionInput.value;
    entry = { date, description };
    entries = entries.filter(i => i.date !== entry.date || i.description !== entry.description);
    localStorage.setItem('journalEntries', JSON.stringify(entries));
    dateInput.value = "";
    description.value = "";
    logBook.style.display = "none";
    book.style.display = "block";
    envelopeContainer.innerHTML = "";
    loadEntries();
})

candle.addEventListener("click", function () {
    logBook.style.display = "none";
    book.style.display = "block"
    dateInput.value = "";
    descriptionInput.value = "";
})

searchIcon.addEventListener("click", function () {
    var search = searchInput.value.toLowerCase();
    console.log(search)
    var envelopes = document.querySelectorAll(".display");
    console.log("touch works");
    envelopes.forEach(function (envelope) {
        console.log("function works")
        var dateElements = envelope.querySelector("h2");

        if (dateElements && dateElements.textContent.toLocaleLowerCase().includes(search)) {
            dateElements.style.backgroundColor = "yellow";

            envelope.addEventListener("click", function () {
                dateElements.style.backgroundColor = "transparent";
            })
        }
        else {
            console.log("match not found");
        }
    });
});

loadEntries();



