import firebase from 'firebase';

const app = firebase.initializeApp({
    apiKey: "AIzaSyBRGEyqeMRWIDJKswLCproyleYjSe6QEKA",
    authDomain: "todo-1c583.firebaseapp.com",
    databaseURL: "https://todo-1c583.firebaseio.com",
    storageBucket: "todo-1c583.appspot.com",
    messagingSenderId: "1050762502868"
});

export default app;