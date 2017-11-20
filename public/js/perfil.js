firebase.auth().onAuthStateChanged(function (user) {
    if (user) {  
        usuario = user;
        $('#nome')[0].textContent = user.displayName;
        $('#email')[0].textContent = user.email;
        $('#username')[0].textContent = '@'+user.email.split('@')[0];
        // $('#pic')[0].src = user.photoURL;

        $('#deslogar')[0].addEventListener('click', function (){
            firebase.auth().signOut().then(()=> window.location.replace('../index.html')).catch((error)=> alert('Erro ao deslogar'));
        });
    } else window.location.replace('../index.html');
});