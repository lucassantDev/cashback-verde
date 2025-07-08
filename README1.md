# ♻️ cashback verde.js

**cashback verde.js** é um programa simples em JavaScript que incentiva o descarte correto de materiais recicláveis, recompensando os usuários com **cashback** baseado no tipo e peso do material reciclado. A ideia é conectar consciência ambiental com benefícios financeiros, promovendo a sustentabilidade.

--- 

## Descrição do funcionamento

### Funcinalidade Cadastramento de usuário

``` JavaScript 
const finalizandoSessao = document.getElementById("enviar-valores");

finalizandoSessao.addEventListener('click', () =>{
    let nomeInformado = document.querySelector("#nome");
    let idadeInformada = document.querySelector("#idade");

    let inputNome = nomeInformado.value;
    let inputIdade = idadeInformada.value;

    alert(`O nome informado foi ${inputNome}, sua idade é ${inputIdade} anos`)
})
```
- A página web inicia pedindo o nome e idade do usuário e exibe um alerta com as informações fornecidadas pelo usuário.

---

### Funcionalidade botão usuário

```java Scripit
(const botaoUsuario = document.getElementById('botao-usuarios');
const botaoRetorno = document.getElementById('botao-retornar');

const inputsHTML = document.getElementsByClassName("input-botao");
const centralizarCheckboxHTML = document.getElementById("centralizar-checkbox");
const caixaCheckboxHTML = document.getElementById('campo-checkbox'))

```
- Funcionalidade do botão usuário são de selecionaa o botão com id "botao-usuarios" e armazena na variável botaoUsuario, selecionar o botão com id "botao-retornar" e armazena na variável botaoRetorno, seleciona todos os elementos com a classe "input-botao" (retorna um HTMLCollection), selecionar o elemento com id "centralizar-checkbox",Seleciona o elemento com id "campo-checkbox".


### Função para fazero botão de usuário desaparecer e botão de restorno aparecer e o retono aparecer. 

``` java scripit
=> {
    for (let index = 0; index < inputsHTML.length; index++) {
    inputsHTML[index].style.display = "none" ;
    }
    caixaCheckboxHTML.style.display = "none";
    botaoRetorno.style.display = 'flex'
    botaoUsuario.style.display = 'none'
   
})
```

### Função para fazer o botão de retorno desaparecer e o botão de usuários aparecer novamente, junto com os inputs e imagens.
botaoRetorno.style.display = "none";

``` java scripit
botaoRetorno.addEventListener('click', MouseEvent => {
    for (let index = 0; index < inputsHTML.length; index++) {
    inputsHTML[index].style.display = "flex" ;
    }
    caixaCheckboxHTML.style.display = "flex";
    botaoUsuario.style.display = 'flex'
    botaoRetorno.style.display = 'none'

})
```
---
