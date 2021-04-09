// Sign in user
function onSignIn(googleUser) {  
    var profile = googleUser.getBasicProfile();
    document.getElementById('profileInfo').innerHTML = `<span style='font-size:20px; color:white'>Welcome ${profile.getName()} !!</span>` +"<br>" 
      + "<img span style='margin-left:50px; width:55px; height:55px' src='" + profile.getImageUrl() + "'/>";
   
}

function onFailure(error) {
    console.log(error);
}
// Sign out user
function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      document.getElementById('profileInfo').innerHTML="";
      console.log('User signed out.');
    });
}
