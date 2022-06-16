import { initializeApp } from 'firebase/app';

const FirebaseConfig = {
    apiKey: "AIzaSyDe9pSaOqDgvCEYLWnE5HBXfx3pvNH8bkQ",
    authDomain: "test-healer.firebaseapp.com",
    projectId: "test-healer",
    storageBucket: "test-healer.appspot.com",
    messagingSenderId: "1053335400126",
    appId: "1:1053335400126:web:2eb2dca046823389d5b8ef"
}

const firebase = initializeApp(FirebaseConfig);

export default firebase;