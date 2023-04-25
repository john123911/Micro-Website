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
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

$(document).ready(function(){s
    const database = firebase.database();
	var firebaseRef = firebase.database().ref().child("LDRValue");
	document.getElementById("water-level").innerHTML = LDRValue;
	//var Led1Status;
	const ldrData;

	database.ref().on("value", function(snap){
		// Led1Status = snap.val().Led1Status;

		// if(Led1Status == "1"){    // check from the firebase
		// 	//$(".Light1Status").text("The light is off");
		// 	document.getElementById("unact").style.display = "none";
		// 	document.getElementById("act").style.display = "block";
		// } else {
		// 	//$(".Light1Status").text("The light is on");
		// 	document.getElementById("unact").style.display = "block";
		// 	document.getElementById("act").style.display = "none";
		// }
	});

	

    // $(".toggle-btn").click(function(){
	// 	var firebaseRef = firebase.database().ref().child("LDRValue");

	// 	if(Led1Status == "1"){    // post to firebase
	// 		firebaseRef.set("0");
	// 		Led1Status = "0";
	// 	} else {
	// 		firebaseRef.set("1");
	// 		Led1Status = "1";
	// 	}
	// })
});