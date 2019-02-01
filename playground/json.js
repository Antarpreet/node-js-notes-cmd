// var obj = {
//     name: 'Antarpreet'
// };
// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

var personString = '{"name": "Antar"}';
console.log(JSON.parse(personString).name);