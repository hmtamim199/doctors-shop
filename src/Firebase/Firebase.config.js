// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkrZhPsBIpSpCRMW_89TLByXypfnMTDwE",
  authDomain: "doctors-client-29d0c.firebaseapp.com",
  projectId: "doctors-client-29d0c",
  storageBucket: "doctors-client-29d0c.appspot.com",
  messagingSenderId: "919757345430",
  appId: "1:919757345430:web:29efdf33baaab8cec8e8b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;