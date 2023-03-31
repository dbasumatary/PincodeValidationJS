//UC2 - PIN cannot contain alphabet or special characters at the beginning

const pinRegex = RegExp("^[0-9]{6}$");

function validatePIN(pin){
    if(pinRegex.test(pin))
        console.log(pin + " is a valid PIN.");
    else
        throw pin + " is an invalid PIN.";
}

try{
    validatePIN("123465");   //valid
    validatePIN("A47869");  //invalid - PIN cannot contain alphabet
}catch(e){
    console.error(e);
}