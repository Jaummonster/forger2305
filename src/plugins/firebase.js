import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCayyJ1DUBKQ7i_XtEFIJo4uZy_x6rR0ZA",
    authDomain: "forget-2305.firebaseapp.com",
    projectId: "forget-2305",
    storageBucket: "forget-2305.appspot.com",
    messagingSenderId: "232799979370",
    appId: "1:232799979370:web:0fd6f608511abfa83d8713"
  };

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()
const auth = firebase.auth()

const profileCollection = db.collection('profile')
const tasksCollection = db.collection('tasks')

export {
    db, auth, profileCollection, tasksCollection
}