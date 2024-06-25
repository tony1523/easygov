import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAaF-Xo7XPmIUzkNN0t-q0bjDUst8jPAsU",
  authDomain: "easygovv.firebaseapp.com",
  projectId: "easygovv",
  storageBucket: "easygovv.appspot.com",
  messagingSenderId: "651787116306",
  appId: "1:651787116306:web:ced947474910c801715dcb",
  measurementId: "G-TMF5JLETC5"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);