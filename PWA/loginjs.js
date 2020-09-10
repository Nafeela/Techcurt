// (function($){
//   $('.loginModal').on('click', function(e){
      
//     $('.limiter').show().load($(this).attr('href'));
//   });
  
   
  
// })(jQuery);

  window.onload=()=>{
   

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
   
    document.getElementById('profile-pic').src="./images/avatar3.png"
    var btn= document.getElementById('loginbtn')
    btn.setAttribute('onclick','login()')
    

    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
    //User is signed in.
    // document.getElementById("user_div").style.display = "block";
    // document.getElementById("login_div").style.display = "none";
  
    var user = firebase.auth().currentUser;
  
    if(user != null){
            var name=user.displayName!==null?user.displayName:"Hlo there!";
            document.getElementById("user_name").innerHTML =name;
            var img=user.photoURL!==null?user.photoURL:"../images/avatar3.png";
            document.getElementById('profile-pic').src=img;
  
            
            var data= document.getElementById('loginbtn')
            data.removeAttribute('onclick');
            data.innerHTML="Logout"
            data.setAttribute('onclick','logout()')
  
    }
  
  } else {
    //No user is signed in.
    // document.getElementById("user_div").style.display = "none";
    // document.getElementById("login_div").style.display = "block";
  
  }
  });
 
    
  }
 
  
function googlelogin(){
 
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        var data= document.getElementById('loginbtn')
        data.removeAttribute('onclick');  
        data.innerHTML="Logout"
        data.setAttribute('onclick','logout()')
        window.location='../Settings.html'
        console.log(user)

      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        window.location='../Settings.html'
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
}
facebooklogin=()=>{
  var provider = new firebase.auth.FacebookAuthProvider();
            provider.addScope('user_birthday');
            firebase.auth().useDeviceLanguage();
            firebase.auth().signInWithPopup(provider).then(function(result) {
              // This gives you a Facebook Access Token. You can use it to access the Facebook API.
              var token = result.credential.accessToken;
            // The signed-in user info.
             var user = result.user;
             var data= document.getElementById('loginbtn')
                data.removeAttribute('onclick');
                data.innerHTML="Logout"
                data.setAttribute('onclick','logout()')
                window.location='../Settings.html'
                console.log(user)
        
            // ...
            }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            console.log(errorMessage)
            window.location='../Settings.html'
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
            });
}
twitterlogin=()=>{
  var provider = new firebase.auth.TwitterAuthProvider();
  firebase.auth().useDeviceLanguage();
  firebase.auth().signInWithPopup(provider)
    .then(function(result) {
     
    var user = result.user;
    alert(user)
    document.getElementById("name").innerHTML=user.displayName;
    console.log(user)
    var img=user.photoURL;
    document.getElementById('prfile-pic').src=img;
    
    var data= document.getElementById('loginbtn')
    data.removeAttribute('onclick');
    data.innerHTML="Logout"
    data.setAttribute('onclick','logout()')
    window.location='../Settings.html'
    
// ...
    })
    .catch(function(error) {
    // Handle Errors here.
    window.alert(error.message)
    var errorCode = error.code;
    var errorMessage = error.message;
    window.location='../Settings.html'
        console.log(errorMessage);
        console.log(error)
    });
}
function phoneLogin(){
  window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('signinbtn', {
    'size': 'invisible',
    'callback': function(response) {
      // reCAPTCHA solved, allow signInWithPhoneNumber.
      onSignInSubmit();
    },
  });
  var number=document.getElementById('number').value;
  var name=document.getElementById('name').value;
  //document.getElementById("user_name").innerHTML=name;
  
  
  firebase.auth().signInWithPhoneNumber(number,window.recaptchaVerifier)
  .then(function(confirmataionCode){
      window.confirmationResult=confirmataionCode;
      coderesult=confirmataionCode;
       console.log(coderesult);
      var btns=document.getElementById('signinbtn');
        btns.removeAttribute('onclick');
        btns.innerHTML="Verify"
        btns.setAttribute('onclick','verify()')
      alert("Message Send")
  })
  .catch(err=>{
      alert(err.message)
  })


}
verify=()=>{
  var otp=document.getElementById('OTP').value;
  coderesult.confirm(otp)
  .then(function(result){
      alert('SuccessFully Register')
      var user=result.user;
       console.log(user.phoneNumber);
      window.location='../Settings.html'
      window.close('../otp.html')
      var data= document.getElementById('loginbtn')
      data.removeAttribute('onclick');
      data.innerHTML="Logout"
      data.setAttribute('onclick','logout()')
  })
  .catch(err=>{
      alert(err.message)
      window.location='../Settings.html';
  });
}
function logout(){
  firebase.auth().signOut().then(()=>{
    window.location='../Settings.html'
          document.getElementById('loginbtn').innerHTML="Login/Signup"
          document.getElementById("user_name").innerHTML="Hey Dude";
          document.getElementById('profile-pic').src="../images/avatar3.png"
          var data= document.getElementById('loginbtn')
           data.setAttribute('onclick','login()')
  })
  .catch(err=>{
    window.alert(err.message);
  })
}
