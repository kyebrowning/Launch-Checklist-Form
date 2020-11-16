// Write your JavaScript code here!
window.addEventListener("load", function() {
   let form = document.querySelector("form");

   form.addEventListener("submit", function(event) {
     let pilotInput = document.querySelector("input[name=pilotName]");
     let copilotInput = document.querySelector("input[name=copilotName]");
     let fuelInput = document.querySelector("input[name=fuelLevel]");
     let cargoInput = document.querySelector("input[name=cargoMass]");
     if (pilotInput.value === "" || copilotInput.value === "" || fuelInput.value === "" || cargoInput === ""){
       alert ("All fields are required!");
       event.preventDefault();
     } else if (!isNaN(pilotInput.value) || !isNaN(copilotInput.value)){
         alert ("Invalid entry. Please re-enter your name(s).");
         event.preventDefault();
     } else if (isNaN(fuelInput.value) || isNaN(cargoInput.value)){
         alert ("Invalid entry, Please enter a number");
         event.preventDefault();
     } else {
         console.log(`Form has been submitted!`)
     }

     let faultyItems = document.getElementById("faultyItems")
     let pilotStatus = document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotInput.value}: Ready!`;
     let copliotStatus = document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilotInput.value}: Ready!`;
     
     if(fuelInput < 10000){
         let fuelStatus = document.getElementById("fuelStatus").innerHTML = "Insufficient fuel for launch!";
         let faultyItems = document.getElementById("faultyItems").style.visibility = "visible";
         let launchStatus = document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch!".style.color = "red";
       } 
     let cargoStatus = document.getElementById("cargoStatus");


   });

});
/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
