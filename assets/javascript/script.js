$(document).ready(function () {
  var firebaseConfig = {
    apiKey: "AIzaSyC-XewrIouPXycLdTRf30vAk2cLgMr4y8U",
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


  $("#submit-login").on("click", function () {
    var username = $("#email-input").val().trim();
    var password = $("#password-input").val().trim();

    database.ref().set({
      Password: password,
      Username: username
    })
  })


});