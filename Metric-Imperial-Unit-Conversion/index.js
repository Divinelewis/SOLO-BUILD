let userAnswer = document.getElementById("answer");
let inputBox = document.getElementById("input-box");
let inputEl = document.getElementById("input-btn");

/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

function lengthInMetersAndFeet(nos) {
  let valuesInFeet = Number(nos * 3.281).toFixed(3);
  let valueInMeters = Number(nos / 3.281).toFixed(3);
  let valuesInGallons = Number(nos * 0.264).toFixed(3);
  let valuesInLiters = Number(nos / 0.264).toFixed(3);
  let valuesInPounds = Number(nos * 2.204).toFixed(3);
  let valuesInKilos = Number(nos / 2.204).toFixed(3);
  return {
    mtrs: valueInMeters,
    fts: valuesInFeet,
    gal: valuesInGallons,
    ltrs: valuesInLiters,
    pds: valuesInPounds,
    kgs: valuesInKilos,
  };
}

inputEl.addEventListener("click", function () {
  const userInput = Number(inputBox.value);
  let result = lengthInMetersAndFeet(userInput);
  userAnswer.innerHTML = `
    <div class="solutions">
        <h3> Length (Meter/Feet) </h3>
        <p> ${userInput} meters = ${result.fts} feet | ${userInput} feet = ${result.mtrs} meters
    </div>

    <div class="solutions">
        <h3> Volume (Liters/Gallons) </h3>
        <p> ${userInput} liters = ${result.gal} gallons | ${userInput} gallons = ${result.ltrs} liters
    </div>

    <div class="solutions">
        <h3> Mass (Kilograms/Pounds) </h3>
        <p> ${userInput} kilos = ${result.pds} pounds | ${userInput} pounds = ${result.kgs} kilos
    </div>
  `;
});
