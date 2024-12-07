import { initializeApp } from 'firebase/app';
import { getDatabase, connectDatabaseEmulator } from 'firebase/database';
import { ref, onValue } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDvy_CdmQ28oiBxnU2iW_A4jeFcNuNUTAo",
  authDomain: "sports-6fc6f.firebaseapp.com",
  databaseURL: "https://sports-6fc6f-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "sports-6fc6f",
  storageBucket: "sports-6fc6f.firebasestorage.app",
  messagingSenderId: "250505963624",
  appId: "1:250505963624:web:7506184ce93c0f637bf3dd",
  measurementId: "G-X0KK2JN87V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database with error handling
const database = getDatabase(app);

// Add error event listener
const dbRef = ref(database, '.info/connected');
onValue(dbRef, (snap) => {
  if (snap.val() === true) {
    console.log('Connected to Firebase Realtime Database');
  } else {
    console.log('Disconnected from Firebase Realtime Database');
  }
});

export { database };