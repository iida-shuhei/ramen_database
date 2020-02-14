import firebase from "@firebase/app"
import "@firebase/auth";
import store from "./store";

  const config = {
    apiKey: "AIzaSyAAUjQvAbxhvCxdqmZnNhgu0RWC5YazEJU",
    authDomain: "ramen-book.firebaseapp.com",
    databaseURL: "https://ramen-book.firebaseio.com",
    projectId: "ramen-book",
    storageBucket: "ramen-book.appspot.com",
    messagingSenderId: "110062023888",
    appId: "1:110062023888:web:a04f3ed93264f5f6739ad5",
    measurementId: "G-2WNYSXZKR7"
  };

  export default {
    init(){
        firebase.initializeApp(config);
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
    },
    login(){
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
    },
    logout(){
        firebase.auth().signOut()
    },
    onAuth(){
        firebase.auth().onAuthStateChanged( user => {
            user = user ? user : {};
            store.commit('onAuthStateChanged', user);
            store.commit('onUserStatusChanged', user.uid ? true : false );
        })
    }
};