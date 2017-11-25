var url = window.location.href.split('/');

var addMenuItem = function (nome, href) {
    var menu = $('#menu-options')[0];

    var li = document.createElement('li');
    li.setAttribute('class', 'nav-item');

    var link = document.createElement('a');
    link.setAttribute('class', 'nav-link js-scroll-trigger');
    link.setAttribute('href', href);
    link.textContent = nome;

    li.appendChild(link);
    return menu.appendChild(li);
}


if (url[url.length-1] === 'livros.html' || url[url.length-1] === 'livro.html') {
    $('body')[0].setAttribute('class', 'ajusta-body');
} else if (url[url.length-1] === 'index.html' || url[url.length-1] === '' ) {
    addMenuItem('Sobre mim', '#about');
    addMenuItem('Filosofos', '#services');
    addMenuItem('Login', '#login');
}