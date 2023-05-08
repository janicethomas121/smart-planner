const firebase = require('firebase');

const firebaseConfig = {
    apiKey: "AIzaSyC-ZgVdZbBNe1pWOYMevMKlGOuSP0IkmtI",
    authDomain: "smart-planner-11b83.firebaseapp.com",
    databaseURL: "https://smart-planner-11b83-default-rtdb.firebaseio.com",
    projectId: "smart-planner-11b83",
    storageBucket: "smart-planner-11b83.appspot.com",
    messagingSenderId: "125716698291",
    appId: "1:125716698291:web:30eb4816403a66800bccc6",
    measurementId: "G-XP6LY1ZJKJ"
  };

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const New = db.collection("New");
module.exports = New;

const http = require('http')
const fs = require('fs')
const EventEmitter = require('events');
const emitter = new EventEmitter();

fs.readFile('./index.html', function() {
    console.log("reading file...");
});


/*
emitter.on('messageLogged', function(){
    console.log('Listener called')
});

emitter.emit('messageLogged');


let myTasks;
let storageArray = new Array (24);
let schedule1 = []; //user inputs
let schedule2 = []; //optimized
*/
const jquery = require('jquery');
// upload JavaScript library 'MomentJS' for easier displaying of time and date
const moment = require('moment');





