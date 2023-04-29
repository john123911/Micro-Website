import {initializeApp} from "firebase/app"
import { 
    getDatabase,ref, onValue
} from "firebase/database";
// ----------FIREBASE-------------
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

const app = initializeApp(firebaseConfig)

const db = getDatabase(app);

const waterLevel = ref(db, 'waterLevel');
onValue(waterLevel, (snapshot) => {
  const data = snapshot.val();
  const water_level = document.getElementById('water-level');
  water_level.innerText = data;
});

const waterFlow = ref(db, 'waterFlow');
onValue(waterFlow, (snapshot) => {
  const data = snapshot.val();
  const element = document.getElementById('water-flow');
  element.innerText = data;
});

const rainInt = ref(db, 'rainInt');
onValue(rainInt, (snapshot) => {
  const data = snapshot.val();
  const element = document.getElementById('rain-intensity');
  element.innerText = data;
});



// SIDEBAR TOGGLE

var sidebarOpen = false;
var sidebar = document.getElementById("sidebar");

function openSidebar() {
    if (!sidebarOpen) {
        sidebar.classList.add("sidebar-responsive");
        sidebarOpen = true;
    }   
}

function closeSidebar() {
    if(sidebarOpen){
        sidebar.classList.remove("sidebar-responsive");
        sidebarOpen = false;
    }
}


