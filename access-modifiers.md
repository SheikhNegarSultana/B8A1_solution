# Title : TypeScript access modifiers

## Introduction 

Basically Typescript modifiers control where the class properties and methods can be accessed from. In this post I will explain 4 modifiers along with examples.

## Body

Generally typescript has 4 access modifiers,
1. Public : default one, It can be access from anywhere.
2. Private : Can not be access and edit outside of its own class.
3. Protected : Can be access within its own class and its subclass.
4. ReadOnly : The value can not be changed.

Here are the code examples :

It uses all 4 modifiers in one "Employee" class, the sub-class "FullTime" will not be able to see and edit the private modifier "phone", but can see and edit the protected "id", and can see the readonly "workingHour" but can not edit.

```typescript
class Employee {
    constructor(
        public name : string,
        protected id : number,
        private phone : string,
        readonly workingHour : number
    ){}
}

class FullTime extends Employee{
    constructor(
         name : string,
         id : number,
         phone : string,
         workingHour : number,
         public salary: number
    ){
        super(name,id,phone,workingHour)
    }

    showInfo (): string {
        //! return `His phone number ${this.phone} ` 
        //! As it is private,so the sub-class FullTime can not access
        return ` He is  ${this.name}, his Id is ${this.id} and as full time employee his working Hour is ${this.workingHour} and he gets salary ${this.salary} ` 
    }
}
const e1 = new FullTime("Mila", 9090, "018923742146", 8, 40000)
//! e1.workingHour = 9 
//! Can not edit , as it is readonly , we can just see the value
```

## Conclusion
We use access modifiers to implement correctly on Encapsulation, Protected modifier is ideal for inheritance, private modifier to make sure safety and readonly modifiers for universal truth or the values that is constant. 