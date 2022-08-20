import { initializeApp } from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyAgXqE9bkwEb3GCcXnlKFvu897Xebmjrxk",
    authDomain: "itla-feed.firebaseapp.com",
    projectId: "itla-feed",
    storageBucket: "itla-feed.appspot.com",
    messagingSenderId: "732905635306",
    appId: "1:732905635306:web:25d43b021352bf55084693"
};

export const app = initializeApp(firebaseConfig);