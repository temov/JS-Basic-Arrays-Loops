



arr = [-5,5,25,8,11];

function sumMinMax(array){
   max = array[0];
   min = array[0];
   for(let i=0; i < array.length; i++){

    if (array[i] > max){
        max = array[i];
    } 
    console.log(max);
   
    if(array[i] < min){
      min = array[i];
  }
  console.log(min);

  
   }
   
  return max + min;
   
   
};

sumMinMax(arr);



