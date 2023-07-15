//when we normally replace it will valid for only one occurrence but using regex we can make it creative
// Regular expressions (regex) are a powerful tool for pattern matching and manipulating strings in JavaScript
//it give us the flexibility to search and handle a lot of operations with string.
let message = 'Masum is a very very nice very nice very very boy';
let myregex = /very/g
console.log(message.replace(myregex, 'noty'));




let str = "hello world";
let regex = /hello/; // Matches the string "hello"
console.log(regex.test(str)); // Output: true


let regex2 = /^hello/; // Matches "hello" at the beginning of a string
let str2 = "hello universe";
console.log(regex2.test(str2)); // Output: true


let regex3 = /[aeiou]/; // Matches any vowel character
let str3 = "hello there";
console.log(regex2.test(str3)); // Output: false


let regex4 = /go+d/; // Matches "good", "goodd", "goood", etc.
let str4 = "good, goodd, goood";
console.log(str4.match(regex4)); // Output: ["good", "goodd", "goood"]


let regex5 = /\./; // Matches a literal dot character
let str5 = "The sentence ends with a period.";
console.log(regex5.test(str5)); // Output: true