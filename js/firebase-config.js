import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCHTaBXzJUdwRKtUNL99t1Uc6LXaRYuGZw",
  authDomain: "temp-e-humid.firebaseapp.com",
  databaseURL: "https://temp-e-humid-default-rtdb.firebaseio.com",
  projectId: "temp-e-humid",
  storageBucket: "temp-e-humid.firebasestorage.app",
  messagingSenderId: "839701424439",
  appId: "1:839701424439:web:cea4e8876b66c42060d2b2",
  measurementId: "G-HC0ZCE849X",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };
