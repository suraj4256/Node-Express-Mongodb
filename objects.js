const person = new Object();
person.name = "Suraj"
person.age = "23"
console.log(person);
console.log(person.name)

person.name = "sunil"
person.age = "23"
console.log(person)


const func = (a,b)=>{
    if (b !== "undefined"){
        b=8
    }
     return a*b
}
const x = func(9);
console.log(x)


function hello ( ){
console.log(1)
}
new hello;


