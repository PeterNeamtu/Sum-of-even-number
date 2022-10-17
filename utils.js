function readInteger(promptMsg){
  // read the integer from a prompt;
  let nr = prompt(promptMsg);

  // check the integer value
  return checkInteger(nr);
}


function checkInteger(nr){
  if(
      nr === null ||                          // if cancel btn was pressed
      nr.length === 0 ||                      // if ok button was pressed without typing any cheracter
      nr.indexOf(' ') >= 0 ||                 // if there is a space in the input text
      nr.indexOf('.') >= 0 ||                 // if there is a dot
      (nr[0] === '0' && nr.length !== 1) ||   //
      isNaN(nr) === true                      // if the string was an un parsable number
    ){
    return false
  }

  nr = Number(nr);
  return nr;
}


function division(nr1, nr2){
  if(nr2 === 0){
    alert(msg);
    return false;
  }
  return nr1 / nr2;
}
