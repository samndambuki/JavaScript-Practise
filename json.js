const jsonString = '{"name" : "Sam","age":30,"city":"New York"}';
//JSON converts a string to an object
const parsedObject = JSON.parse(jsonString)


console.log(parsedObject.name)
console.log(parsedObject.age)
console.log(parsedObject.city)