import firebase from "firebase";
import "firebase/firestore";

export const fb = firebase.initializeApp({
  apiKey: "AIzaSyAf4vuAk97f3FiwHP9pGBl39liwa05H4jw",
  authDomain: "topicwhiz-b009d.firebaseapp.com",
  databaseURL: "https://topicwhiz-b009d.firebaseio.com",
  projectId: "topicwhiz-b009d",
  storageBucket: "topicwhiz-b009d.appspot.com",
  messagingSenderId: "510555088486"
});
export const fs = fb.firestore();

const settings = {
  timestampsInSnapshots: true
};

fs.settings(settings);
