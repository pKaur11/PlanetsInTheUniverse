/* JavaSript for resizing the width and height of planets' images */

// Function to increase the width and height of image

function increaseWidth(obj) {
    if(screen.width >= 601 && screen.width <= 768) {      // For tablet view
        obj.style.width = "185px";
        obj.style.height = "190px";
    }
    else {
        obj.style.width = "235px";  
        obj.style.height = "220px";
    }

}// end function increaseWidth

// ********************************************************************************

// Function to decrease the width and height of image

function originalWidth(obj) {
    if(screen.width >= 601 && screen.width <= 768) {    // For tablet view
        obj.style.width = "160px";
        obj.style.height = "170px";
    }
    else {
        obj.style.width = "200px"; 
        obj.style.height = "200px";
    }  
}// end function originalWidth
