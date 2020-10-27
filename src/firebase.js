import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCIOqf6Nr7N1TuQFGa1FUpUJnVpAJLSDrU",
  authDomain: "trailers-954a6.firebaseapp.com",
  databaseURL: "https://trailers-954a6.firebaseio.com",
  projectId: "trailers-954a6",
  storageBucket: "trailers-954a6.appspot.com",
  messagingSenderId: "381216901492",
  appId: "1:381216901492:web:36eadb96a99fed7d49c421",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
