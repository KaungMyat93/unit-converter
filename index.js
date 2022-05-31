

let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")

function enter() {
    let input = document.getElementById("input").value
    lengthEl.textContent = input + " meters " + " = " + (input*3.28084).toFixed(3) + " feet " + " | " + input + " feet " + " = " + (input*0.3048).toFixed(3) + " meters"
    
    volumeEl.textContent = input + " liters " + " = " + (input*0.264172).toFixed(3) + " gallons " + " | " + input + " gallons " + " = " + (input*3.78541).toFixed(3) + " liters"
    
    massEl.textContent = input + " kilos " + " = " + (input*2.20462).toFixed(3) + " pounds " + " | " + input + " pounds " + " = " + (input*0.453592).toFixed(3) + " kilos"
   
}

