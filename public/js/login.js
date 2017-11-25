var buildErrorMessage = function (mensagem) {
    var div = document.createElement('div');
    div.setAttribute('class', 'alert alert-danger alert-dismissible fade show');
    div.setAttribute('role', 'alert');

    var teste = document.createElement('span');
    teste.textContent = mensagem;

    var btn = document.createElement('button');
    btn.setAttribute('type', 'button');
    btn.setAttribute('class', 'close');
    btn.setAttribute('data-dismiss', 'alert');
    btn.setAttribute('aria-label', 'close');

    var span = document.createElement('span');
    span.setAttribute('aria-hidden', 'true');
    span.innerHTML = '&times;';

    btn.appendChild(span);
    div.appendChild(teste);
    div.appendChild(btn);

    return $('#erro')[0].appendChild(div);
}

const gProvider = new firebase.auth.GoogleAuthProvider();
const fbProvider = new firebase.auth.FacebookAuthProvider();
const db = firebase.database();

firebase.auth().onAuthStateChanged((user)=> (user)?window.location.replace('../livros.html'):null);

$('#registrar')[0].addEventListener('click', function (e) {
    var email = $('#usernameReg')[0].value + '@filosofo.com';
    var senha = $('#senhaReg')[0].value;
    firebase.auth().createUserWithEmailAndPassword(email, senha);
});

$('#normalLogin')[0].addEventListener('click', function(e) {
    var email = $('#username')[0].value + '@filosofo.com';
    var password = $('#senha')[0].value;
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        
        buildErrorMessage(error.message);
    });
    // setTimeout(function() {
    //     firebase.auth().onAuthStateChanged((user)=> (user)?window.location.replace('../livros.html'):(alert('Erro ao Efetuar o login. \nVerifique seus dados e tente novamente.'), window.location.replace('../index.html')));
    // },1500);
    e.preventDefault();
});

$('#gLogin')[0].addEventListener('click', function() {
    firebase.auth().signInWithRedirect(gProvider).then(function(user) {
            if (user) {
                console.log('usuario');
            } else {
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