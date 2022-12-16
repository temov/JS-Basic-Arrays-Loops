

// function sumOfFive(array){
//    let sum = 0;

//    for(let i=0; i < array.length; i++){

//       sum+=array[i];
//    }
//    console.log(sum);
//    return sum;

// };


// sumOfFive([2,5,9,1,12]);



function validateNumber(array) {

  for (let i = 0; i < array.length; i++) {

    if (typeof(array[i]) === 'number') {

      let result = array[i];

      console.log(result);

    } else {

      console.log("Error");
    }

  }

};
test = [1, 2, 5, 'string', ''];
validateNumber(test);



