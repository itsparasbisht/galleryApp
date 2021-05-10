import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyACjVyybok2oHxXbr4kDtg4WzIdWddYihM",
    authDomain: "my-gallery-app-5e3ca.firebaseapp.com",
    projectId: "my-gallery-app-5e3ca",
    storageBucket: "my-gallery-app-5e3ca.appspot.com",
    messagingSenderId: "113656964377",
    appId: "1:113656964377:web:f27233a06e17f4435d1188",
    measurementId: "G-3G32VPK7MD"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()
const storage = firebase.storage()
const timeStamp = firebase.firestore.FieldValue.serverTimestamp()

export {db, storage, timeStamp}
