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


const formatCoordinate = (  [latitude, longitude, locationName] : readonly  [number, number, string]) : string =>{
    return `Location: ${locationName} (${latitude}, ${longitude})`
}

const concatenateArrays = <T> (...arrays: T[][]) : T[] =>{
    let concat : T[] = []
    for(let i of [...arrays]){
        concat.push(...i);
    }
    return concat
} 


interface Course {
    title : string,
    students : number,
    isPublished : boolean
}


const getPopularCourses = ( courses : Course[], minStudents: number ) : Course[]  => {
    let course : Course[] = []

     for( let c in courses){
        if(courses[c].isPublished && courses[c].students >= minStudents){
            course.push(courses[c])
        }
    }
    return [...course]
} 


const pluckValues = <T, K extends keyof T>(items: T[], key: K) : (T[K][]) =>{
 let p_v : T[K][] = [];
 for( let i of items){
    p_v.push(i[key])
 }
 return p_v
}


class Employee {

   constructor(protected name: string, private baseSalary: number){}

   getDetails() : string{
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`
   } 
} 

class Manager extends Employee{
    constructor( 
        name: string,  
        baseSalary: number,
        private department : string ){
    super(name , baseSalary);
    }
    getRoleInfo() : string {
        return `Manager of ${this.department}: ${this.name}`
    } 
    
} 
