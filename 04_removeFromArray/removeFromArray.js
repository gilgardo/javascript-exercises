const removeFromArray = function(arr,...args) {
   let lengthArgs =args.length;
   let lengthArr = arr.length;
   for(let i=0;i<lengthArr;i++){
    for(let j=0;j<lengthArgs;j++){
        if(arr[i] === args[j]){
            for(let k=i;k<lengthArr;k++){
                arr[k] = arr[k+1];
            }
            lengthArr--;
            i--;
        }
    }
   }
   return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
