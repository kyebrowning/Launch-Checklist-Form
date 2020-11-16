// Write your JavaScript code here!

window.addEventListener("load", function() {
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
      response.json().then(function(json){
         const missionTarget = document.getElementById("missionTarget");
         missionTarget.innerHTML = `
         <h2>Mission Destination</h2>
            <ol>
               <li>Name: ${json[0].name}</li>
               <li>Diameter: ${json[0].diameter}</li>
               <li>Star: ${json[0].star}</li>
               <li>Distance from Earth: ${json[0].distance}</li>
               <li>Number of Moons: ${json[0].moons}</li>
            </ol>
            <img src="${json[0].image}">
         `
      });      
   });

   let form = document.querySelector("form");
   let faultyItems = document.getElementById("faultyItems");
   let pilotStatus = document.getElementById("pilotStatus");
   let copilotStatus = document.getElementById("copilotStatus");
   let fuelStatus = document.getElementById("fuelStatus");
   let cargoStatus = document.getElementById("cargoStatus");
   let launchStatus = document.getElementById("launchStatus");

   form.addEventListener("submit", function(event) {
      let pilotInput = document.querySelector("input[name=pilotName]");
      let copilotInput = document.querySelector("input[name=copilotName]");
      let fuelInput = document.querySelector("input[name=fuelLevel]");
      let cargoInput = document.querySelector("input[name=cargoMass]"); 
      
      event.preventDefault();

     if (pilotInput.value === "" || copilotInput.value === "" || fuelInput.value === "" || cargoInput === ""){
       alert ("All fields are required!");
     } else if (!isNaN(pilotInput.value) || !isNaN(copilotInput.value)){
         alert ("Invalid entry. Please re-enter your name(s).");
     } else if (isNaN(fuelInput.value) || isNaN(cargoInput.value)){
         alert ("Invalid entry, Please enter a number");
     } else {
         console.log(`Form has been submitted!`);
     } 

     
     pilotStatus.innerHTML = `Pilot ${pilotInput.value}'s Status: Ready`;
     copilotStatus.innerHTML = `Co-pilot ${copilotInput.value}'s Status: Ready`;

     if (fuelInput.value < 10000){
         faultyItems.style.visibility = "visible";
         fuelStatus.innerHTML = `Insufficient fuel for launch`;
         launchStatus.innerHTML = `Shuttle Not Ready for Launch`;
         launchStatus.style.color = "red";
     } else if (cargoInput.value > 10000) {
         faultyItems.style.visibility = "visible";
         cargoStatus.innerHTML = `Theres is too much cargo/weight to launch`;
         launchStatus.innerHTML = `Shuttle Not Ready for Launch`;
         launchStatus.style.color = "red";   
     } else {
         faultyItems.style.visibility = "visible";
         launchStatus.innerHTML = `Shuttle Ready for Launch`;
         launchStatus.style.color = 'green';
     }
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
