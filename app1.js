document.querySelector('.reg').addEventListener('click',(event)=>{
    event.preventDefault()
    console.log("hello")
    // location.replace('home.html')
    var email = document.querySelector('#email').value;
    var password = document.querySelector('#pwd').value;
    firebase.auth().createUserWithEmailAndPassword(email, password).then(function(data){
        // console.log(data.user)
        location.replace('home.html?email='+email)
    }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage)
        // ...
    });
})