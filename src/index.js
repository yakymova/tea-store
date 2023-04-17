import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import state from './data/data.js';
import { BrowserRouter } from 'react-router-dom';
import store from "./Redux/redux-store";
import { Provider } from "react-redux";
// import * as firebase from 'firebase';
// import { initializeApp } from "firebase/app";
// import { getFirestore } from 'firebase/firestore/lite';

// const firebaseConfig = {
//   apiKey: "AIzaSyD271rie7u8bbNWjrmQybmDOu0X8k18W_M",
//   authDomain: "tea-store-2bb01.firebaseapp.com",
//   databaseURL: "https://tea-store-2bb01-default-rtdb.europe-west1.firebasedatabase.app",
//   projectId: "tea-store-2bb01",
//   storageBucket: "tea-store-2bb01.appspot.com",
//   messagingSenderId: "143172985745",
//   appId: "1:143172985745:web:876a083c2b1310741f7030"
// }

// const firebaseApp = initializeApp(firebaseConfig);
// const db = getFirestore(firebaseApp);

// firebase.initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename='/tea-store'>
    <Provider store={store}>
      <App state={state} />
    </Provider>
  </BrowserRouter>
);
