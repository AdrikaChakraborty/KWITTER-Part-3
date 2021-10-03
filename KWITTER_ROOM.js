username=localStorage.getItem("username");
document.getElementById("name").innerHTML="Welcome  : " +username+"!";

function addRoom() {
room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
});
localStorage.setItem("room_name",room_name);

window.location= "KWITTER.html";

}
// Your web app's Firebase configuration

var firebaseConfig = {
    apiKey: "AIzaSyBKNrXFgNE4CPo1Z5-K2vqX8iQ7KcgaNHU",
    authDomain: "kwitter-8c556.firebaseapp.com",
    databaseURL: "https://kwitter-8c556-default-rtdb.firebaseio.com",
    projectId: "kwitter-8c556",
    storageBucket: "kwitter-8c556.appspot.com",
    messagingSenderId: "254104059222",
    appId: "1:254104059222:web:f4384aeeb93571d92ceaf7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("Room Name -" + Room_names);
     row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'> #"+Room_names+"</div><hr>";
     document.getElementById("output").innerHTML +=row;
    //End code
    });});}
getData();

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="KWITTER.html";
} 


function redirectToRoomName(name)
   {
         console.log(name);
         localStorage.setItem("room_name",name)
         window.location=""
   }