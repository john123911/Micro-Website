import {initializeApp} from './firebase/app'
const firebaseConfig = {
	apiKey: "AIzaSyAs_aA90RCE_mGD3KlBDs4G0MkSorGS2FA",
	authDomain: "micro-realtimedatabase.firebaseapp.com",
	databaseURL: "https://micro-realtimedatabase-default-rtdb.asia-southeast1.firebasedatabase.app",
	projectId: "micro-realtimedatabase",
	storageBucket: "micro-realtimedatabase.appspot.com",
	messagingSenderId: "711979305578",
	appId: "1:711979305578:web:0b7f4c01fe2091f6e99813",
	measurementId: "G-P9NDH3FFXV"
  };

initializeApp(firebaseConfig);

const database = firebase.database();

const dataRef = database.ref();
dataRef.on('value', (snapshot) => {
  const data = snapshot.val().LDRValue;
  const element = document.getElementById('water-level');
	element.innerText = data;
  
});

