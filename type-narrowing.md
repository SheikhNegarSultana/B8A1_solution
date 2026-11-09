# Title : Type Narrowing

## Introduction 
In TypeScript, a variable can hold more than one type of value. It is called Union type. (For Example, let a : string | number , here a can be string or it also can be number). But in code , Sometimes we must need to know the exact type of the variable to solve problems. To solve this problem, we use "Type Narrowing". It finds the specific type of a value. In this post I will discuss about 3 ways to narrow a type.

## Body
1. Narrowing with "typeof" -> Checks the basic types like string, number, boolean

```typescript

const password = (pass : string | number) =>{
   //! return pass.length
   //! It does not know what type the "pass" is

   if(typeof(pass) === "string"){ // Narrowing Down
    return pass.length
   } else {
    return pass
   }
}

```
2. Narrowing with "instanceof" -> checks if the object belongs to the class

```typescript

const showDate = (d : Date| string) =>{
    //! return d.toISOString()
    // ! It could be String 

    if(d instanceof Date){  // Narrowing Down
        return `${d.toISOString()}` 
    }

    const d_date = new Date(d)
    return `${d_date.toISOString()}`
}

```

3. Narrowing with "in" operator -> whether a property exists in an object

```typescript
type Cat = {meow : () => void}
type Cow = {moo : () => void}

const animal = (sound : Cat | Cow) =>{
    //! sound.meow()
    //! it could be moo()

    if("meow" in sound){ // Narrowing Down
        return sound.meow()
    }
    else return sound.moo()
}

```

## Conclusion

It keeps our code safe without using "any" or type assertions. It figures out the exact type, keeps our code safe and gives full autocomplete along the way. TypeScript uses these checks to narrow types, so errors are caught before the code runs. 
