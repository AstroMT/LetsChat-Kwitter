user_name = localStorage.getItem("user_name");
document.getElementById("welcome").innerHTML = "Welcome " + user_name + "!";

const firebaseConfig = {
    apiKey: "AIzaSyBuwQqNN6b6tLtaygawyb6DpVf4wouImfk",
    authDomain: "letschat-b90a7.firebaseapp.com",
    databaseURL: "https://letschat-b90a7-default-rtdb.firebaseio.com",
    projectId: "letschat-b90a7",
    storageBucket: "letschat-b90a7.appspot.com",
    messagingSenderId: "401013938739",
    appId: "1:401013938739:web:8749396c98bd70b0fa6146"
};

firebase.initializeApp(firebaseConfig);

function addRoom() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
}

function getData() {
    firebase.database().ref("/").on('value',
        function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                childKey = childSnapshot.key;
                Room_names = childKey;
                console.log("Room Name: " + Room_names);
                row = "<div class='room_name' id=" + Room_names +" onclick='redirectToRoomName(this.id)'> #" + Room_names + "</div><hr>"
            });
        });
}
getData();

function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}
