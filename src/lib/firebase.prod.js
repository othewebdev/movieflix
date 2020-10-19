import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// we need to somehow seed the database


// we need a config here 



const config = {
    apiKey: "AIzaSyBB5rz3Y6iJ5-Vx7S9inoXQWJoC4Z5CiVU",
    authDomain: "movieflix-react.firebaseapp.com",
    databaseURL: "https://movieflix-react.firebaseio.com",
    projectId: "movieflix-react",
    storageBucket: "movieflix-react.appspot.com",
    messagingSenderId: "170140507557",
    appId: "1:170140507557:web:93a4703528a2d3dcb71c4c",
    measurementId: "G-YMFYNFVM7Q"
};

const firebase = Firebase.initializeApp(config);


export { firebase };