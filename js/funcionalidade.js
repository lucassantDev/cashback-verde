listaUsuarios = [] // lista para armazenar usuarios


// Funcionalidades paracadastrarusuários--------------------------------------------------------------------------
const finalizandoSessao = document.getElementById("enviar-valores");

finalizandoSessao.addEventListener('click', () =>{
    let nomeInformado = document.querySelector("#nome").value;
    let idadeInformada = document.querySelector("#idade").value;
    let materialInformado = document.querySelector("#numero-material").value;
    let pesoMaterialInformado = document.querySelector("#peso-material").value;

    // lidando com tratamento de erros

    // se a idade informada for menor que 16 anos
    if(idadeInformada <= 16){
        document.querySelector("#nome").value = "";
        document.querySelector("#idade").value = "";
        document.querySelector("#numero-material").value = "";
        document.querySelector("#peso-material").value = "";
    }

    // se o nº do máterial não estiver entre 1, 2, 3, 4 e 5
    else if (materialInformado != 1 || 2 || 3 || 4 || 5){
        alert('Por favor, informe o material corretamente!');
        document.querySelector("#nome").value = "";
        document.querySelector("#idade").value = "";
        document.querySelector("#numero-material").value = "";
        document.querySelector("#peso-material").value = "";
    }

    // se tudo estiver correto
    else{
        const usuarioCadastrado = { nomeInformado, idadeInformada, materialInformado, pesoMaterialInformado }
        listaUsuarios.push(usuarioCadastrado);
        alert(`O cadastro de ${nomeInformado} foi concluído com sucesso!`);

        // deixando os campos vazios novamente
        document.querySelector("#nome").value = "";
        document.querySelector("#idade").value = "";
        document.querySelector("#numero-material").value = "";
        document.querySelector("#peso-material").value = "";
    }

})


// Funcionalidades para o botão de usuários --------------------------------------------------------------------------
const botaoUsuario = document.getElementById('botao-usuarios');
const botaoRetorno = document.getElementById('botao-retornar');
const imagemInicial = document.getElementById('imagem-inicio');
const mensagemInicial = document.getElementById('mensagem-inicial');

const inputsHTML = document.getElementsByClassName("input-botao");
const centralizarCheckboxHTML = document.getElementById("centralizar-checkbox");
const caixaCheckboxHTML = document.getElementById('campo-checkbox')

// função para fazer o botão de usuários desaparecer e o botão de retorno aparecer
botaoUsuario.addEventListener('click', () => {
    for (let index = 0; index < inputsHTML.length; index++) {
    inputsHTML[index].style.display = "none" ;
    }
    imagemInicial.style.display = "none";
    caixaCheckboxHTML.style.display = "none";
    botaoRetorno.style.display = 'flex';
    botaoUsuario.style.display = 'none';
    mensagemInicial.style.display = 'none';

    function mostrarUsuarios(){
        let mensagem = 'Não há nenhum usuário cadastrado!';
        if(listaUsuarios.length === 0){
            document.getElementById("mostrar-usuarios").innerHTML = `${mensagem}`

        }
    }
   
})

// função para fazer o botão de retorno desaparecer e o botão de usuários aparecer novamente, junto com
// os inputs e imagens
botaoRetorno.style.display = "none";

botaoRetorno.addEventListener('click', () => {
    for (let index = 0; index < inputsHTML.length; index++) {
    inputsHTML[index].style.display = "flex" ;
    }
    imagemInicial.style.display = "flex";
    caixaCheckboxHTML.style.display = "flex";
    botaoUsuario.style.display = 'flex';
    botaoRetorno.style.display = 'none';
    mensagemInicial.style.display = 'flex';

})





// Criando class para gerar pontos do usuário
// class pontosUsuario{
//     constructor(peso, valorMercado){
//         this.peso = peso;
//         this.valorMercado = valorMercado;
//     }

//     pontosGerados(){
//         peso * valorMercado
//     }
// }

// const 