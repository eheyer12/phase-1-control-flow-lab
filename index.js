function scuberGreetingForFeet(num){
  
  let result
  if (num <= 400) {
    result = `This one is on me!`;
    //console.log(result);
  }  
  else if (num > 400 && num <= 2000) {
    result = `That will be twenty bucks.`;
    //console.log(result);
  }
  else if (num > 2000 && num <= 2500) {
    result = `I will gladly take your thirty bucks.`;
    //console.log(result);
  }
  else {
    result = `No can do.`;
    //console.log(result);
  }
  return result;
}

function ternaryCheckCity(city){
  // Write your code here!
  let result
  if (city === "NYC"){
    result = "Ok, sounds good.";
  }
  else {
    result = "No go.";
  }
  return result;
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  let response
  switch (tip) {
    case `generous`:
      response = `Thank you so much.`;
      break;
    case `not as generous`:
      response = `Thank you.`;
      break;
    default:
      response = `Bye.`;
      break;
  }
  return response;
}