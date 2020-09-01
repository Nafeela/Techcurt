firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    //User is signed in.
    document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";

    var user = firebase.auth().currentUser;

    if(user != null){
      var email_id = user.email;
      document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;

    }

  } else {
    //No user is signed in.
    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";

  }
});
	var provider = new firebase.auth.GoogleAuthProvider();

function googlelogin(){
	firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Google Access Token. You can use it to access the Google API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
 // window.alert("signed in as"+user);
  // ...
})
.catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  window.alert("error:"+errorMessage);
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});
}
function login(){
	var auth=null;
  var email = document.getElementById("email_field").value;
  var pwd = document.getElementById("password_field").value;
  firebase.auth().signInWithEmailAndPassword(email, pwd).then(function(user)
  {
    window.alert("Authenticated successfully with payload:"+user);
    auth = user;
  })
  .catch(function(error){
    window.alert("Login Failed!"+error);
  });
}

function logout(){
  firebase.auth().signOut();
}
