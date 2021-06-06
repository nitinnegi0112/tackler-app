import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyB74WTEE1V3AUwXC-jPbAXfSfg5fkJKuzM",
  authDomain: "tackler-2253f.firebaseapp.com",
  projectId: "tackler-2253f",
  storageBucket: "tackler-2253f.appspot.com",
  messagingSenderId: "311999545982",
  appId: "1:311999545982:web:403dc65a56783d95978e2f",
  measurementId: "G-97W4L00T4H"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;