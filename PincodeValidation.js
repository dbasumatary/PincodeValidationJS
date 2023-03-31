//UC3 - PIN cannot contain alphabet or special characters at the end

const pinRegex = RegExp("^[0-9]{6}$");

function validatePIN(pin){
    if(pinRegex.test(pin))
        console.log(pin + " is a valid PIN.");
    else
        throw pin + " is an invalid PIN.";
}

try{
    validatePIN("123465");   //valid
    validatePIN("12346T");  //invalid - PIN cannot contain alphabet at the end
}catch(e){
    console.error(e);
}