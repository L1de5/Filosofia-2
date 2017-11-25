var adicionaComentario = function (nomeDoLivro, selecao, comentario, username) {
    firebase.database().ref('livros/' + nomeDoLivro +'/'+ username).set({
        selecao: selecao,
        comentario: comentario
    });
}

var mostraComentarioTexto = function (selecao, comentario, autor) {
    var div = document.createElement('div');
    div.setAttribute('class', 'alert alert-primary comentario');
    div.setAttribute('role', 'alert');

    var h4 = document.createElement('h4');
    h4.textContent = '"... '+selecao+' ..."';

    var h6 = document.createElement('h6');
    h6.textContent = '"'+comentario+'" -'+autor+'.';

    div.appendChild(h4);
    div.appendChild(h6);
    return $('#comentarios')[0].appendChild(div);
}

var livro = window.location.href.split('?')[1];

$('#pagina')[0].addEventListener('mouseup', function () {
    var selObj = window.getSelection();
    var selecao = selObj.toString();
    var txtStrong = '<strong>' + selecao + '</strong>';
    $('#pagina')[0].innerHTML = $('#pagina')[0].innerHTML.replace(selecao,txtStrong);
    if (selecao) {
        bootbox.prompt("Comente o trecho selecionado", function(result){
            adicionaComentario(livro, selecao, result, 'jao');
            
        });
    }
});


