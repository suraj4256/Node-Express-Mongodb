// . ----------Calculate the Total Age of People Above 30
// Array:
// const people = [
//     { name: "John", age: 25 },
//     { name: "Jane", age: 35 },
//     { name: "Mark", age: 40 },
//     { name: "Lucy", age: 29 },
// ];
// const total = people.filter(ele=>ele.age>30).map(ele=>ele.age).reduce((agg,curr)=>agg+curr)
// console.log(total)


// --------------Find Names of All Students Who Scored Above 80
// Array:
// const students = [
//     { name: "Alice", score: 70 },
//     { name: "Bob", score: 85 },
//     { name: "Charlie", score: 90 },
//     { name: "David", score: 60 },
// ];
// const names = students.filter(ele=>ele.score>80).map(ele=>ele.name)
// console.log(names)


// --------------Count the Number of Items in Stock
// Array:
// const products = [
//     { name: "Laptop", price: 1000, inStock: true },
//     { name: "Mouse", price: 50, inStock: false },
//     { name: "Keyboard", price: 70, inStock: true },
//     { name: "Monitor", price: 300, inStock: false },
// ]
// const itemsNumber = products.filter(ele=>ele.inStock===false).length
// console.log(itemsNumber)


// ----------- Find the Average Salary of Employees
// const employees = [
//     { name: "A", salary: 5000 },
//     { name: "B", salary: 7000 },
//     { name: "C", salary: 6000 },
// ];
// const average = employees.map(ele=>ele.salary).reduce((agg,curr)=>agg+curr)/employees.length;
// console.log(average)



// ----------Get the Names of People with Odd Ages
// const people = [
//     { name: "Tom", age: 25 },
//     { name: "Jerry", age: 22 },
//     { name: "Spike", age: 35 },
// ];
// const names = people.filter(ele=>ele.age%2 != 0).map(ele=>ele.age)
// console.log(names)



// -----------Find the Most Expensive Product

// const products = [
//     { name: "Table", price: 200 },
//     { name: "Chair", price: 15000 },
//     { name: "Couch", price: 1800 },
//     { name: "Bed", price: 1000 },
// ];
// const maxPrice = products.map(ele=>ele.price).reduce((agg,curr)=>agg<curr?agg=curr:agg)
// console.log(maxPrice)



//------------ Group Users by Gender

// const users = [
//     { name: "Alice", gender: "Female" },
//     { name: "Bob", gender: "Male" },
//     { name: "Cathy", gender: "Female" },
//     { name: "Dan", gender: "Male" },
// ];

// const maleUser = users.filter(ele=>ele.gender==="Male")
// console.log(maleUser)

// const femaleUser = users.filter(ele=>ele.gender==="Female")
// console.log(femaleUser)



// Create a List of Items and Their Prices (increased by 10%)

// const items = [
//     { name: "Book", price: 100 },
//     { name: "Pen", price: 20 },
//     { name: "Pencil", price: 10 },
// ];
// const increasedPrices = items.map(ele=>ele.price*(11/10))
// console.log(increasedPrices)


// Find Total Price of Items with Quantity Above 2

// const cart = [
//     { name: "Shoes", price: 500, quantity: 1 },
//     { name: "Shirt", price: 300, quantity: 3 },
//     { name: "Pants", price: 800, quantity: 2 },
// ];
// const total = cart.filter(ele=>ele.quantity>2).map(ele=>ele.price).reduce((agg,curr)=>agg+curr,0)
// console.log(total)



//--------------------- Check if All Students Passed
// Array:
const students = [
    { name: "A", marks: 45 },
    { name: "B", marks: 35 },
    { name: "C", marks: 50 },
];

const passedStudents = students.filter(ele=>ele.marks>35).length!=students.length?"false":"true"
console.log(passedStudents)


