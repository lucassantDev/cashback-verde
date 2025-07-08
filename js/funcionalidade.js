// Funcionalidades para cadastrar usuários --------------------------------------------------------------------------

const finalizandoSessao = document.getElementById("enviar-valores");

finalizandoSessao.addEventListener('click', () =>{
    let nomeInformado = document.querySelector("#nome");
    let idadeInformada = document.querySelector("#idade");

    let inputNome = nomeInformado.value;
    let inputIdade = idadeInformada.value;

    alert(`O nome informado foi ${inputNome}, sua idade é ${inputIdade} anos`)
})


// Funcionalidades para o botão de usuários --------------------------------------------------------------------------
const botaoUsuario = document.getElementById('botao-usuarios');
const botaoRetorno = document.getElementById('botao-retornar');

const inputsHTML = document.getElementsByClassName("input-botao");
const centralizarCheckboxHTML = document.getElementById("centralizar-checkbox");
const caixaCheckboxHTML = document.getElementById('campo-checkbox')

// função para fazer o botão de usuários desaparecer e o botão de retorno aparecer
botaoUsuario.addEventListener('click', MouseEvent => {
    for (let index = 0; index < inputsHTML.length; index++) {
    inputsHTML[index].style.display = "none" ;
    }
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
    caixaCheckboxHTML.style.display = "flex";
    botaoUsuario.style.display = 'flex'
    botaoRetorno.style.display = 'none'

})