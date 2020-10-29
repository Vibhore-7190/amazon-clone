import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAIdgx71JdzsHYCQIEMl5vPMi9XBdGtN4Q",
    authDomain: "amz-clone-52526.firebaseapp.com",
    databaseURL: "https://amz-clone-52526.firebaseio.com",
    projectId: "amz-clone-52526",
    storageBucket: "amz-clone-52526.appspot.com",
    messagingSenderId: "155382277505",
    appId: "1:155382277505:web:541aafe5de7762c45c3480",
    measurementId: "G-DR9FQDEXYY"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export { db, auth };  