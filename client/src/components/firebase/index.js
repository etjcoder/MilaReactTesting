import firebase from 'firebase/app'
import 'firebase/storage';

  var firebaseConfig = {
    apiKey: "AIzaSyDIqsS254Jmjlotsn1eOV_WABCMg4F8eTo",
    authDomain: "milaupload.firebaseapp.com",
    databaseURL: "https://milaupload.firebaseio.com",
    projectId: "milaupload",
    storageBucket: "milaupload.appspot.com",
    messagingSenderId: "761321918661",
    appId: "1:761321918661:web:bc2e7b249949eb929520ac"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const storage = firebase.storage();

  export {
      storage, firebase as default
  }