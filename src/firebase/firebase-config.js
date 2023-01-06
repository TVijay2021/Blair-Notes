import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'
import { getStorage } from "firebase/storage";

// // original blair-notes-22
// const firebaseConfig = {
//     apiKey: "AIzaSyAPDmwJn_g935GltG7Uhu7tHlxZUFjJRTY",
//     authDomain: "blair-notes-22.firebaseapp.com",
//     projectId: "blair-notes-22",
//     storageBucket: "blair-notes-22.appspot.com",
//     messagingSenderId: "1022627463770", 
//     appId: "1:1022627463770:web:7f4b69754eb8adce208e63"
// };


// // BACK-UP #1
// const firebaseConfig = {
//     apiKey: "AIzaSyADtc1Q7rdgkaDI6I0reaUxjd662wjDBG4",
//     authDomain: "blair-notes-today.firebaseapp.com",
//     projectId: "blair-notes-today",
//     storageBucket: "blair-notes-today.appspot.com",
//     messagingSenderId: "281756726407",
//     appId: "1:281756726407:web:7853c241be2499116db422"
//   };

const firebaseConfig = {
  apiKey: "AIzaSyAw7Xwsk2E5fAOGPPSGyZYPSmzO1FCSASQ",
  authDomain: "blair-notes-backup2.firebaseapp.com",
  projectId: "blair-notes-backup2",
  storageBucket: "blair-notes-backup2.appspot.com",
  messagingSenderId: "826106190062",
  appId: "1:826106190062:web:5183d4ebbe4a7ed99d3bff"
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const db = getFirestore(app);