  function login(){
    $('#loginModal').modal('show')
    $('#signinModal').modal('hide')
}
function signin(){
    $('#loginModal').modal('hide')
    $('#signinModal').modal('show')
}
var firebaseConfig = {
            apiKey: "AIzaSyCiG8WQOdtLtFktx0HsqfTzjmWM6_YV7Bw",
            authDomain: "techcurt-81cad.firebaseapp.com",
            databaseURL: "https://techcurt-81cad.firebaseio.com",
            projectId: "techcurt-81cad",
            storageBucket: "techcurt-81cad.appspot.com",
            messagingSenderId: "10107979866",
            appId: "1:10107979866:web:b3f1dbfe40259af7f57063",
            measurementId: "G-7X25RJF4Q9"
          };
          // Initialize Firebase
firebase.initializeApp(firebaseConfig);
        