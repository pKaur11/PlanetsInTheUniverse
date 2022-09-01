/* JavaScript for Planets Game */

// global variables
var myInterval;     // variable to store value of interval for repeating loop
var maxIteration;   // variable to store value of maximum iteration
var counter;        // variable to count iterations
var div_counter;    // variable for div counter
// end global variable declaration

// **************************************************************************************************

// function to change background color of planets

function changeColor() {

    // Message for fact about planet
    var fact = [
        "Mercury is the second-densest planet in the solar system.", 
        "Venus is made of a central iron core, rocky mantle and silicate crust.",
        "Earth is the largest terrestrial planet.", 
        "Mars is home to the tallest mountain in the solar system.", 
        "Jupiter has the shortest day of all the planets.", 
        "Saturn has the most extensive rings in the solar system.", 
        "Uranus is often referred to as an “ice giant” planet.",
        "Neptune has the strongest winds in the solar system."    
    ];


    if(counter >= maxIteration) {
        clearInterval(myInterval);  // if counter is more than maxIteration, clear the interval
    }
    else {
        var all_divs = document.querySelectorAll("div[id*='div_']");    // collect objects having id values starting with div_
        var color1 = "black";
        var color2 = "yellow";

        for(let i=0; i<all_divs.length; i++) {            
            if(i != div_counter) {
                all_divs[i].style.backgroundColor = color1;
            }
            else {
                all_divs[i].style.backgroundColor = color2;   // if i is equal to div_counter, change bg color to color2             
            }
        }

        counter++;  // increasing counter
        var count = div_counter++;  // increasing div_counter and assigning its value to count variable

        if(counter == maxIteration) {

            let obj1 = document.getElementById("msg");
            
            for(let j=0; j<fact.length; j++) {
                if(j == count) {
                    var text1 = fact[j]; 
                    break;
                } 
            }
                
            obj1.textContent = text1;
            obj1.style.color = "green";
            if(screen.width <= 600) {
                obj1.style.paddingTop = "12px";
                obj1.style.paddingBottom = "2px";
                obj1.style.fontWeight = "normal";
            }
            else {
                obj1.style.fontWeight = "bold";            
            }

            let obj2 = document.getElementById("button");
            obj2.value = "Play Again?";
            obj2.disabled = false;
        }

        if(div_counter >= all_divs.length)
            div_counter=0;      // reset div_counter if it is more than the number of divs
    }
}// end function changeColor

// *************************************************************************************************

// Function to start loop for game 

function startGame() {

    let objt = document.getElementById("msg");
    objt.textContent = "";
    if(screen.width <= 600) {
        objt.style.paddingBottom = "48px";
    }
    
    let obj = document.getElementById("button");
    obj.value = "Running...";
    obj.disabled = true;

    maxIteration = Math.ceil(Math.random()*20);
    maxIteration += 10;    

    // initialize counter and div_counter to zero
    counter = 0;
    div_counter = 0;

    myInterval = setInterval(changeColor,300);
}// end function startGame