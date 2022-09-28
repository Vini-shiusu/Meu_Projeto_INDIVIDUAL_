function mostrar() {

    if (in_senha.type == "password") {
        img_ocultar.src = "img/exibindo.png"
        in_senha.type = "text"
        in_senha2.type = "text"
    } else {
        img_ocultar.src = "img/oculto.png"
        in_senha.type = "password"
        in_senha2.type = "password"
    }
}





var btn_1 = document.getElementById("btn_1")
var btn_2 = document.getElementById("btn_2")
var btn_3 = document.getElementById("btn_2")


function avancar_1() {


    cadastro.style.display = "none"
    pacotes.style.display = "flex"
    
}


function voltar_1() {


    cadastro.style.display = "flex"
    pacotes.style.display = "none"
    comprar.style.display = "none"
    
}

function avancar_2() {


    cadastro.style.display = "none"
    pacotes.style.display = "none"
    comprar.style.display = "flex"
    
}


function voltar_2() {


    cadastro.style.display = "none"
    pacotes.style.display = "flex"
    comprar.style.display = "none"
    
}


function valor(){
    var mes = sel_meses.value

    div_result.innerHTML = `R$${mes * 16}`
    
}


function cadastrar() {

    //Recupere o valor da nova input pelo nome do id
    // Agora vá para o método fetch logo abaixo

    if (in_captcha.value != div_captcha.innerHTML) {

        div_captcha.innerHTML = gerarCaptcha(10);
        return 0;
    }

    let nomeVar = nome_input.value;
    let emailVar = email_input.value;
    let senhaVar = in_senha.value;
    let fkVotacaoVar = categoria_favorita.value;

    // Enviando o valor da nova input
    fetch("/usuarios/cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
            nomeServer: nomeVar,
            emailServer: emailVar,
            senhaServer: senhaVar,
            fkVotacaoServer: fkVotacaoVar
        })
    }).then(function (resposta) {

        console.log("resposta: ", resposta);

            if(resposta.ok){
                setTimeout(() => {
                    window.location = "login.html";
                }, "1000")
            }

    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
        
    });

    return false;
}
