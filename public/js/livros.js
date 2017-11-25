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
$('#trocarSenha')[0].addEventListener('click', function () {
    var usuario = firebase.auth().currentUser;
    var senha = $('#senha')[0].value;
    var confSenha = $('#confSenha')[0].value;
    if(senha === confSenha){
        usuario.updatePassaword(senha);
    }else{
        buildErrorMessage("Senhas não batem");
    }
});
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

    return $('#error')[0].appendChild(div);
}

$('#deslogar')[0].addEventListener('click', function (){
    firebase.auth().signOut().then(()=> window.location.replace('../index.html')).catch((error)=> alert('Erro ao deslogar'));
});
