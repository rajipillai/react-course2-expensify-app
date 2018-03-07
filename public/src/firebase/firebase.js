import * as firebase from 'firebase';


const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER
  };
  
  firebase.initializeApp(config);

  const database = firebase.database();
 
  export { firebase, database as default };
 
 /*  //Child removed event will fire when a data is deleted
  database.ref('expenses').on('child_removed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
  });

 //Child changed event will fire when a data is changed
 database.ref('expenses').on('child_changed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
  });


  //Child Added event will fire when a data is Added
 database.ref('expenses').on('child_added', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
  });

  /* database.ref('expenses')
  .once('value')
  .then((snapshot) => {
    const expenses = [];
    snapshot.forEach((childSnapshot) => {
        expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
        });
    });

    console.log(expenses);
  }); */

  /* database.ref().on('value', (snapshot) => {
    const expenses = [];
    snapshot.forEach((childSnapshot) => {
        expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
        });
    });

    console.log(expenses);
}) */



/* 
  database.ref('expenses').push({
    description: 'Rent',
    note: '',
    amount: 109500,
    createdAt: 976123498763
  });
  
  */
  
//firebase does not support array
//push will add record to notes node by creating a random key

// database.ref('notes').push({
//     title: 'Course Topics',
//     body: 'React Native, Angular, Python'
// })

// update notes
// database.ref('notes/-L5kXl-gWzOrY7Fi44VC').update({
//     body: 'Buy Food'
// })

// remove notes
//database.ref('notes/-L5kXl-gWzOrY7Fi44VC').remove();


/*   database.ref().set({
      name: 'Rajesh Pillai',
      age: 26,
      stressLevel: 6,
      job: {
            title: 'Software Engineer',
            company: 'Google'
      },
      isSingle: false,
      location: {
          city: 'New jersey',
          country: 'United States'
      }
  }).then(() => {
      console.log('Data is saved');
  }).catch((e) => {
    console.log('This failed', e)
  }); */


/*  database.ref('isSingle').remove()
 .then(() => {
    console.log('Data removed');
}).catch((e) => {
  console.log('Remove failed', e)
});;
 */
/* database.ref('isSingle').set(null)
.then(() => {
   console.log('Data removed');
}).catch((e) => {
 console.log('Remove failed', e)
}); */

/* database.ref().update({
    name: 'mike',
    age: 29,
    job: 'Software Developer',
    isSingle: null,
    'location/city': 'Boston'
}); */

/* database.ref().update({
   stressLevel: 9,
    'job/company': 'Amazon',
    'location/city': 'Seattle'
}); */

//fetch data once
/* database.ref('location/city')
    .once('value')
    .then((snapshot) => {
        const val = snapshot.val();
        console.log('Val ', val )
    })
    .catch((e) => {
        console.log('Error fetching data', e);
    });
 */
// use on to get data and when it changes
// setting onValueChange to unsubscribe by changing this value
/* const onValueChange = database.ref().on('value', (snapshot) => {
    console.log(snapshot.val());
    const val = snapshot.val();
    console.log(`${val.name} is a ${val.job.title} at ${val.location.city}`);
    
}, (e) => {
    console.log('Error with data fetching', e);
}); */

/* setTimeout(() => {
    database.ref('age').set(31);
}, 3500);

setTimeout(() => {
    database.ref().off(onValueChange);
}, 7000);

setTimeout(() => {
    database.ref('age').set(32);
}, 10500); */ 
