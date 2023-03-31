//UC4 - PIN can contain a single space after 3 digits

const pinRegex = RegExp("^[0-9]{3}\\s{0,1}[0-9]{3}$");

function validatePIN(pin){
    if(pinRegex.test(pin))
        console.log(pin + " is a valid PIN.");
    else
        throw pin + " is an invalid PIN.";
}

try{
    validatePIN("123465");    //valid
    validatePIN("123 464");   //valid - PIN can contain a space in between
    validatePIN("123  464");  //invalid - PIN cannot contain more than one space
}catch(e){
    console.error(e);
}