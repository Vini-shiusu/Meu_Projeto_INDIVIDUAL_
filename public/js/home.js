b_usuario.innerHTML = sessionStorage.NOME_USUARIO;


// Áreas das categorias

var btnTodos = document.getElementById("btn_todos")
var btnlancamentos = document.getElementById("btn_lancamentos")
var btnRecomendados = document.getElementById("btn_recomendados")
var btnFilmes = document.getElementById("btn_filmes")
var btnMagas = document.getElementById("btn_mangas")



function todos() {


    areaAnimes_1.style.display = "block"
    areaAnimes_2.style.display = "none"
    areaAnimes_3.style.display = "none"
    areaAnimes_4.style.display = "none"
    areaAnimes_5.style.display = "none"
 

}

function lancamentos() {


    areaAnimes_1.style.display = "none"
    areaAnimes_2.style.display = "block"
    areaAnimes_3.style.display = "none"
    areaAnimes_4.style.display = "none"
    areaAnimes_5.style.display = "none"

    
}

function recomendados() {


    areaAnimes_1.style.display = "none"
    areaAnimes_2.style.display = "none"
    areaAnimes_3.style.display = "block"
    areaAnimes_4.style.display = "none"
    areaAnimes_5.style.display = "none"

    
}

function filmes() {


    areaAnimes_1.style.display = "none"
    areaAnimes_2.style.display = "none"
    areaAnimes_3.style.display = "none"
    areaAnimes_4.style.display = "block"
    areaAnimes_5.style.display = "none"

    
}

function mangas() {


    areaAnimes_1.style.display = "none"
    areaAnimes_2.style.display = "none"
    areaAnimes_3.style.display = "none"
    areaAnimes_4.style.display = "none"
    areaAnimes_5.style.display = "block"

    
}