/* JavaScript to validate form */

// function to validate form

function validateForm(form) {
    if(validateFirstName(form) && validateLastName(form) && validateEmail(form) && validateTextarea(form))
        return true;
    else 
        return false;
}// end function validateForm

// ****************************************************************************************************************

// function to validate first name

function validateFirstName(form) {
    let firstName = form.elements["first_name"];
    if(firstName.validity.valueMissing) {
        firstName.setCustomValidity("Please enter your first name");    // if First Name is empty
        return false;
    }
    else {
        firstName.setCustomValidity("");    // if First Name is not empty
        return true;
    }
}// end function validateFirstName

// ****************************************************************************************************************

// function to validate last name

function validateLastName(form) {
    let lastName = form.elements["last_name"];
    if(lastName.validity.valueMissing) {
        lastName.setCustomValidity("Please enter your last name");  // if Last Name is empty
        return false;
    }
    else {
        lastName.setCustomValidity(""); // if Last Name is not empty
        return true;
    }
}// end function validateLastName

// ****************************************************************************************************************

// function to validate email address

function validateEmail(form) {
    let email = form.elements["email"];
    if(email.validity.valueMissing) {
        email.setCustomValidity("Please enter your email address"); // if Email is not filled
        return false;
    }
    else if(email.validity.typeMismatch) {
        email.setCustomValidity("Email " + email.value + " is not in correct format");// if email does not match the format
        return false;
    }
    else {
        email.setCustomValidity("");    // if email is filled and it is in correct format
        return true;
    }
}// end function validateEmail

// ****************************************************************************************************************

// function to validate textarea

function validateTextarea(form) {
    let textArea = form.elements["suggestions"];
    if(textArea.validity.valueMissing) {
        textArea.setCustomValidity("Please give some suggestions"); // if textarea is empty
        return false;
    }
    else {
        textArea.setCustomValidity(""); // if textarea is not empty
        return true;
    }
}// end function validateTextarea