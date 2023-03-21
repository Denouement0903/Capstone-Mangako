import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCW6a0RngH1tr7er22QvcPBL83V18mvkV8",
  authDomain: "mangako-deno.firebaseapp.com",
  projectId: "mangako-deno",
  storageBucket: "mangako-deno.appspot.com",
  messagingSenderId: "395959660421",
  appId: "1:395959660421:web:00c42a47b777eeb8a05eec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

createApp(App).use(store).use(router).mount('#app')
