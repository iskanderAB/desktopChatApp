import firebase from "firebase";
import 'firebase/firestore';

const  firebaseConfig = {
    apiKey: "AIzaSyDUaBT4-32ZSRL7j5IF7RBGnDb2Ud_Z60o",
    authDomain: "electron-chat-1cfef.firebaseapp.com",
    projectId: "electron-chat-1cfef",
    storageBucket: "electron-chat-1cfef.appspot.com",
    messagingSenderId: "785859691456",
    appId: "1:785859691456:web:40955c50855d68de4dbe25",
    measurementId: "G-T6VVW9DF23"
};

export default firebase.initializeApp(firebaseConfig).firestore();
