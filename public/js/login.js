const provider = new firebase.auth.GoogleAuthProvider();
const db = firebase.database();
var usuario;

document.querySelector('#login').addEventListener('click', function(e){
    var email = document.querySelector('#username').value + '@filosofo.com';
    var senha = document.querySelector('#senha').value;

    firebase.auth().signInWithEmailAndPassword(email, senha);
    // setTimeout(function() {
    //     firebase.auth().onAuthStateChanged( (user)=> (user) ? (alert('LOGADO'), usuario = user) : null);
    // },1500);
    e.preventDefault();
});

document.querySelector('#registrar').addEventListener('click', function (e) {
    var email = document.querySelector('#usernameReg').value + '@filosofo.com';
    var senha = document.querySelector('#senhaReg').value;

    firebase.auth().createUserWithEmailAndPassword(email, senha);
});

$('#gLogin')[0].addEventListener('click', function() {
    firebase.auth().signInWithRedirect(provider).then(function(user) {
            if (user) {
                console.log(user);
            } else {
                usuario = null;
                console.log('usuario nao encontrado');
            }
    }).catch(function(erro) {
        alert("Falha ao realizar o login");
    });
});
