// object destructuring

const person = {
    name: 'Andrew',
    age: 26,
    location : {
        city: 'philadelphia',
        temp: 92
    }
}

// es6 destructuring
// assign values from person object to const name and age
// assigning default value Anonymous if name is missing then it will use that
const { name: firstname = 'Anonymous', age } = person; 
console.log(`${firstname} is ${age}.`);
// renaming temp to temperature
const { city, temp: temperature } = person.location;
if (city && temperature) {
    console.log(`It's ${temperature} in ${city}`)
}

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const { title, author } = book;
const { name: publisherName = 'Self Published' } = book.publisher;

console.log(publisherName);

// array destructuring

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
//console.log(`you are in ${address[1]} ${address[2]}.`)
// array string is assigned using [] instead of {}
const  [street, city_a, state, zip] = address;
// string is assigned by position, if you want to skip a name just leave as comma
// assign default value.. so if const address = [] blank array, it will still print New York for variable State_1
const [,,state_1='New York'] = address;

console.log(`you are in ${city_a} ${state}.`)


