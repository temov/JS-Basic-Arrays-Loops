



function firstLastNames(array1,array2){
   let fullName = [];
   let counter=1;
   for(let i=0; i < array1.length; i++){
        
        fullName.push(`${counter}.${array1[i]} ${array2[i]}`);
        counter ++;
   }
   console.log(fullName);
  return fullName;
  
};

firstNames = ["Tode","Mice","Dimitar","Bogdan","Ljupce"];
lastNames = ["Temov","Karajov","Bogdanov","Trencev","Joldasev"];
firstLastNames(firstNames,lastNames);



