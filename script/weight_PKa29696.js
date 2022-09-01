/* JavaScript to calculate weight on different planets */

// Function to calculate weight on Mercury

function calculateOnMercury(form) {
    var weight;

    if(form.elements["weight"].value == "" || isNaN(form.elements["weight"].value))
        weight = 0;
    else
        weight = form.elements["weight"].value; 

    // parsing value to float
    var weigh = parseFloat(weight);

    weigh *= 0.38;
    document.getElementById("out").value = weigh.toFixed(2);
}// End function calculateOnMercury

// ****************************************************************************************************************

// Function to calculate weight on Venus

function calculateOnVenus(form) {
    var weight;

    if(form.elements["weight"].value == "" || isNaN(form.elements["weight"].value))
        weight = 0;
    else
        var weight = form.elements["weight"].value; 

    // parsing value to float
    var weigh = parseFloat(weight);

    weigh *= 0.91;
    document.getElementById("out").value = weigh.toFixed(2);
}// End function calculateOnVenus

// *****************************************************************************************************************

// Function to calculate weight on Earth

function calculateOnEarth(form) {
    var weight;

    if(form.elements["weight"].value == "" || isNaN(form.elements["weight"].value))
        weight = 0;
    else
        var weight = form.elements["weight"].value; 

    // parsing value to float
    var weigh = parseFloat(weight);

    weigh *= 1.00;
    document.getElementById("out").value = weigh.toFixed(2);
}// End function calculateOnEarth

// *****************************************************************************************************************

// Function to calculate weight on Mars

function calculateOnMars(form) {
    var weight;

    if(form.elements["weight"].value == "" || isNaN(form.elements["weight"].value))
        weight = 0;
    else
        var weight = form.elements["weight"].value;

    // parsing value to float
    var weigh = parseFloat(weight);

    weigh *= 0.38;
    document.getElementById("out").value = weigh.toFixed(2);
}// End function calculateOnMars

// *****************************************************************************************************************

// Function to calculate weight on Jupiter

function calculateOnJupiter(form) {
    var weight;

    if(form.elements["weight"].value == "" || isNaN(form.elements["weight"].value))
        weight = 0;
    else
        var weight = form.elements["weight"].value;

    // parsing value to float
    var weigh = parseFloat(weight);

    weigh *= 2.34;
    document.getElementById("out").value = weigh.toFixed(2);
}// End function calculateOnJupiter

// *****************************************************************************************************************

// Function to calculate weight on Saturn

function calculateOnSaturn(form) {
    var weight;

    if(form.elements["weight"].value == "" || isNaN(form.elements["weight"].value))
        weight = 0;
    else
        var weight = form.elements["weight"].value; 

    // parsing value to float
    var weigh = parseFloat(weight);

    weigh *= 1.06;
    document.getElementById("out").value = weigh.toFixed(2);
}// End function calculateOnSaturn

// *****************************************************************************************************************

// Function to calculate weight on Uranus

function calculateOnUranus(form) {
    var weight;

    if(form.elements["weight"].value == "" || isNaN(form.elements["weight"].value))
        weight = 0;
    else
        var weight = form.elements["weight"].value;

    // parsing value to float
    var weigh = parseFloat(weight);

    weigh *= 0.92;
    document.getElementById("out").value = weigh.toFixed(2);
}// End function calculateOnUranus

// *****************************************************************************************************************

// Function to calculate weight on Neptune

function calculateOnNeptune(form) {
    var weight;

    if(form.elements["weight"].value == "" || isNaN(form.elements["weight"].value))
        weight = 0;
    else
        var weight = form.elements["weight"].value;

    // parsing value to float
    var weigh = parseFloat(weight);

    weigh *= 1.19;
    document.getElementById("out").value = weigh.toFixed(2);
}// End function calculateOnNeptune

