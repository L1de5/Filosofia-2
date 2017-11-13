const gProvider = new firebase.auth.GoogleAuthProvider();
const fbProvider = new firebase.auth.FacebookAuthProvider();
const db = firebase.database();
var usuario;

firebase.auth().onAuthStateChanged((user)=> (user)?(window.location.replace('../perfil.html'), usuario = user):null);

$('#registrar')[0].addEventListener('click', function (e) {
    var email = document.querySelector('#usernameReg').value + '@filosofo.com';
    var senha = document.querySelector('#senhaReg').value;

    firebase.auth().createUserWithEmailAndPassword(email, senha);
});

$('#normalLogin')[0].addEventListener('click', function(e) {
    var email = $('#username')[0].value + '@filosofo.com';
    var password = $('#senha')[0].value;
    firebase.auth().signInWithEmailAndPassword(email, password);
    setTimeout(function() {
        firebase.auth().onAuthStateChanged((user)=> (user)?window.location.replace('../perfil.html'):(alert('Erro ao Efetuar o login. \nVerifique seus dados e tente novamente.'), window.location.replace('../index.html')));
    },1500);
    e.preventDefault();
});

$('#gLogin')[0].addEventListener('click', function() {
    firebase.auth().signInWithRedirect(gProvider).then(function(user) {
            if (user) {
                console.log('usuario');
            } else {
                usuario = null;
                console.log('usuario nao encontrado');
            }
    }).catch(function(erro) {
        alert("Falha ao realizar o login");
    });
});

$('#fbLogin')[0].addEventListener('click', function() {
    firebase.auth().signInWithRedirect(fbProvider);
    firebase.auth().getRedirectResult().then(function(result) {
        if (result.credential) var token = result.credential.accessToken;
        var user = result.user;
        console.log(user);
    });
});