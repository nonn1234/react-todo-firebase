import firebase from 'firebase'

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyB7egAJIdU9bQGgHIf2WUKoca3vhEun8SE",
    authDomain: "react-todo-3df02.firebaseapp.com",
    projectId: "react-todo-3df02",
    storageBucket: "react-todo-3df02.appspot.com",
    messagingSenderId: "419583165315",
    appId: "1:419583165315:web:1384e8097c85fe64db2cb6",
    measurementId: "G-M1SF5V095M"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase;