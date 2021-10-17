///////////////////////////// Function1

const sum = function (a, b) {
return a + b
}

///////////////////////////////////// Function2


const average = function (a, b) {
    return (a + b )/ 2
  };


///////////////////////////////////// Function3
  const findFactorial = (num) => {
    let fact = 1 ;
    for (let i= 1  ; i <= num ; i++ ){

      fact*= i ;
    }
    return fact
}  
/////////////////////////////////// Function4

const round = function (number) {

    return Math.round(number) ;
}
//////////////////////////////////// Function5

const toThePowerOf = function (base, exponent) {
  let power = Math.pow(base, exponent);
return power
};

//////////////////////////////////// Function6

const randomNumber = function () {
  return Math.random();
};

//////////////////////////////////// Function7
 
const oneOrZero = function () {

  return Math.random(Math.round());
};

//////////////////////////////////// Function8

const randomRange = function (number) {

  return Math.floor(Math.random() * number);

};

//////////////////////////////////// Function9


const includeOf = function (string, character) {

  return string.includes(character) ? true : false;
};

