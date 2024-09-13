// fetching the elements into the DOM

let celsius = document.querySelector("#celsius");
let fahrenheit = document.querySelector("#fahrenheit");
let kelvin = document.querySelector("#kelvin");
let submitBtn = document.querySelector(".btn");
let heading = document.querySelector(".heading");

// setting up original values for input fields to implement setTimeOut function

let ogCelsius = celsius.value;
let ogFahrenheit = fahrenheit.value;
let ogkelvin= kelvin.value;
let ogHeading = heading.innerHTML;


// creating function to convert temperature

function calculateTemp() {
  let celValue = parseFloat(celsius.value);

  if (!isNaN(celValue)) {
    let celToFah = celValue * (9 / 5) + 32;
    let celToKel = celValue + 273.15;

    fahrenheit.value = celToFah.toFixed(3);
    kelvin.value = celToKel.toFixed(3);
  } else{
    heading.innerHTML = `Please enter valid temperature!!🌡`
  }

  if(celValue > 45){
    heading.innerHTML = `Hey man how can you live there?🥵`
  }

  setTimeout(function(){
    celsius.value = ogCelsius;
    fahrenheit.value = ogFahrenheit;
    kelvin.value = ogkelvin;
    heading.innerHTML = ogHeading;

  },10000);


}

// creating button to invoke calculation/conversion
submitBtn.addEventListener("click", calculateTemp);
