// Mostra o botão quando o usuário rola a página
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("btn-topo").style.display = "block";
    } else {
        document.getElementById("btn-topo").style.display = "none";
    }
}

// Quando o usuário clica no botão, volta para o topo da página
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Colocar a data do ano automáticamente no rodapé
var data = new Date();
var ano = data.getFullYear();
document.getElementById("ano_base").innerHTML = ano;