listaUsuarios = [] // lista para armazenar usuarios

// const nomeInformado = document.querySelector("#nome");
// const idadeInformada = document.querySelector("#idade");
// const materialInformado = document.querySelector("#numero-material");
// const pesoMaterialInformado = document.querySelector("#peso-material");

// Funcionalidades paracadastrarusuários--------------------------------------------------------------------------
const finalizandoSessao = document.getElementById("enviar-valores");

finalizandoSessao.addEventListener('click', () =>{
    let nomeInformado = document.querySelector("#nome");
    let idadeInformada = document.querySelector("#idade");
    let materialInformado = document.querySelector("#numero-material");
    let pesoMaterialInformado = document.querySelector("#peso-material");

    let inputNome = nomeInformado.value;
    let inputIdade = idadeInformada.value;
    let inputMaterial = materialInformado.value;
    let inputPeso = pesoMaterialInformado.value;

    informacaoUsuario = [inputNome, inputIdade, inputMaterial, inputPeso]
    // alert(info)
})

// Funcionalidades para o botão de usuários --------------------------------------------------------------------------
const botaoUsuario = document.getElementById('botao-usuarios');
const botaoRetorno = document.getElementById('botao-retornar');
const imagemInicial = document.getElementById('imagem-inicio')

const inputsHTML = document.getElementsByClassName("input-botao");
const centralizarCheckboxHTML = document.getElementById("centralizar-checkbox");
const caixaCheckboxHTML = document.getElementById('campo-checkbox')

// função para fazer o botão de usuários desaparecer e o botão de retorno aparecer
botaoUsuario.addEventListener('click', MouseEvent => {
    for (let index = 0; index < inputsHTML.length; index++) {
    inputsHTML[index].style.display = "none" ;
    }
    imagemInicial.style.display = "none";
    caixaCheckboxHTML.style.display = "none";
    botaoRetorno.style.display = 'flex'
    botaoUsuario.style.display = 'none'
   
})

// função para fazer o botão de retorno desaparecer e o botão de usuários aparecer novamente, junto com
// os inputs e imagens
botaoRetorno.style.display = "none";

botaoRetorno.addEventListener('click', MouseEvent => {
    for (let index = 0; index < inputsHTML.length; index++) {
    inputsHTML[index].style.display = "flex" ;
    }
    imagemInicial.style.display = "flex";
    caixaCheckboxHTML.style.display = "flex";
    botaoUsuario.style.display = 'flex'
    botaoRetorno.style.display = 'none'

})