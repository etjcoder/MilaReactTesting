import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBLIYH4u8oHpIBkJO4SDh4ruYbhQuljCvo",
    authDomain: "milausers.firebaseapp.com",
    databaseURL: "https://milausers.firebaseio.com",
    projectId: "milausers",
    storageBucket: "milausers.appspot.com",
    messagingSenderId: "536577724256",
}

const fire = firebase.initializeApp(config);

export default fire;