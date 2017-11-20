firebase.auth().onAuthStateChanged(function (user) {
    if (user) {  
        $('#deslogar')[0].addEventListener('click', function (){
            firebase.auth().signOut().then(()=> window.location.replace('../index.html')).catch((error)=> alert('Erro ao deslogar'));
        });
    } else window.location.replace('../index.html');
});