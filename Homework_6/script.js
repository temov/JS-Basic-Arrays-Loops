



function firstLastNames(array1,array2){
   let newArray1 = [];
   let newArray2 = [];
   let fullName = [];
   let counter=1;
   for(let i=0; i < array1.length; i++){
        
        newArray1.push(`${counter}.${array1[i]}`);
        newArray2.push(`${array2[i]}`);
        
        fullName.push(`${newArray1[i]} ${newArray2[i]}`);
        counter ++;
   }
   console.log(fullName);
  return fullName;
  
};

firstNames = ["Tode","Mice","Dimitar","Bogdan","Ljupce"];
lastNames = ["Temov","Karajov","Bogdanov","Trencev","Joldasev"];
firstLastNames(firstNames,lastNames);



