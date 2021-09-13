const assert = require('assert');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:

// 1 - Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA

const expectedResult1 = [
    'As Crônicas de Gelo e Fogo - Fantasia - George R. R. Martin',
    'O Senhor dos Anéis - Fantasia - J. R. R. Tolkien',
    'Fundação - Ficção Científica - Isaac Asimov',
    'Duna - Ficção Científica - Frank Herbert',
    'A Coisa - Terror - Stephen King',
    'O Chamado de Cthulhu - Terror - H. P. Lovecraft',
  ];
  
  function formatedBookNames() {
    // escreva seu código aqui
    return books.map(livro => `${livro.name} - ${livro.genre} - ${livro.author.name}`)
  }
  
  assert.deepStrictEqual(formatedBookNames(), expectedResult1);

//   2 - Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade author , com o nome da pessoa autora do livro, e uma propriedade age com a idade dessa pessoa quando o livro foi lançado. O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha considerando suas idades quando o livro foi lançado.

const expectedResult2 = [
    {
      age: 31,
      author: 'Isaac Asimov',
    },
    {
      age: 38,
      author: 'H. P. Lovecraft',
    },
    {
      age: 39,
      author: 'Stephen King',
    },
    {
      age: 43,
      author: 'George R. R. Martin',
    },
    {
      age: 45,
      author: 'Frank Herbert',
    },
    {
      age: 62,
      author: 'J. R. R. Tolkien',
    },
  ];
  
  function nameAndAge() {
    // escreva seu código aqui
    const nomeEIdade = books.sort((a, b) => (a.releaseYear - a.author.birthYear) - (b.releaseYear - b.author.birthYear));
    return nomeEIdade.map(livro => ({ age: livro.releaseYear - livro.author.birthYear, author: livro.author.name }))
  }
  
  assert.deepStrictEqual(nameAndAge(), expectedResult2);

//   3 - Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.

const expectedResult3 = [
    { 
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: { name: 'George R. R. Martin', birthYear: 1948 },
      releaseYear: 1991
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
      releaseYear: 1954
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: { name: 'Isaac Asimov', birthYear: 1920 },
      releaseYear: 1951
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: { name: 'Frank Herbert', birthYear: 1920 },
      releaseYear: 1965
    }
  ];
  
  function fantasyOrScienceFiction() {
    // escreva seu código aqui
    return books.filter(livro => livro.genre === "Fantasia" || livro.genre === "Ficção Científica")
  }
  
  books.sort((a, b) => a.id - b.id)
  assert.deepStrictEqual(fantasyOrScienceFiction(), expectedResult3);

//   4 - Crie um array ordenado pelos livros com mais de 60 anos de publicação e ordene-o pelo livro mais velho.

const expectedResult4 = [
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: { name: 'H. P. Lovecraft', birthYear: 1890 },
      releaseYear: 1928,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: { name: 'Isaac Asimov', birthYear: 1920 },
      releaseYear: 1951,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
      releaseYear: 1954,
    },
  ];
  
  function oldBooksOrdered() {
    // escreva seu código aqui
    return books.sort((a, b) => a.releaseYear - b.releaseYear).filter(livro => livro.releaseYear < 1960);    
  }
  
  assert.deepStrictEqual(oldBooksOrdered(), expectedResult4);
  books.sort((a, b) => a.id - b.id)

//   5 - Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.

const expectedResult5 = [
    'Frank Herbert',
    'George R. R. Martin',
    'Isaac Asimov',
    'J. R. R. Tolkien',
  ];
  
  function fantasyOrScienceFictionAuthors() {
    // escreva seu código aqui
    return books.filter(livro => livro.genre === "Ficção Científica" || livro.genre === "Fantasia").map(livro => livro.author.name).sort()
  }
  
  assert.deepStrictEqual(fantasyOrScienceFictionAuthors(), expectedResult5);

//   6 - Crie um array com o nome de todos os livros com mais de 60 anos de publicação.

const expectedResult6 = [
    'O Senhor dos Anéis',
    'Fundação',
    'O Chamado de Cthulhu',
  ];
  
  function oldBooks() {
    // escreva seu código aqui
    return books.filter(livro => livro.releaseYear < 1960).map(livro => livro.name)
  }
  
  assert.deepStrictEqual(oldBooks(), expectedResult6);

//   7 - Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.

const expectedResult7 = 'O Senhor dos Anéis';

function authorWith3DotsOnName() {
  // escreva seu código aqui
  return books.find(livro => (livro.author.name.split(" ").filter(nome => nome.endsWith(".")).length === 3)).name;
}

assert.deepStrictEqual(authorWith3DotsOnName(), expectedResult7);
