const livros = require('./database')

//Pegar o input
//Se sim, mostra as categorias disponiveis e pergunta qual categoria o usuário deseja
//Se não, mostra todos os livros

const readline = require('readline-sync')

const entradaInicial = readline.question('Deseja buscar um livro filtrado por sua categoria? S/N ')

if(entradaInicial.toLocaleUpperCase() === 'S') {
    console.log('Essas são as categorias disponíveis:')
    console.log('Produtividade e estilo de vida', '/Fantasia', '/Distopia', '/Tecnologia', '/História brasileira', '/Américas')

    const entradaCategoria = readline.question('Digite a categoria que deseja:')

    const retorno = livros.filter(livro => livro.categoria === entradaCategoria)

    console.table(retorno)
} else {
    const livrosOrdenados = livros.sort((a,b) => a.id - b.id)
    console.log('Esses são todos os livros disponíveis:')
    console.table(livrosOrdenados)
}