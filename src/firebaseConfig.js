import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getDatabase, ref, set,get ,update,remove } from "firebase/database";


const firebaseConfig = {
    apiKey: "AIzaSyA384BD-_EIFjOQCVHPT3s2stE49gJ9L7c",
    authDomain: "relia-mech-company.firebaseapp.com",
    databaseURL: "https://relia-mech-company-default-rtdb.firebaseio.com",
    projectId: "relia-mech-company",
    storageBucket: "relia-mech-company.appspot.com",
    messagingSenderId: "772578921047",
    appId: "1:772578921047:web:9f4d801d0c8c408dc97112"
};


export const app = initializeApp(firebaseConfig);

export function register(phonenumber,password){
    const dbb = getDatabase();
    set(ref(dbb, 'users/' + phonenumber), {
      useraccess:false,
      password:password
    });
    alert("Requested Successfully")
}

