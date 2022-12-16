



test = ["Hello","there","students","of","SEDC"];

function bigString(array){
  let result = '';
   for(let i=0; i < array.length; i++){

    result += array[i]+" ";
   
   }
  
   console.log(result);
   return result;
   
};

bigString(test);



