import fire from "firebase/app";
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCV1u2W4zeYLsoID0MoUvaerywlFeZoMtY",
    authDomain: "swargme-f778e.firebaseapp.com",
    projectId: "swargme-f778e",
    storageBucket: "swargme-f778e.appspot.com",
    messagingSenderId: "259672865009",
    appId: "1:259672865009:web:f2645b9d05f8bd98c85150",
    measurementId: "G-XH6QGZFHJC"
};

  fire.initializeApp(firebaseConfig);
  
  export const auth = fire.auth();
  export const db = fire.firestore();
  export default fire;