
import { initializeApp } from "firebase/app";
import { getDatabase }   from 'firebase/database';
//import "firebase/database";

// Firebase configuration
const firebaseConfig = {
  apiKey:            "AIzaSyAGi4yGZFyMw-pSJMUJxVIEGIZNt07IQ3g",
  authDomain:        "sp-calcs.firebaseapp.com",
  databaseURL:       "https://sp-calcs-default-rtdb.firebaseio.com",
  projectId:         "sp-calcs",
  storageBucket:     "sp-calcs.appspot.com",
  messagingSenderId: "428325402453",
  appId:             "1:428325402453:web:387c3bd3c4ed2fd87be1dc",
};

const app = initializeApp(firebaseConfig);
const db  = getDatabase(app);

export default db;