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

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
 
function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  childData = childSnapshot.val();
                  if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                  }
            });
      });
}
getData();
 
function log_out() {
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");
      window.location = "index.html"
}
 
 
function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            room: room_name,
            like: 0,
      });
}
