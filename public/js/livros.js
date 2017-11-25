var usuario;

firebase.auth().onAuthStateChanged(function (user) {
    (user)?usuario = user:window.location.replace('../index.html');
});

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





$('#deslogar')[0].addEventListener('click', function (){
    firebase.auth().signOut().then(()=> window.location.replace('../index.html')).catch((error)=> alert('Erro ao deslogar'));
});