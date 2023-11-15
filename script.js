// Write your JavaScript code here!

// const { addDestinationInfo, pickPlanet, myFetch } = require("./scriptHelper.js");

window.addEventListener("load", function() {

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();

    listedPlanetsResponse.then(function (result) {

        listedPlanets = result;

    }).then(function () {

        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let pickedPlanet = pickPlanet(listedPlanets);

        let planetName = pickedPlanet["name"];
        let planetDiameter = pickedPlanet["diameter"];
        let planetStar = pickedPlanet["star"];
        let planetDistance = pickedPlanet["distance"];
        let planetMoons = pickedPlanet["moons"];
        let planetImg =  pickedPlanet["image"];

        addDestinationInfo(document, planetName, planetDiameter, planetStar, planetDistance, planetMoons, planetImg);
    });

    let form = document.querySelector("form");

    form.addEventListener("submit", function(event) {

        let pilotName = document.querySelector("input[name=pilotName]").value;
        let copilotName = document.querySelector("input[name=copilotName]").value;
        let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
        let cargoMass = document.querySelector("input[name=cargoMass]").value;

        formSubmission(document, event, pilotName, copilotName, fuelLevel, cargoMass);

    });
});