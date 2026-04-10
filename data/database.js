// =============================================================
// data/database.js — Banco de Dados em Memória
// =============================================================
// O que é isso?
//   Em vez de usar um banco de dados real (como MySQL ou MongoDB),
//   guardamos os dados aqui mesmo, dentro de arrays do JavaScript.
//   Isso funciona enquanto o servidor está ligado.
//   Quando o servidor reinicia, os dados voltam para o estado inicial.
//
// Por que usar isso nas aulas?
//   Simplifica o aprendizado! Não precisamos instalar e configurar
//   um banco de dados externo. O foco é aprender a API e os Middlewares.
// =============================================================

// ─── Tabela de Categorias ─────────────────────────────────────
// Cada categoria agrupa produtos relacionados no cardápio.
let categorias = [
    { id: 1, nome: "Sorvetes" },
    { id: 2, nome: "Milkshakes" },
    { id: 3, nome: "Extras" },
    { id: 4, nome: "Picolés" },
    { id: 5, nome: "Açaís" }
];

// ─── Tabela de Produtos ───────────────────────────────────────
// Cada produto tem um ID único, pertence a uma categoria (categoriaId),
// e possui nome, descrição, preço e o nome do arquivo de imagem.
let produtos = [
    // 1 - Sorvetes
  {
    id: 1,
    categoriaId: 1,
    nome: "Laços de Baunilha",
    descricao: "Sorvete cremoso de baunilha selecionada.",
    preco: 29.90,
    imagem: "https://i.pinimg.com/736x/fa/5e/4c/fa5e4ca5d567e65aa0f8dd5ac59ab091.jpg"
  },
  {
    id: 2,
    categoriaId: 1,
    nome: "Laços de Chocolate",
    descricao: "Sorvete intenso e aveludado de chocolate.",
    preco: 29.90,
    imagem: "https://i.pinimg.com/736x/d9/74/57/d9745787786a1b0d1128ea5b43fcef0b.jpg"
  },
  {
    id: 3,
    categoriaId: 1,
    nome: "Laços de Morango",
    descricao: "Sorvete refrescante de morango com pedaços da fruta.",
    preco: 29.90,
    imagem: "https://i.pinimg.com/1200x/61/93/1c/61931c5be6fd28bf8408128f6c7ae634.jpg"
  },
  {
    id: 4,
    categoriaId: 1,
    nome: "Laços Tropicais",
    descricao: "Sorvete cremoso de coco com toque refrescante.",
    preco: 15.00,
    imagem: "https://i.pinimg.com/736x/34/d6/51/34d6516727f19f9ca29bb748808d48be.jpg"
  },
  {
    id: 5,
    categoriaId: 1,
    nome: "Laços do Verão",
    descricao: "Sorvete de abacaxi levemente ácido.",
    preco: 120.00,
    imagem: "https://i.pinimg.com/736x/c4/5d/0a/c45d0ac2e6278ebede0bf7729576805d.jpg"
  },
  {
    id: 6,
    categoriaId: 1,
    nome: "Laços de Ouro",
    descricao: "Baunilha com calda de caramelo e crocante de castanhas.",
    preco: 45.00,
    imagem: "https://cdn.chefclub.tools/uploads/recipes/cover-thumbnail/cf9f7e2d-1b3a-483f-b682-6f6f7bfb119d.jpg"
  },
  {
    id: 7,
    categoriaId: 1,
    nome: "Laços Trufados",
    descricao: " Chocolate meio amargo com recheio cremoso de trufa.",
    preco: 45.00,
    imagem: "https://i.pinimg.com/736x/bb/77/2d/bb772d46a7cca052a3e5828c947fac0a.jpg"
  },


  // 2 - Milkshakes
  {
    id: 8,
    categoriaId: 2,
    nome: "Laços de Chocolate Cremoso",
    descricao: "Milkshake de chocolate intenso com chantilly.",
    preco: 18.00,
    imagem: "https://i.pinimg.com/736x/87/17/4a/87174a7f303abed8af3f85a138dc4176.jpg"
  },
  {
    id: 9,
    categoriaId: 2,
    nome: "Laços de Baunilha Doce",
    descricao: "Milkshake suave e aromático de baunilha.",
    preco: 18.00,
    imagem: "https://i.pinimg.com/736x/1c/71/28/1c7128bdd5db1f5ac7c7e5c32041bacf.jpg"
  },
  {
    id: 10,
    categoriaId: 2,
    nome: "Laço Rosa de Morango",
    descricao: "Milkshake cremoso de morango com calda especial.",
    preco: 18.00,
    imagem: "https://i.pinimg.com/1200x/6b/34/31/6b3431247b8d7c5df2c0956c9afaa174.jpg"
  },
  {
    id: 11,
    categoriaId: 2,
    nome: "Laço Trufado Supremo",
    descricao: "Milkshake de chocolate meio amargo com ganache.",
    preco: 22.00,
    imagem: "https://i.pinimg.com/736x/e9/4b/cf/e94bcf62b30827c59287d2efcef8513e.jpg"
  },
  {
    id: 12,
    categoriaId: 2,
    nome: "Laço Tropical Gelado",
    descricao: "Coco refrescante e cremoso na medida certa.",
    preco: 18.00,
    imagem: "https://i.pinimg.com/736x/f4/8f/f6/f48ff6af9e30cc1f2a296bbd90b542f1.jpg"
  },
  {
    id: 13,
    categoriaId: 2,
    nome: "Laços de Avelã Encantada",
    descricao: "Creme de avelã batido com pedaços crocantes.",
    preco: 22.00,
    imagem: "https://i.pinimg.com/1200x/ed/10/82/ed1082bd7f1fe19d44cd91119bb99af1.jpg"
  },
  {
     id: 14,
    categoriaId: 2,
    nome: "Laços de Cookies & Amor",
    descricao: "Morango com toque de chocolate branco.",
    preco: 22.00,
    imagem: "https://i.pinimg.com/1200x/87/30/66/87306623500012ddb85f6d12ce792993.jpg"
  },

  // 3 - Extras
  {
     id: 15,
    categoriaId: 3,
    nome: "Borda recheada",
    descricao: "Adicional de borda recheada para milkshakes.",
    preco: 4.00,
    imagem: "https://source.unsplash.com/600x400/?chocolate,syrup"
  },
  {
     id: 16,
    categoriaId: 3,
    nome: "Chantilly extra",
    descricao: "Porção extra de chantilly.",
    preco: 3.00,
    imagem: "https://i.pinimg.com/1200x/22/87/b7/2287b7c17637c5378cb5f62851a33bcb.jpg"
  },
  {
    id: 17,
    categoriaId: 3,
    nome: "Calda extra",
    descricao: "Porção extra de calda.",
    preco: 3.00,
    imagem: "https://i.pinimg.com/736x/e5/d5/67/e5d567d9e6706cb6cd327ad45e3549ab.jpg"
  },
  {
    id: 18,
    categoriaId: 3,
    nome: "Topping especial",
    descricao: "Topping especial para sorvetes e milkshakes.",
    preco: 3.00,
    imagem: "https://i.pinimg.com/736x/1b/6c/76/1b6c76ce2bd32de04e1bff32ac57a52e.jpg"
  },



  // 4 - Picolés
  {
    id: 19,
    categoriaId: 4,
    nome: "Lacinho de Verão",
    descricao: "Picolé leve e refrescante de morango.",
    preco: 6.50,
    imagem: "https://i.pinimg.com/1200x/5b/09/7a/5b097aaed4c9372078aeff4388e7051f.jpg"
  },
  {
    id: 20,
    categoriaId: 4,
    nome: "Fita Tropical",
    descricao: "Abacaxi docinho com toque cítrico equilibrado",
    preco: 6.50,
    imagem: "https://i.pinimg.com/736x/94/98/26/94982601eaf0dfc96a6d7186a80fa2bf.jpg"
  },
  {
    id: 21,
    categoriaId: 4,
    nome: "Nó de Chocolate Belga",
    descricao: "Picolé cremoso de chocolate intenso.",
    preco: 8.00,
    imagem: "https://i.pinimg.com/1200x/5e/04/57/5e0457524440903c19b4755018c16a1e.jpg"
  },
  {
    id: 22,
    categoriaId: 4,
    nome: "Laço Surpresa Doce",
    descricao: "Picolé com cobertura de chocolate e recheio cremoso.",
    preco: 10.00,
    imagem: "https://i.pinimg.com/1200x/db/2f/70/db2f70e06dd4ffd1851ab687c45900e4.jpg"
  },

  // 5 - Açaí
  {
    id: 23,
    categoriaId: 5,
    nome: "Açaí 300ml",
    descricao: "Açaí cremoso com até 3 acompanhamentos grátis.",
    preco: 12.00,
    imagem: "https://i.pinimg.com/736x/9e/d2/d4/9ed2d454faaaac131339966efbab372c.jpg"
  },
  {
    id: 24,
    categoriaId: 5,
    nome: "Laço Roxo Tradicional",
    descricao: "Açaí com banana, granola e leite condensado.",
    preco: 24.00,
    imagem: "https://i.pinimg.com/736x/55/5e/54/555e54d0dee2a24eefbe1cde10cdd8d4.jpg"
  },
  {
    id: 25,
    categoriaId: 5,
    nome: "Taça Grande Laço Supremo",
    descricao: "700ml de açaí com 5 acompanhamentos e chantilly.",
    preco: 30.00,
    imagem: "https://i.pinimg.com/1200x/bf/83/75/bf83757e1bafd9d846f11cd6f96e1401.jpg"
  }
];

// ─── Exportação dos dados ─────────────────────────────────────
// Exportamos as duas variáveis num único objeto para que outros
// arquivos (como as rotas) possam importar e usar esses dados.
module.exports = { categorias, produtos };
