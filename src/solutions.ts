const multiplyValue = (value :number, multiplier ?: number ) : number => {
   if(multiplier === 0){
    return 0;
   } else if(multiplier){
    return value*multiplier;
   } else{
    return value*2;
   }
} 

const processInput = ( value :  string | number |  boolean) : (string | number) =>{
    if(typeof(value) === 'string'){
        return `${ value.trim().toLocaleLowerCase()}`
    } else if(typeof(value) === 'number' ){
        return value*10
    } else{
        if(value){
            return "Active"
        } else{
            return "Inactive"
        }
    }

}
