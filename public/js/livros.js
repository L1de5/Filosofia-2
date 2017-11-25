var usuario;


firebase.auth().onAuthStateChanged(function (user) {
    (user)?usuario = user:window.location.replace('../index.html');
});

<<<<<<< HEAD
=======
var adicionaAosFavoritos = function () {
    firebase.database().ref('user/' + usuario.email.split('@')[0]).set({
        favoritos: {
            'casa': {
                foto: 'asd',
                autor: ''
            }
        }
    });
}
>>>>>>> 1e149af9fcb1d6e988b268d1faa5f340cd8847fd

$('#deslogar')[0].addEventListener('click', function (){
    firebase.auth().signOut().then(()=> window.location.replace('../index.html')).catch((error)=> alert('Erro ao deslogar'));
});
