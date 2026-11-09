const multiplyValue = (value :number, multiplier ?: number ) : number => {
   if(multiplier === 0){
    return 0;
   } else if(multiplier){
    return value*multiplier;
   } else{
    return value*2;
   }
} 

