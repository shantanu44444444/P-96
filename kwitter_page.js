//YOUR FIREBASE LINKS

// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyDjrZyr6czJbAxINwyxMKPKPyBbLSMXIcg",
      authDomain: "kwitter-45a6a.firebaseapp.com",
      databaseURL: "https://kwitter-45a6a-default-rtdb.firebaseio.com",
      projectId: "kwitter-45a6a",
      storageBucket: "kwitter-45a6a.appspot.com",
      messagingSenderId: "746946966037",
      appId: "1:746946966037:web:a10a47bd94b9557c16541c"
};
// Initialize Firebase
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
                        //Start code
                        
                        //End code
                  }
            });
      });
}
getData();

function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({

            name: user_name,
            message: msg,
            like: 0

      });

      document.getElementById("msg").value = "";
}