
# ♻️ cashback verde.py 

**cashback verde.py** é um programa simples em Python que incentiva o descarte correto de materiais recicláveis, recompensando os usuários com **cashback** baseado no tipo e peso do material reciclado. A ideia é conectar consciência ambiental com benefícios financeiros, promovendo a sustentabilidade.

---

## Descrição do Funcionamento

### 👤 Entrada do Nome

```python
nome = input('Olá! Informe seu nome: ').strip().title()
print(f'Olá {nome}! Bem-vindo ao nosso sistema de cashback.')
```

- O programa inicia pedindo o nome do usuário
- Logo após, uma mensagem com o f string é mostrada já com o nome do usuário

---

### 🚮 Qual material eu vou descarta?

```python
material = int(input('Qual material você busca descartar corretamente: \n 1- Plástico \n 2- Vidro \n 3- Alumínio \n 4- Cobre \n 5- Ferro \n resposta: '))
```

- Usuário pode escolher os materiais listados de 1 a 5. 
- Para cada material, irá existir um espaço com o valor da pesagem do material escolhido para descarte
  
---

### 🧮 Função de calculo

Como visto nas ultimas aulas, utilizamos uma função para calcular o valor do peso(informado pelo usuário) * o valor baseado no mercado


```python
# função para calcular peso do material * valor do material de acordo com pesquisas feitas
def calculoPeso(pesoMaterial, valorMaterial):
    calculo = pesoMaterial * valorMaterial
    return calculo
```

- Na função, nós utilizamos parâmetros para receber as variáveis de cada condição if

---

### 🔗 Estruturas condicionais

- Usamos uma estrutura condicional com os 5 tipos de materiais
- Atribuimos o resultado da função a uma variável e imprimimos ela logo em seguida


```python
 # códigos que serão executados se material for igual a opção 1
    if material == 1:
        pesagem_informada = float(input('Informe o valor da pesagem do material: '))
        material_plastico = 2.50
        resultado = calculoPeso(pesagem_informada, material_plastico)
        print(f'Você recebeu {resultado} pontos para usar ou juntar no nosso app!!')

    # códigos que serão executados se material for igual a opção 2
    elif material == 2:
        pesagem_informada = float(input('Informe o valor da pesagem do material: '))
        material_vidro = 3.75
        resultado = calculoPeso(pesagem_informada, material_vidro)
        print(f'Você recebeu {resultado} pontos para usar ou juntar no nosso app!!')

    # códigos que serão executados se material for igual a opção 3
    elif material == 3:
        pesagem_informada = float(input('Informe o valor da pesagem do material: '))
        material_aluminio = 4.50
        resultado = calculoPeso(pesagem_informada, material_aluminio)
        print(f'Você recebeu {resultado} pontos para usar ou juntar no nosso app!!')

    # códigos que serão executados se material for igual a opção 4
    elif material == 4:
        pesagem_informada = float(input('Informe o valor da pesagem do material: '))
        material_cobre = 5.75
        resultado = calculoPeso(pesagem_informada, material_cobre)
        print(f'Você recebeu {resultado} pontos para usar ou juntar no nosso app!!')

    # valor do ferro seria baixo levando em consideração seu estado sucateado
    elif material == 5:
        pesagem_informada = float(input('Informe o valor da pesagem do material: '))
        material_ferro = 0.70
        resultado = calculoPeso(pesagem_informada, material_cobre)
        print(f'Você recebeu {resultado} pontos para usar ou juntar no nosso app!!')
```

### ❓ Mais algum material?

- Por ultimo, mas não menos importante, um While para validar a resposta de continuidade do programa
- Caso o usuario queira continuar, a resposta é 'S', caso 'N', o programa finaliza imprimindo a mensagem 'Finalizando programa'

```python
 while True: 
        continuar = str(input("Deseja descartar mais algum material? (S | N): "))
        if continuar.upper() == 'S':
            break
        if continuar.upper() == 'N':
            print('Finalizando programa...')
            exit()
```



