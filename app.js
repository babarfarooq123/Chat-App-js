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