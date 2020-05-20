//
//
//
//
//
//MAKE A FIREBASE FOR THE SIGN UP INFO AND TRY PASSWORD AUTHENTICATION


$(document).ready(function () {
    var firebaseConfig = {
      //
      //
      //
      //add API
      apiKey: "",
      authDomain: "login-layout-150ad.firebaseapp.com",
      databaseURL: "https://login-layout-150ad.firebaseio.com",
      projectId: "login-layout-150ad",
      storageBucket: "login-layout-150ad.appspot.com",
      messagingSenderId: "179769582467",
      appId: "1:179769582467:web:f4147acd6d14bfb5a38cb6"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    var database = firebase.database();
  
    $('.carousel').carousel({
      interval: 4000
    })

    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;

      if (error) {
        console.log(errorCode + "-" + errorMessage);
      }
    });
  
  
    $("#submit-signup").on("click", function () {
      var firstname = $("#firstname").val().trim()
      var lastname = $("#lastname").val().trim();
      var email = $("#email").val().trim();
      var username = $("#username").val().trim();
      var password = $("#password").val().trim();
  
      if ($('#radio').is(':checked')) {
        database.ref().push({
          Firstname: firstname,
          Lastname: lastname,
          Email: email,
          Username: username,
          Password: password,
          
        })
        createUserWithEmailAndPassword(email, password);
      }
  
    })
  
  
  });