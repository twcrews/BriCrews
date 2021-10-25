import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_K1UrcQbwSk2hisjnNRsXrAL_umh27_0",
  authDomain: "bri-crews.firebaseapp.com",
  projectId: "bri-crews",
  storageBucket: "bri-crews.appspot.com",
  messagingSenderId: "485748810038",
  appId: "1:485748810038:web:2b25ffc6c20d970d9c9397",
  measurementId: "G-K1B0QZCHG5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
