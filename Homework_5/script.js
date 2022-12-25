



arr = [-5,5,25,8,11];

function sumMinMax(array){
   let max = array[0];
   let min = array[0];
   for(let i=0; i < array.length; i++){

    if (array[i] > max){
        max = array[i];
    } 
   
    if(array[i] < min){
      min = array[i];
  }
  

  
   }
   let sum = max + min;
   console.log(max,min);
   console.log(`The sum of max + min is: ${sum}`)
  return sum;
   
   
};

sumMinMax(arr);



