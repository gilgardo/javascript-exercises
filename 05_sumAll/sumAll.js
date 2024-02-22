const sumAll = function(a,b) {
   if(a<0 || b<0){
    return "ERROR";
   }
   if (typeof(a)!="number"){
    return "ERROR";
   }
   if (typeof(b)!="number"){
    return "ERROR";
   }
   let sum = 0;
   let i = Math.max(a,b);
   let j = Math.min(a,b);
   for(j;j<=i;j++){
    sum+=j;
   }
   return sum;
};

// Do not edit below this line
module.exports = sumAll;
