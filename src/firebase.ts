import { initializeApp } from "firebase/app";


const firebaseConfig = {
	apiKey: "",
	authDomain: "vibe-fbdd9.firebaseapp.com",
	projectId: "vibe-fbdd9",
	storageBucket: "vibe-fbdd9.appspot.com",
	messagingSenderId: "524647248229",
	appId: "1:524647248229:web:6f32e02fe0a1c708cdf18c",
	measurementId: "G-ZRYLFVB07V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app
