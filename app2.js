function msg(e){
    console.log(e.value)
}

document.querySelector('.input').addEventListener('keypress',(event)=>{
    
    if(event.charCode == 13){
        let urlString = "http://127.0.0.1:5500/home.html?email=babarfarooq99@gmail.com"; 
        let paramString = urlString.split('?')[1]; 
        console.log(paramString.split('=')[1])

        var msg = document.querySelector('input').value
        if(msg.length > 0){
            // console.log(msg)
            var idEmail = paramString.split('=')[1]
            // idEmail: {
            //     msg: msg
            // }
            firebase.database().ref('chat').push({idEmail,msg})
        }else{
            alert('bhai kuch likho to sahi')
        }
    }
})

// function removee(prop){
//     console.log(prop)
// }

// console.log(firebase.database)
firebase.database().ref('chat').on('value', function(snapshot) {
    document.querySelector('.msgs').textContent = ''
//   updateStarCount(postElement, snapshot.val());
    // console.log(Object.keys(snapshot.val()))
    var data = snapshot.val()
    Object.keys(snapshot.val()).map((val,ind)=>{
        console.log(data[val]['idEmail'],data[val]['msg'])
        var listElement = document.createElement('li')
        var textNode = document.createTextNode(data[val]['idEmail']+': '+data[val]['msg'])
        listElement.appendChild(textNode)

        // var btn = document.createElement('button')
        // var textNodeBtn = document.createTextNode('X')
        // btn.appendChild(textNodeBtn)
        // listElement.appendChild(btn)



        document.querySelector('.msgs').appendChild(listElement)
    })
    document.querySelector('.input').value = ''
});

var messageBody = document.querySelector('.home-main');
messageBody.scrollTop =  messageBody.scrollHeight;