var firebaseConfig = {
    apiKey: "AIzaSyDYnBIcbH-Nx8nrB3Eq7GjSySwOsCVOcd4",
    authDomain: "kwitter-72d3a.firebaseapp.com",
    databaseURL: "https://kwitter-72d3a-default-rtdb.firebaseio.com",
    projectId: "kwitter-72d3a",
    storageBucket: "kwitter-72d3a.appspot.com",
    messagingSenderId: "997822086821",
    appId: "1:997822086821:web:86196772ed3dea8c3d174c",
    measurementId: "G-9XV8QGQ14V"
  };

  firebase.initializeApp(firebaseConfig);

var user_name = localStorage.getItem("User_name");
var room_name = localStorage.getItem("room_name");
function send(){
    msgv = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          username:user_name,
          message:msgv,
          like:0
    });
     document.getElementById("msg").value="";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;

    } });  }); }
getData();
