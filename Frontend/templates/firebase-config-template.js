// Firebase configuration template
// Replace these placeholder values with your actual Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwOoQySK8xTSSVY-YBtUYkiRYoTy3ALQM",
  authDomain: "predictive-transaction.firebaseapp.com",
  projectId: "predictive-transaction",
  storageBucket: "predictive-transaction.firebasestorage.app",
  messagingSenderId: "163869180724",
  appId: "1:163869180724:web:2fb373b0ad286bfe005b61"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize services and make them globally available
const auth = firebase.auth();
const db = firebase.firestore();

console.log('Firebase initialized successfully');
console.log('Auth object:', auth);
console.log('Firestore object:', db);
