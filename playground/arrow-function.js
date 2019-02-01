var square = x => x * x;

console.log(square(9));

var user = {
    name: 'Antar',
    sayHi: () => {
        console.log(arguments); //outer function
        console.log(`Hi. I'm ${this.name}`);
    },
    sayHiAlt () {
        console.log(arguments); //current function
        console.log(`Hi. I'm ${this.name}`);
    }
};

user.sayHiAlt(1, 2);