import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDVGaANKwlP4pH_QOFalqKAV-auw-nnw-w",
  authDomain: "interviewtask-1c583.firebaseapp.com",
  projectId: "interviewtask-1c583",
  storageBucket: "interviewtask-1c583.appspot.com",
  messagingSenderId: "412778439249",
  appId: "1:412778439249:web:f57650a58c80182e76ce70",
  measurementId: "G-Q7M5N4DG2W",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
