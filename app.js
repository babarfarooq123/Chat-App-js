document.querySelector('.log').addEventListener('click',(event)=>{
event.preventDefault()
var email = document.querySelector('#email').value;
var password = document.querySelector('#pwd').value;
    firebase.auth().signInWithEmailAndPassword(email, password).then(function(data){
    location.replace('./home.html?email='+email)
    }).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(error.message)
    });
})

function facebookLogin(){
    var provider = new firebase.auth.FacebookAuthProvider();

    firebase.auth().signInWithPopup(provider).then(function(result) {
        var token = result.credential.accessToken;
        var user = result.user;
        // console.log(user.email)
        location.replace('./home.html?email='+user.email)
      }).catch(function(error) {
        var errorMessage = error.message;
        console.log(error.message)
      });
}