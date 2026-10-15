// Import fungsi Firebase yang dibutuhkan
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

// Konfigurasi Firebase milikmu
const firebaseConfig = {
  apiKey: "AIzaSyALlt1ZzOpcWN6pV0fXRpz4l9ZsrTmFbGE",
  authDomain: "kai-mediska-ml.firebaseapp.com",
  databaseURL: "https://kai-mediska-ml-default-rtdb.asia-southeast1.firebasedatabase.app", // Ditambahkan agar langsung terhubung ke Realtime Database
  projectId: "kai-mediska-ml",
  storageBucket: "kai-mediska-ml.firebasestorage.app",
  messagingSenderId: "906645408238",
  appId: "1:906645408238:web:5e7edf6c237bd09523a6ff",
  measurementId: "G-B5XRZ2VL34"
};

// Inisialisasi Firebase & Database
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);