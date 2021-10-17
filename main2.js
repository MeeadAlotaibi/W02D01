////////////////////////////////////////////// Fonction1


 const addToArray = function (array, string) {
    array.push(string);
    return array
  };
  //  DONE :)

  ////////////////////////////////////////////// Fonction2

  const convertToString = function (array) {
    const str = array.join(' ');
    
    return str;
  };
  //  DONE :)

  ////////////////////////////////////////////// Fonction3

  const updateValue = function (array,index,value) {
    if (array.length <= index){
      return "there is no element to updated in this index" ;
    }else {
      array[index] = value ;
      return array
    }
  };
//  DONE :)
  
    
  
  
  ////////////////////////////////////////////// Fonction4
  
  
  const onlyString = function (array) {
    const str =[];
       for( let i = 0 ; i<= array.length ; i++){
       if (typeof array[i] === 'string'){
        str.push(array[i])
       }
   }
   return str  
  };
  //  DONE :)


  ////////////////////////////////////////////// Fonction5

    const users = [ ["Jane", "123456" ], ["admin", "abc123" ] ];
    
      const login = function (username, password) {
          for ( let i = 0 ;  i<users.length ; i++){
              if (  username == users[i][0] && password == users[i][1] ){
                return "Login Successful" ;
              }
                }
                return"Login Failed";
              }

              //  DONE :)

  ////////////////////////////////////////////// Fonction6

    const maximumNumber = function (numbers) {
     let  large = numbers[0]
      for (let i = 0 ; i <= numbers.length ; i++){
        if (large < numbers[i]){
          large = numbers[i] ;
        }
      }
      return large
    };
    //  DONE :)


  ////////////////////////////////////////////// Fonction7

  const reversString = function (string) {
     const splitsWord = string.split('');
     const newArray = splitsWord.reverse();
     const finalArray = newArray.join('');
     return finalArray;
  }

  //  DONE :)