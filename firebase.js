import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyCcj_VUj397h9xkhlwHKvEKVyMpqBNF9Ac",
    authDomain: "pantryz.firebaseapp.com",
    projectId: "pantryz",
    storageBucket: "pantryz.appspot.com",
    messagingSenderId: "922162231085",
    appId: "1:922162231085:web:0d8ac70ef98e21ee29c5a4",
    measurementId: "G-E6M2WB00D6"
  }

const app = initializeApp(firebaseConfig)
const firestore = getFirestore(app)

export { firestore }