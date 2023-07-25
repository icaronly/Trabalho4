let estoque = [
    {
        'nome': 'maçã',
        'quantidade': 30,
        'id': 1
    },
    {
        'nome': 'laranja',
        'quantidade': 15,
        'id': 2
    },

    {
        'nome': 'banana',
        'quantidade': 20,
        'id': 3
    },

    {
        'nome': 'uva',
        'quantidade': 40,
        'id': 4
    },

    {
        'nome': 'pera',
        'quantidade': 128318748739234,
        'id': 5
    },

    {
        'nome': 'abacaxi',
        'quantidade': 10,
        'id': 6
    },

    {
        'nome': 'morango',
        'quantidade': 12,
        'id': 7
    },

    {
        'nome': 'kiwi',
        'quantidade': 8,
        'id': 8
    }
];
let sus = 1

while (sus) {

    let comm = window.prompt('Bem vindo ao console da loja, insira o comando que deseja! (/help mostra os comandos)')

    switch (comm) {

        case '/help':
            window.alert(`Lista de comandos: \r\n
            /help - mostra os comandos \r\n
            /add - aumenta a quantidade de um item no estoque \r\n
            /remove - diminue a quantidade de um item no estoque \r\n
            /addstock - adiciona novos items ao estoque \r\n
            /removestock - remove itens do estoque \r\n
            /list - lista todos os itens do estoque, falando sua quantidade e seu id \r\n
            /search - procura um item no estoque pelo seu id \r\n
            /exit - sai do console`);
            break;


        case '/add':
            id = parseInt(prompt('insira o id do produto')) - 1;

            if (id >= estoque.length || id < 0) {
                window.alert('erro: id invalido');
            } else {

                quant = parseInt(prompt(`quantos itens você deseja adicionar a ${estoque[id]['nome']}?`));

                if (isNaN(quant)) {
                    window.alert('insira um valor valido.')
                } else {

                    estoque[id]['quantidade'] += quant;
                    window.alert('operação realizada com sucesso!');
                }
            }
            break;


        case '/remove':
            id = parseInt(prompt('insira o id do produto')) - 1;

            if (id >= estoque.length || id < 0) {
                window.alert('Id invalido. Por favor, tente novamente.');
            } else {

                quant = parseInt(prompt(`quantos itens você deseja remover de ${estoque[id]['nome']}?`));

                if (isNaN(quant)) {
                    window.alert('insira um valor valido.')

                } else if (quant > estoque[id]['quantidade']){
                    window.alert('a quantidade expecificada ultrapassa o valor em estoque, ação cancelada.')

                } else {
                    estoque[id]['quantidade'] -= quant;
                    window.alert('operação realizada com sucesso!');

                }
            }
            break;


        case '/addstock':
            nome = prompt('insira o nome do item a ser adicionado')
            quant = parseInt(prompt('insira a quantidade do item a ser adicionada'))
            id = estoque.length + 1

            if (window.confirm(`nome: ${nome} \r\n quantidade: ${quant} \r\n id: ${id} \r\n isso está certo?`)) {
                estoque.push({'nome': nome, 'quantidade': quant, 'id': id})
                window.alert('operação realizada com sucesso!')
            } else {
                window.alert('operação cancelada pelo usuario.')
            }
            break;   


        case '/removestock':
            id = parseInt(prompt('insira o id do item a ser removido')) - 1
            if (window.confirm(`tem certeza que deseja remover ${estoque[id]['nome']} do estoque?`)) {
                estoque.splice(id, 1)
                window.alert('operação realizada com sucesso!')
            } else {
                window.alert('operação cancelada pelo usuario.')
            }
            break;


        case '/list':
            console.clear()
            str = ''
            for (let i = 0; i < estoque.length; i++) {
                str += `Nome: ${estoque[i]['nome']} \r\n
                        Quantidade: ${estoque[i]['quantidade']} \r\n
                        Id: ${estoque[i]['id']} \r\n \r\n`
            }
            console.log(str)

            window.alert('operação realizada com sucesso! cheque o console para ler a lista (aperte ctrl + shift + i)')
            break;

            
        case '/search':
            id = parseInt(prompt('insira o id do item')) - 1
            if (id >= estoque.length || id < 0) {
                window.alert('Id invalido. Por favor, tente novamente.');
            } else {
                window.alert(`Informações do produto \r\n
                Nome: ${estoque[id]['nome']} \r\n
                Quantidade: ${estoque[id]['quantidade']} \r\n
                Id: ${id + 1}`)
            }
            break;


        case '/exit':
            window.alert('obrigado por usar nossos serviços :)');
            sus = 0
            break;


        case null:
            window.alert('obrigado por usar nossos serviços :)');
            sus = 0
            break;


        default:
            window.alert('comando invalido. Se precisar de ajuda, utilize /help')
    }
}

