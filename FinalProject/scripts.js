let plantdata = `
[
    {
        "name": "sunflower",
        "piclocation": "sunflower.jpg",
        "genus": "helianthus annuus",
        "seasons": [
            "summer"
        ]
    },
    {
        "name": "daisy",
        "piclocation": "daisy.jpg",
        "genus": "bellis",
        "seasons": [
            "summer"
        ]
    },
    {
        "name": "rose",
        "piclocation": "rose.jpg",
        "genus": "rosa",
        "seasons": [
            "summer",
            "spring"
        ]
    },
    {
        "name": "tulip",
        "piclocation": "tulip.jpg",
        "genus": "tulipa",
        "seasons": [
            "summer",
            "spring",
            "fall"
        ]
    }
]
`
let plantjson = JSON.parse(plantdata);
let size = plantjson.length;
var count = 0;
console.log(JSON.parse(plantdata));
// let startPlant = plantjson[0];

// document.getElementById("pic").setAttribute("src", "data/".concat(startPlant.piclocation));
// document.getElementById("name").textContent = startPlant.name;
// document.getElementById("genusval").textContent = startPlant.genus;
// document.getElementById("seasonval").textContent = "";

/**
 * get the check button element and add an even listener to it
 */
var checkbtn = document.getElementById("checkbtn");
if (checkbtn) {
    checkbtn.addEventListener("click", function () { check(document.getElementById("inputText").value) }, false);
    checkbtn.addEventListener("keypress", function () {
        if (event.key == "Enter") {
            check(document.getElementById("inputText").value);
        }
    }, false);
    console.log("Created event listener for check button");
} else {
    console.log("unable to get element");
}

/**
 * get the next button element and add an event listener to it
 */
var nextbtn = document.getElementById("next");
if (nextbtn) {
    nextbtn.addEventListener("click", next);
    console.log("Created event listener for next button");
} else {
    console.log("unable to get element");
}

if (nextbtn) {
    next();
}

function check(inputval) {
    console.log("Input Value: ".concat(document.getElementById("inputText").value));
    var answer = document.getElementById("name").textContent;
    inputval = inputval.replace(/\s+/g, '').toUpperCase();
    answer = answer.replace(/\s+/g, '').toUpperCase();
    console.log(inputval);
    console.log(answer);
    if (answer == inputval) {
        document.getElementById("result").textContent = "correct!";
    } else {
        document.getElementById("result").textContent = "incorrect";
    }
}

function next() {
    if (count >= size) {
        count = 0;
    } else {
        count = count + 1;
    }
    var currentPlantName = document.getElementById("name").textContent;
    var index = Math.floor(Math.random() * size - 1) + 1;
    if (index > size - 1) {
        index = index + Math.floor(size / 2);
    }
    console.log("Index: ".concat(index));
    var nextPlant = plantjson[index];
    if (currentPlantName != nextPlant.name) {
        var pic = nextPlant.piclocation;
        console.log(pic);
        document.getElementById("pic").setAttribute("src", `data/${pic}`);
        document.getElementById("name").textContent = nextPlant.name;
        document.getElementById("genusval").textContent = nextPlant.genus;
        var seasons = (function () {
            var a = "";
            for (let i = 0; i < nextPlant.seasons.length; i++) {
                a = a.concat(nextPlant.seasons[i]);
                a = a.concat(", ");
            }
            a = a.substr(0, a.length - 2);
            return a;
        })();
        document.getElementById("seasonval").textContent = seasons;
        document.getElementById("result").textContent = "";
    } else {
        next();
    }
    document.getElementById("inputText").value = "";
}

/**
 * Randomize the indeces of a given array
 */
function shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}