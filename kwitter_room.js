
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDQYj1ThW70a4_Qi2jQmPZ0acOrCD-35LY",
      authDomain: "kwitter-9ac35.firebaseapp.com",
      databaseURL: "https://kwitter-9ac35-default-rtdb.firebaseio.com",
      projectId: "kwitter-9ac35",
      storageBucket: "kwitter-9ac35.appspot.com",
      messagingSenderId: "194389442072",
      appId: "1:194389442072:web:300c0b7b65e6da98e34d6d"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);

      user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

         localStorage.setItem("room_name", room_name);

         window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class= 'room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });
});

}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
       window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
        window.location = "kwitter.html";
}
