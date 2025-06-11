
nome = input('Olá! Informe seu nome: ').strip().title()
print(f'Olá {nome}! Bem-vindo ao nosso sistema de cashback.')
print('--'*30)
print('Temos o objetivo de impulsionar a sustentabilidade na região, tendo pontos especificos de descarte correto com balanças de alta precisão para a pesagem do material que será levado pelo cidadão.')
print('--'*30)

# função para calcular peso do material * valor do material de acordo com pesquisas feitas
def calculoPeso(pesoMaterial, valorMaterial):
    calculo = pesoMaterial * valorMaterial
    return calculo

# inicio do loop
while True:

    material = int(input('Qual material você busca descartar corretamente: \n 1- Plástico \n 2- Vidro \n 3- Alumínio \n 4- Cobre \n 5- Ferro \n resposta: '))

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

    while True: 
        continuar = str(input("Deseja descartar mais algum material? (S | N): "))
        if continuar.upper() == 'S':
            break
        if continuar.upper() == 'N':
            print('Finalizando programa...')
            exit()
