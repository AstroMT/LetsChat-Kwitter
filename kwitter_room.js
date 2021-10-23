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
        purpose: "adding room"
    });
}