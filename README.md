
# ♻️ cashback verde.py 🐍

**cashback verde.py** é um programa simples em Python que incentiva o descarte correto de materiais recicláveis, recompensando os usuários com **cashback** baseado no tipo e peso do material reciclado. A ideia é conectar consciência ambiental com benefícios financeiros, promovendo a sustentabilidade.

---

## 🔍 Descrição do Funcionamento

### 👤 Entrada do Nome

```python
nome = input('Olá! Informe seu nome: ').strip().title()
print(f'Olá {nome}! Bem-vindo ao nosso sistema de cashback.')
```

- O programa inicia com uma saudação personalizada.
- Solicita que o usuário insira seu nome.
- O método `.strip()` remove espaços indesejados antes/depois do nome.
- `.title()` formata o nome com a primeira letra maiúscula.

---

### 🗑️ Escolha do Material

```python
material = int(input('Qual material você busca descartar corretamente: \n 1- Plástico \n 2- Vidro \n 3- Alumínio \n 4- Cobre \n 5- Ferro \n 6- Outros\n resposta: '))
```

- Usuário escolhe um número de 1 a 6, representando diferentes tipos de materiais recicláveis.
- O número será utilizado em estruturas condicionais `if` e `elif` para determinar o tipo de resíduo e calcular o valor correspondente.

---

### ⚖️ Cálculo do Cashback por Material

O programa usa uma lógica repetida para cada tipo de material. Para cada tipo:

#### ✅ Exemplo: Plástico (material == 1)

```python
kg_informados = float(input('Informe o Kg da sua pesagem: '))
preco_plastico = float(1.00)
valor_do_cashback = (preco_plastico * kg_informados)
print(f'Levando em consideração recentes pesquisas, o valor da sua pesagem referente a esse resíduo será de R${valor_do_cashback}...')
```

- Usuário informa o peso em quilos do material.
- É utilizado um valor fixo por quilo para calcular o **cashback**.
- A fórmula usada: `valor_do_cashback = preço_por_kg * peso_informado`.

O mesmo padrão se repete para:

| Material   | Código `material ==` | Preço por Kg (R$) |
|------------|----------------------|-------------------|
| Plástico   | 1                    | 1.00              |
| Vidro      | 2                    | 0.12              |
| Alumínio   | 3                    | 7.00              |
| Cobre      | 4                    | 24.00             |
| Ferro      | ⚠️ Também `4` (erro) | 1.00              |

---

### ⚠️ Observação Importante

Há um **erro de lógica** no trecho do código referente ao Ferro. O `elif material == 4:` é repetido duas vezes, o que impede que o bloco para **Ferro (material == 5)** seja executado. O correto seria:

```python
elif material == 5:
    ...
```

---

### 🚫 Outros Materiais

```python
else: 
    print('\nEste material ainda não gera cashback, mas sua atitude é importante!')
```

- Para qualquer número fora do intervalo 1 a 5 (como o 6), o sistema agradece o gesto do usuário, mas informa que não há cashback disponível.

---

## ✅ Possíveis Melhorias

- Corrigir a repetição de `elif material == 4` para incluir corretamente a opção **5 - Ferro**.
- Adicionar estrutura de repetição para permitir múltiplos cadastros sem reiniciar o programa.
- Implementar sistema de pontos ou ranking entre usuários.
- Adicionar persistência dos dados (salvar nome, material e cashback em um arquivo `.csv`).

---

## 📌 Requisitos

- Python 3.6+
- Nenhuma biblioteca externa é necessária.

---

## 🚀 Como Executar

```bash
python cashback_verde.py
```

---

## 🌱 Contribua

Tem sugestões de materiais, valores ou melhorias? Sinta-se livre para contribuir com o projeto e incentivar a educação ambiental com tecnologia.
