listaUsuarios = [] // lista para armazenar usuarios


// Funcionalidades para o botão de usuários --------------------------------------------------------------------------
const botaoUsuario = document.getElementById('botao-usuarios');
const botaoRetorno = document.getElementById('botao-retornar');
const imagemInicial = document.getElementById('imagem-inicio');
const mensagemInicial = document.getElementById('mensagem-inicial');

const inputsHTML = document.getElementsByClassName("input-botao");
const centralizarCheckboxHTML = document.getElementById("centralizar-checkbox");
const caixaCheckboxHTML = document.getElementById('campo-checkbox')

const usuarios = document.getElementById('mostrar-usuario');

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
    // usuarios.style.display = 'flex'

    
    function mostrarUsuarios(){
        let html = '';
        if(listaUsuarios.length == 0){
        html = `Você não cadastrou nenhum usuário`;
        }
        else{
            listaUsuarios.forEach(usuario => {
                html += `
                    <p style="width: 750px; text-align: center; padding: 10px; border: 2px solid  #344C27;">
                    Nome: ${usuario.nomeInformado} |
                    Idade: ${usuario.idadeInformada} | 
                    Material: ${usuario.materialInformado} |
                    Peso: ${usuario.pesoMaterialInformado}
                    </p>
                
                    `;
            });
        }

        document.getElementById('mostrar-usuarios').innerHTML = `${html}`;
    }

    // utilizando a função mostrarUsuários
    mostrarUsuarios();
})


// função para fazer o botão de retorno desaparecer e o botão de usuários aparecer novamente, junto com
// os inputs e imagens
botaoRetorno.style.display = "none";

botaoRetorno.addEventListener('click', () => {

    // criando um for para percorrer os elementos com classes adicionadas, que nesse caso, são os inputs
    for (let index = 0; index < inputsHTML.length; index++) {
    inputsHTML[index].style.display = "flex" ;
    }
    imagemInicial.style.display = "flex";
    caixaCheckboxHTML.style.display = "flex";
    botaoUsuario.style.display = 'flex';
    botaoRetorno.style.display = 'none';
    mensagemInicial.style.display = 'flex';

    document.getElementById('mostrar-usuarios').textContent = ``;

})

// Funcionalidades para o cadastro dos usuários--------------------------------------------------------------------------
const finalizandoSessao = document.getElementById("enviar-valores");

finalizandoSessao.addEventListener('click', () =>{
    let nomeInformado = document.querySelector("#nome").value;
    let idadeInformada = Number(document.querySelector("#idade").value);
    let materialInformado = Number(document.querySelector("#numero-material").value);
    let pesoMaterialInformado = Number(document.querySelector("#peso-material").value);

    // código para não validar campos vazios
    if (
    nomeInformado === '' ||
    isNaN(idadeInformada) ||
    isNaN(materialInformado) || ![1, 2, 3, 4, 5].includes(materialInformado) ||
    isNaN(pesoMaterialInformado) || pesoMaterialInformado <= 0
  ) {
    alert('Por favor, preencha todos os campos corretamente!');
    return;
    }

    // utilizando o includes para saber se existe ou não, deteriminado elemento dentro de um array(lista)
    if (![1, 2, 3, 4, 5].includes(materialInformado)){
        alert('Por favor, informe o material corretamente!');
        return;
    }

    // condição para caso o usuário não informe nenhum dado
    if(nomeInformado && idadeInformada && materialInformado && pesoMaterialInformado === ''){
        alert('Insira dados válidos!')
        return
    }

    // armazenando o nome do material na variavel materialNome
    let materialNome = '';
    if(materialInformado === 1){
        materialNome = "Plástico";
    }
    else if(materialInformado === 2){
        materialNome = 'Vidro';
    }
    else if(materialInformado === 3){
        materialNome = 'Cobre';
    }
    else if(materialInformado === 4){
        materialNome = 'Ferro';
    }
    else if(materialInformado === 5){
        materialNome = 'Alumínio';
    }

    // enviandoos dados para a lista
    const usuarioCadastrado = {
        nomeInformado,
        idadeInformada,
        materialInformado: materialNome,
        pesoMaterialInformado
    };
    listaUsuarios.push(usuarioCadastrado);

    // emitindo um alerta para o usuário
    alert(`O cadastro de ${nomeInformado} foi concluído com sucesso!`);
    // deixando os campos vazios novamente
        document.querySelector("#nome").value = "";
        document.querySelector("#idade").value = "";
        document.querySelector("#numero-material").value = "";
        document.querySelector("#peso-material").value = "";

});



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
