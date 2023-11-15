// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {

    let missionTarget = document.getElementById("missionTarget");

    missionTarget.innerHTML = `
        <h2>Mission Destination</h2>
        <ol>
            <li>Name: ${name}</li>
            <li>Diameter: ${diameter}</li>
            <li>Star: ${star}</li>
            <li>Distance from Earth: ${distance}</li>
            <li>Number of Moons: ${moons}</li>
        </ol>
        <img src="${imageUrl}">
    `
 };
 
 function validateInput(testInput) {

    if (testInput === "") {
        return "Empty";
    } else if (isNaN(testInput) === false) {
        return "Is a Number";
    } else if (isNaN(testInput) === true){
        return "Not a Number";
    };

 };
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

    const liPilot = document.getElementById("pilotStatus");
    const liCopilot = document.getElementById("copilotStatus");
    const liFuelStatus = document.getElementById("fuelStatus");
    const liCargoStatus = document.getElementById("cargoStatus");
    const h2LaunchStatus = document.getElementById("launchStatus");
    const faultyItems = document.getElementById("faultyItems");

    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {

        alert("All fields are required!");

        return list.preventDefault();

    } else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number" || validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number") {

        alert("Enter valid information in each field!");
        
        return list.preventDefault();

    } else if (fuelLevel < 10000 && cargoLevel <= 10000) {

        liPilot.innerHTML = `
            Pilot ${pilot} is ready for launch
        `;
        liCopilot.innerHTML = `
            Co-pilot ${copilot} is ready for launch
        `;
        liFuelStatus.innerHTML = "Fuel level too low for launch";
        liCargoStatus.innerHTML = "Cargo mass low enough for launch";
        h2LaunchStatus.innerHTML = "Shuttle Not Ready for Launch";
        h2LaunchStatus.style.color = "red";
        faultyItems.style.visibility = "visible";

        return list.preventDefault();

    } else if (cargoLevel > 10000 && fuelLevel >= 10000) {

        liPilot.innerHTML = `
            Pilot ${pilot} is ready for launch
        `;
        liCopilot.innerHTML = `
            Co-pilot ${copilot} is ready for launch
        `;
        liFuelStatus.innerHTML = "Fuel level high enough for launch";
        liCargoStatus.innerHTML = "Cargo mass too heavy for launch";
        h2LaunchStatus.innerHTML = "Shuttle Not Ready for Launch";
        h2LaunchStatus.style.color = "red";
        faultyItems.style.visibility = "visible";

        return list.preventDefault();

    } else if (cargoLevel > 10000 && fuelLevel <= 10000) {

        liPilot.innerHTML = `
            Pilot ${pilot} is ready for launch
        `;
        liCopilot.innerHTML = `
            Co-pilot ${copilot} is ready for launch
        `;
        liFuelStatus.innerHTML = "Fuel level too low for launch";
        liCargoStatus.innerHTML = "Cargo mass too heavy for launch";
        h2LaunchStatus.innerHTML = "Shuttle Not Ready for Launch";
        h2LaunchStatus.style.color = "red";
        faultyItems.style.visibility = "visible";

        return list.preventDefault();

    } else {

        liPilot.innerHTML = `
            Pilot ${pilot} is ready for launch
        `;
        liCopilot.innerHTML = `
            Co-pilot ${copilot} is ready for launch
        `;
        liFuelStatus.innerHTML = "Fuel level high enough for launch";
        liCargoStatus.innerHTML = "Cargo mass low enough for launch";
        h2LaunchStatus.style.color = "green";
        h2LaunchStatus.innerHTML = "Shuttle is Ready for Launch";

        return list.preventDefault();

    };

 };
 
 async function myFetch() {

    let planetsReturned;
 
    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
    });
 
    return planetsReturned;
 };
 
 function pickPlanet(planets) {

    let randomNum = Math.floor(Math.random() * 6);

    return planets[randomNum];
 };
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;