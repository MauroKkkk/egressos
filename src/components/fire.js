import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyBz4Atv2iDwz93P-DoB6mB6J5ZCdqgXh9c",
    authDomain: "pivotal-cistern-364620.firebaseapp.com",
    projectId: "pivotal-cistern-364620",
    storageBucket: "pivotal-cistern-364620.appspot.com",
    messagingSenderId: "19434339377",
    appId: "1:19434339377:web:1c43427c05c498c8706910"
};

const fire = initializeApp(firebaseConfig);
export default fire;