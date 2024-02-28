const findTheOldest = function(peaple) {
   let arrBirth = peaple.map((peaple)=>peaple.yearOfBirth);
   let arrDeath = peaple.map((peaple)=>peaple.yearOfDeath);
   let arrAge =[];
   let max =0;
   let maxPos;
   let dim = peaple.length;
   for(let i=0;i<dim;i++){
    if(arrDeath[i]!==undefined) 
    {arrAge[i] = arrDeath[i]-arrBirth[i];}
    else{
        arrAge[i] = new Date().getFullYear() - arrBirth[i];
    }
    if(arrAge[i]>max){
        max=arrAge[i];
        maxPos =i;
    }
   }
   return peaple[maxPos];

};

// Do not edit below this line
module.exports = findTheOldest;
