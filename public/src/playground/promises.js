const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('This is my resolved data');
    },3500);
});
console.log('before');
promise.then((data) => {
    console.log(data);
})
console.log('after');


const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('something went wrong');
    },3500);
});

promise1.then((data) => {
    console.log('1', data);
}).catch((error) => {
    console.log('error: ', error);
})

