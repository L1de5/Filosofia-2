$('#pagina')[0].addEventListener('mouseup', function () {
    var selObj = window.getSelection();
    var selecao = selObj.toString();
    var txtStrong = '<strong>' + selecao + '</strong>';
    $('#pagina')[0].innerHTML = $('#pagina')[0].innerHTML.replace(selecao,txtStrong);
});
    