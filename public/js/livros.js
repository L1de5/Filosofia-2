var usuario;

firebase.auth().onAuthStateChanged(function (user) {
    (user)?usuario = user:window.location.replace('../index.html');
});


$('#deslogar')[0].addEventListener('click', function (){
    firebase.auth().signOut().then(()=> window.location.replace('../index.html')).catch((error)=> alert('Erro ao deslogar'));
});