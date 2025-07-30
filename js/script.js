// =======================
// Configurações iniciais
// =======================
const elementos = {
  btnMenuMobile: document.getElementById('btn-menu-carrinho'),
  carrinhoDiv: document.getElementById('carrinho'),
  btnLimpar: document.getElementById('limpar-carrinho'),
  btnFecharCarrinho: document.getElementById('carrinho-fechar'),
  itensCarrinho: document.getElementById('itens-carrinho'),
  total: document.getElementById('total'),
  btnFinalizar: document.getElementById('finalizar-pedido'),
  produtosContainer: document.getElementById('produtos'),

  // Elementos do menu lateral
  botaoMenuLateral: document.getElementById('botao-menu-lateral'),
  menuLateral: document.getElementById('menu-lateral'),
  fecharMenuLateral: document.getElementById('fechar-menu') // Renomeado para evitar confusão
};


// =======================
// Produtos (Seus produtos completos aqui)
// =======================
const produtos = [
  { secao: "Refrigerantes Antarctica" },
 {id:"12001",
    nome:"GUARANÁ BLACK ZERO LATA 350ML",
    precoUnidade:1.16,
    precoFardo:13.92,
    quantidadeFardo:6,
    img:"img/12001.jpg",
    temUnidade: false,   
    temFardo: true  
 },
  {
    id: "12002",
    nome: "GUARANÁ BLACK ZERO 2L",
    precoUnidade: 3.78,
    precoFardo: 22.68,
    quantidadeFardo: 6,
    img: "img/12002.jpg",
    
    temUnidade: false,   
    temFardo: true 
},
   {
    id: "11000",
    nome: "GUARANÁ ZERO 600ML",
    precoUnidade: 1.99,
    precoFardo: 23.88,
    quantidadeFardo: 10,
    img: "img/1100.jpg",
    temUnidade: false,   
    temFardo: true
  },
   {
    id: "11001",
    nome: "GUARANÁ ZERO 1.5L",
    precoUnidade: 3.87,
    precoFardo: 23.22,
    quantidadeFardo: 6,
    img: "img/11001.jpg",
    temUnidade: false,   
    temFardo: true
  },
   {
    id: "11002",
    nome: "GUARANÁ ZERO 2L",
    precoUnidade: 4.54,
    precoFardo: 27.24,
    quantidadeFardo: 6,
    img: "img/11002.jpg",
    temUnidade: false,   
    temFardo: true
  },
   {
    id: "11101",
    nome: "GUARANÁ PET 1L",
    precoUnidade: 1.79,
    precoFardo: 21.48,
    quantidadeFardo: 6,
    img: "img/11101.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "11102",
    nome: "GUARANÁ RV 290ML",
    precoUnidade: 1.69,
    precoFardo: 20.28,
    quantidadeFardo: 24,
    img: "img/11102.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "11103",
    nome: "GUARANÁ RV 1L",
    precoUnidade: 1.80,
    precoFardo: 21.60,
    quantidadeFardo: 6,
    img: "img/11103.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "11104",
    nome: "GUARANÁ PET 237ML",
    precoUnidade: 0.89,
    precoFardo: 10.68,
    quantidadeFardo: 12,
    img: "img/11104.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "11105",
    nome: "GUARANÁ PET 200ML",
    precoUnidade: 0.54,
    precoFardo: 6.48,
    quantidadeFardo: 12,
    img: "img/11105.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "11106",
    nome: "GUARANÁ PET 500ML",
    precoUnidade: 1.77,
    precoFardo: 21.24,
    quantidadeFardo: 10,
    img: "img/11106.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "11107",
    nome: "GUARANÁ PET 600ML",
    precoUnidade: 2.31,
    precoFardo: 27.72,
    quantidadeFardo: 10,
    img: "img/11107.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "11108",
    nome: "GUARANÁ PET 1.5L",
    precoUnidade: 2.90,
    precoFardo: 17.40,
    quantidadeFardo: 6,
    img: "img/11108.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "11109",
    nome: "GUARANÁ PET 2L",
    precoUnidade: 4.99,
    precoFardo: 29.94,
    quantidadeFardo: 6,
    img: "img/11109.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "11110",
    nome: "GUARANÁ PET 2.250ML",
    precoUnidade: 5.50,
    precoFardo: 33.00,
    quantidadeFardo: 6,
    img: "img/11110.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "11111",
    nome: "GUARANÁ ZERO 2.5L",
    precoUnidade: 5.00,
    precoFardo: 30.00,
    quantidadeFardo: 6,
    img: "img/11111.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "11112",
    nome: "GUARANÁ PET 3.3L",
    precoUnidade: 6.97,
    precoFardo: 41.82,
    quantidadeFardo: 6,
    img: "img/11112.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "11113",
    nome: "GUARANÁ PET 3L",
    precoUnidade: 5.76,
    precoFardo: 34.56,
    quantidadeFardo: 6,
    img: "img/11113.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "11114",
    nome: "GUARANÁ LATA 350ML",
    precoUnidade: 1.69,
    precoFardo: 20.28,
    quantidadeFardo: 12,
    img: "img/11114.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "11115",
    nome: "GUARANÁ LATA 269ML",
    precoUnidade: 0.99,
    precoFardo: 14.85,
    quantidadeFardo: 12,
    img: "img/11115.jpg",
    temUnidade: false,   
    temFardo: true
  },
  { secao: "Refrigerantes Coca-Cola" },
 {
    id: "12100",
    nome: "Coca-Cola Zero Lata 350ml",
    precoUnidade: 1.23,
    precoFardo: 14.76,
    quantidadeFardo: 12,
    img: "img/12100.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "12101",
    nome: "Coca-Cola Pet 2l",
    precoUnidade: 3.84,
    precoFardo: 23.04,
    quantidadeFardo: 6,
    img: "img/12101.jpg",
    temUnidade: false,   
    temFardo: true
  },
   {
    id: "12102",
    nome: "Coca-Cola Zero Pet 600ml",
    precoUnidade: 2.05,
    precoFardo: 24.60,
    quantidadeFardo: 10,
    img: "img/12102.jpg",
    temUnidade: false,   
    temFardo: true
  },
   {
    id: "12103",
    nome: "Coca-Cola Zero Pet 1.5l",
    precoUnidade: 4.02,
    precoFardo: 24.12,
    quantidadeFardo: 6,
    img: "img/12103.jpg",
    temUnidade: false,   
    temFardo: true
  },
   {
    id: "12104",
    nome: "Coca-Cola Zero 2l",
    precoUnidade: 4.69,
    precoFardo: 28.14,
    quantidadeFardo: 6,
    img: "img/12104.jpg",
    temUnidade: false,   
    temFardo: true
  },
   {
    id: "12105",
    nome: "Coca-Cola Pet 1l",
    precoUnidade: 2.12,
    precoFardo: 25.44,
    quantidadeFardo: 6,
    img: "img/12105.jpg",
    temUnidade: false,   
    temFardo: true
  },
   {
    id: "12106",
    nome: "Coca-Cola RV 290ML",
    precoUnidade: 1.69,
    precoFardo: 20.28,
    quantidadeFardo: 24,
    img: "img/12106.jpg",
    temUnidade: false,   
    temFardo: true
  },
   {
    id: "12107",
    nome: "Coca-Cola RV 1L",
    precoUnidade: 1.80,
    precoFardo: 21.60,
    quantidadeFardo: 6,
    img: "img/12107.jpg",
    temUnidade: false,   
    temFardo: true
  },
   {
    id: "12108",
    nome: "Coca-Cola Pet 237ml",
    precoUnidade: 0.99,
    precoFardo: 11.88,
    quantidadeFardo: 12,
    img: "img/12108.jpg",
    temUnidade: false,   
    temFardo: true
  },
   {
    id: "12109",
    nome: "Coca-Cola Pet 200ml",
    precoUnidade: 0.54,
    precoFardo: 6.48,
    quantidadeFardo: 12,
    img: "img/12109.jpg",
    temUnidade: false,   
    temFardo: true
  },
   {
    id: "12110",
    nome: "Coca-Cola Pet 600ml",
    precoUnidade: 2.45,
    precoFardo: 29.40,
    quantidadeFardo: 10,
    img: "img/12110.jpg",
    temUnidade: false,   
    temFardo: true
  },
   {
    id: "12111",
    nome: "Coca-Cola Pet 1.5l",
    precoUnidade: 2.98,
    precoFardo: 17.88,
    quantidadeFardo: 6,
    img: "img/12111.jpg",
    temUnidade: false,   
    temFardo: true
  },
   {
    id: "12112",
    nome: "Coca-Cola Pet 2l",
    precoUnidade: 5.05,
    precoFardo: 30.30,
    quantidadeFardo: 6,
    img: "img/12112.png",
    temUnidade: false,   
    temFardo: true
  },
   {
    id: "12113",
    nome: "Coca-Cola Pet 2.250l",
    precoUnidade: 5.29,
    precoFardo: 31.74,
    quantidadeFardo: 6,
    img: "img/12113.jpg",
    temUnidade: false,   
    temFardo: true
  },
   {
    id: "12114",
    nome: "Coca-Cola Pet 3300L",
    precoUnidade: 5.57,
    precoFardo: 33.42,
    quantidadeFardo: 6,
    img: "img/12114.jpg",
    temUnidade: false,   
    temFardo: true
  },
   {
    id: "12115",
    nome: "Coca-Cola Lata 350ml",
    precoUnidade: 1.99,
    precoFardo: 23.88,
    quantidadeFardo: 12,
    img: "img/12115.jpg",
    temUnidade: false,   
    temFardo: true
  },
   {
    id: "12116",
    nome: "Coca-Cola Lata 269ml",
    precoUnidade: 1.49,
    precoFardo: 17.88,
    quantidadeFardo: 12,
    img: "img/12116.jpg",
    temUnidade: false,   
    temFardo: true
  },

  { secao: "Refrigerantes Fanta/Kuat/Schweppes" },
  {
    id: "13001",
    nome: "Fanta Laranja Pet RV 2l",
    precoUnidade: 3.24,
    precoFardo: 19.44,
    quantidadeFardo: 6,
    img: "img/13001.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "13002",
    nome: "Fanta Laranja Pet 600ml",
    precoUnidade: 2.41,
    precoFardo: 14.46,
    quantidadeFardo: 10,
    img: "img/13002.jpg",
    temUnidade: false,   
    temFardo: true
  },
   {
    id: "13003",
    nome: "Fanta Laranja Pet 1.5l",
    precoUnidade: 2.99,
    precoFardo: 17.94,
    quantidadeFardo: 6,
    img: "img/13003.jpg",
    temUnidade: false,   
    temFardo: true
  },
   {
    id: "13004",
    nome: "Fanta Laranja Pet 2l",
    precoUnidade: 3.19,
    precoFardo: 19.14,
    quantidadeFardo: 6,
    img: "img/13004.jpg",
    temUnidade: false,   
    temFardo: true
  },
   {
    id: "13005",
    nome: "Fanta Laranja Lata 269ml",
    precoUnidade: 1.49,
    precoFardo: 17.88,
    quantidadeFardo: 12,
    img: "img/13005.jpg",
    temUnidade: false,   
    temFardo: true
  },
   {
    id: "13006",
    nome: "Fanta Laranja Lata 350ML",
    precoUnidade: 1.79,
    precoFardo: 21.48,
    quantidadeFardo: 12,
    img: "img/13006.jpg",
    temUnidade: false,   
    temFardo: true
  },
   {
    id: "13007",
    nome: "Fanta Maçã Verde Pet 2l",
    precoUnidade: 3.09,
    precoFardo: 18.54,
    quantidadeFardo: 6,
    img: "img/13007.jpg",
    temUnidade: false,   
    temFardo: true
  },
   {
    id: "13008",
    nome: "Fanta Maçã Verde Lata 350ml",
    precoUnidade: 1.29,
    precoFardo: 15.48,
    quantidadeFardo: 12,
    img: "img/13008.jpg",
    temUnidade: false,   
    temFardo: true
  },
   {
    id: "13009",
    nome: "Fanta Uva 1.5l",
    precoUnidade: 2.99,
    precoFardo: 17.94,
    quantidadeFardo: 6,
    img: "img/13009.jpg",
    temUnidade: false,   
    temFardo: true
  },
   {
    id: "13010",
    nome: "Fanta Uva Pet 2l",
    precoUnidade: 3.12,
    precoFardo: 18.72,
    quantidadeFardo: 6,
    img: "img/13010.jpg",
    temUnidade: false,   
    temFardo: true
  },
   {
    id: "13011",
    nome: "Fanta Uva Lata 350ML",
    precoUnidade: 1.59,
    precoFardo: 19.08,
    quantidadeFardo: 12,
    img: "img/13011.jpg",
    temUnidade: false,   
    temFardo: true
  },
   {
    id: "13012",
    nome: "Kuat Lata 350ml",
    precoUnidade: 1.59,
    precoFardo: 19.08,
    quantidadeFardo: 12,
    img: "img/13012.jpg",
    temUnidade: false,   
    temFardo: true
  },
   {
    id: "13014",
    nome: "Schweppes Citrus Pet 1.5l",
    precoUnidade: 4.03,
    precoFardo: 24.18,
    quantidadeFardo: 6,
    img: "img/13014.jpg",
    temUnidade: false,   
    temFardo: true
  },
   {
    id: "13015",
    nome: "Schweppes Citrus Lata 350ml",
    precoUnidade: 1.99,
    precoFardo: 23.88,
    quantidadeFardo: 12,
    img: "img/13015.jpg",
    temUnidade: false,   
    temFardo: true
  },
   {
    id: "13016",
    nome: "Schweppes Tônica Lata 350ml",
    precoUnidade: 1.97,
    precoFardo: 23.64,
    quantidadeFardo: 12,
    img: "img/13016.jpg",
    temUnidade: false,   
    temFardo: true
  },

  { secao: "Refrigerantes Pepsi" },
  {
    id: "13500",
    nome: "Pepsi Cola Pet 237ml",
    precoUnidade: 1.05,
    precoFardo: 12.60,
    quantidadeFardo: 12,
    img: "img/13500.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "13501",
    nome: "Pepsi Cola Pet 600ml",
    precoUnidade: 2.24,
    precoFardo: 26.88,
    quantidadeFardo: 10,
    img: "img/13501.jpg",
    temUnidade: false,   
    temFardo: true
  },
   {
    id: "13502",
    nome: "Pepsi Cola Pet 1.5l",
    precoUnidade: 3.36,
    precoFardo: 20.16,
    quantidadeFardo: 6,
    img: "img/13502.jpg",
    temUnidade: false,   
    temFardo: true
  },
   {
    id: "13503",
    nome: "Pepsi Cola Pet 2l",
    precoUnidade: 3.76,
    precoFardo: 22.56,
    quantidadeFardo: 6,
    img: "img/13503.jpg",
    temUnidade: false,   
    temFardo: true
  },
   {
    id: "13504",
    nome: "Pepsi Cola Pet 2.5l",
    precoUnidade: 4.68,
    precoFardo: 28.06,
    quantidadeFardo: 6,
    img: "img/13504.jpg",
    temUnidade: false,   
    temFardo: true
  },
   {
    id: "13505",
    nome: "Pepsi Cola Pet 3.3l",
    precoUnidade: 5.40,
    precoFardo: 32.40,
    quantidadeFardo: 6,
    img: "img/13505.jpg",
    temUnidade: false,   
    temFardo: true
  },
   {
    id: "13506",
    nome: "Pepsi Cola Lata 269ml",
    precoUnidade: 1.09,
    precoFardo: 16.35,
    quantidadeFardo: 12,
    img: "img/13506.jpg",
    temUnidade: false,   
    temFardo: true
  },

  { secao: "Refrigerantes Diversos" },
  {
    id: "13700",
    nome: "Soda Limonada RV 290ml",
    precoUnidade: 1.36,
    precoFardo: 16.32,
    quantidadeFardo: 24,
    img: "img/13700.png",
    temUnidade: false,   
    temFardo: true
  },
   {
    id: "13701",
    nome: "Soda Limonada Pet 200ml",
    precoUnidade: 0.57,
    precoFardo: 6.84,
    quantidadeFardo: 12,
    img: "img/13701.jpg",
    temUnidade: false,   
    temFardo: true
  },
   {
    id: "13702",
    nome: "Soda Limonada Pet 1l",
    precoUnidade: 1.89,
    precoFardo: 11.34,
    quantidadeFardo: 6,
    img: "img/13702.jpg",
    temUnidade: false,   
    temFardo: true
  },
   {
    id: "13703",
    nome: "Soda Limonada Pet 1.5l",
    precoUnidade:2.70 ,
    precoFardo: 16.20,
    quantidadeFardo: 6,
    img: "img/13703.jpg",
    temUnidade: false,   
    temFardo: true
  },
   {
    id: "13704",
    nome: "Soda Limonada Diet Lata 350ml",
    precoUnidade: 3.01,
    precoFardo: 36.12,
    quantidadeFardo: 12,
    img: "img/13704.jpg",
    temUnidade: false,   
    temFardo: true
  },
   {
    id: "13705",
    nome: "Sukita Laranja RV 290ml",
    precoUnidade: 1.42,
    precoFardo: 17.04,
    quantidadeFardo: 24,
    img: "img/13705.png",
    temUnidade: false,   
    temFardo: true
  },
   {
    id: "13706",
    nome: "Sukita Laranja Pet 200ml",
    precoUnidade: 0.55,
    precoFardo: 6.60,
    quantidadeFardo: 12,
    img: "img/13706.jpg",
    temUnidade: false,   
    temFardo: true
  },
   {
    id: "13707",
    nome: "Sukita Laranja Pet 1l",
    precoUnidade: 2.54,
    precoFardo: 15.24,
    quantidadeFardo: 6,
    img: "img/13707.jpg",
    temUnidade: false,   
    temFardo: true
  },
   {
    id: "13708",
    nome: "Sukita Laranja Pet 1.5l",
    precoUnidade: 2.70,
    precoFardo: 16.20,
    quantidadeFardo: 6,
    img: "img/13708.jpg",
    temUnidade: false,   
    temFardo: true
  },
   {
    id: "13709",
    nome: "Sukita Laranja Pet 2.5l",
    precoUnidade: 2.09,
    precoFardo: 12.54,
    quantidadeFardo: 6,
    img: "img/13709.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "13710",
    nome: "Sukita Uva Lata 350ml",
    precoUnidade: 1.31,
    precoFardo: 15.72,
    quantidadeFardo: 12,
    img: "img/13710.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "13711",
    nome: "Soda Limonada 237ml",
    precoUnidade: 0.79,
    precoFardo: 9.48,
    quantidadeFardo: 12,
    img: "img/13711.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "13712",
    nome: "Soda Limonada 600ml",
    precoUnidade: 2.11,
    precoFardo: 25.32,
    quantidadeFardo: 10,
    img: "img/13712.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "13713",
    nome: "Soda Limonada 2l",
    precoUnidade: 3.60,
    precoFardo: 21.60,
    quantidadeFardo: 6,
    img: "img/13713.jpg",
    temUnidade: false,   
    temFardo: true
  },
   {
    id: "13714",
    nome: "Soda Limonada Lata 350ml",
    precoUnidade: 1.07,
    precoFardo: 12.84,
    quantidadeFardo: 12,
    img: "img/13714.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "13715",
    nome: "Soda Limonada Zero Pet 2l",
    precoUnidade: 4.20,
    precoFardo: 25.20,
    quantidadeFardo: 6,
    img: "img/13715.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "13716",
    nome: "Soda Limonada Zero Lata 350ml",
    precoUnidade: 1.08,
    precoFardo: 12.96,
    quantidadeFardo: 12,
    img: "img/13716.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "13717",
    nome: "Sukita Laranja Pet 237ml",
    precoUnidade: 0.79,
    precoFardo: 9.48,
    quantidadeFardo: 12,
    img: "img/13717.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "13718",
    nome: "Sukita Laranja Pet 600ml",
    precoUnidade: 2.05,
    precoFardo: 24.60,
    quantidadeFardo: 10,
    img: "img/13718.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "13719",
    nome: "Sukita Laranja Pet 2l",
    precoUnidade: 3.58,
    precoFardo: 21.48,
    quantidadeFardo: 6,
    img: "img/13719.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "13720",
    nome: "Sukita Laranja Lata 350ml",
    precoUnidade: 0.89,
    precoFardo: 10.68,
    quantidadeFardo: 12,
    img: "img/13720.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "13721",
    nome: "Sukita Uva Pet 237ml",
    precoUnidade: 0.79,
    precoFardo: 9.48,
    quantidadeFardo: 12,
    img: "img/13721.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "13722",
    nome:"Sukita Uva Pet 2l",
    precoUnidade:4.29,
    precoFardo:25.74,
    quantidadeFardo:6,
    img:"img/13722.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "13723",
    nome: "Guaraná Baré TutiFruit Pet 2l",
    precoUnidade: 3.75,
    precoFardo: 22.50,
    quantidadeFardo: 6,
    img: "img/13723.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "13724",
    nome: "Guaraná Baré Tutifruit Lata 350ml",
    precoUnidade: 1.36,
    precoFardo: 16.32,
    quantidadeFardo: 12,
    img: "img/13724.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "13725",
    nome: "H2OH! Limão Pet 500ml",
    precoUnidade: 2.19,
    precoFardo: 26.28,
    quantidadeFardo: 10,
    img: "img/13725.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "13726",
    nome: "H2OH! Limão Pet 1.5l",
    precoUnidade: 3.68,
    precoFardo: 22.08,
    quantidadeFardo: 6,
    img: "img/13726.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "13727",
    nome: "H2OH! LImão e maça Pet 500ml",
    precoUnidade: 1.68,
    precoFardo: 10.08,
    quantidadeFardo: 10,
    img: "img/13727.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "13728",
    nome: "H2OH! Citrus Pet 500ml",
    precoUnidade: 2.19,
    precoFardo: 26.28,
    quantidadeFardo: 10,
    img: "img/13728.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "13729",
    nome: "H2OH! Citrus Pet 1.5l",
    precoUnidade: 3.31,
    precoFardo: 19.86,
    quantidadeFardo: 6,
    img: "img/13729.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "13730",
    nome: "H2OH! Larancini Pet 500ml",
    precoUnidade: 1.96,
    precoFardo: 23.52,
    quantidadeFardo: 10,
    img: "img/13730.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "13731",
    nome: "H2OH! Laranja Pet 500ml",
    precoUnidade: 2.19,
    precoFardo: 26.29,
    quantidadeFardo: 10,
    img: "img/13731.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "13732",
    nome: "H2OH! Laranja Pet 1.5l",
    precoUnidade: 3.31,
    precoFardo: 19.86,
    quantidadeFardo: 6,
    img: "img/13732.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "13733",
    nome: "H2OH! Limão e Maçã Pet 1.5l",
    precoUnidade: 3.31,
    precoFardo: 19.86,
    quantidadeFardo: 6,
    img: "img/13733.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "13734",
    nome: "H2OH! Limoneto Pet 1.5l",
    precoUnidade: 1.31,
    precoFardo: 15.72,
    quantidadeFardo: 6,
    img: "img/13734.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "13001",
    nome: "Sprite Lata 350ml",
    precoUnidade: 1.20,
    precoFardo: 14.40,
    quantidadeFardo: 12,
    img: "img/sprite_lata.jpg",
    temUnidade: false,
    temFardo: true
  },

  { secao: "Isotônicos" },
  // Adicione seus produtos Isotônicos aqui
   {
    id: "1400",
    nome: "Gatorade Frutas Cítricas Pet 500ml",
    precoUnidade: 3.17,
    precoFardo: 19.02,
    quantidadeFardo: 10,
    img: "img/14000.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "14001",
    nome: "Gatorade Laranja Pet 500ml",
    precoUnidade: 3.20,
    precoFardo: 19.20,
    quantidadeFardo: 10,
    img: "img/14001.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "14002",
    nome: "Gatorade Limão Pet 500ml",
    precoUnidade: 1.78,
    precoFardo: 21.06,
    quantidadeFardo: 10,
    img: "img/14002.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "14003",
    nome: "Gatorade Manga Pet 500ml",
    precoUnidade: 3.09,
    precoFardo: 18.54,
    quantidadeFardo: 10,
    img: "img/14003.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "14004",
    nome: "Gatorade Maracujá Pet 500ml",
    precoUnidade: 3.24,
    precoFardo: 19.44,
    quantidadeFardo: 10,
    img: "img/14004.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "14005",
    nome: "Gatorade Morango com Maracujá Pet 500ml",
    precoUnidade: 3.45,
    precoFardo: 20.70,
    quantidadeFardo: 10,
    img: "img/14005.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "14006",
    nome: "Gatorade Tangerina pet 500ml",
    precoUnidade:3.51 ,
    precoFardo: 21.06,
    quantidadeFardo: 10,
    img: "img/14006.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "14007",
    nome: "Gatorade Tangerina Pet 1l",
    precoUnidade: 4.52,
    precoFardo: 27.12,
    quantidadeFardo: 6,
    img: "img/14007.png",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "14008",
    nome: "Gatorade Uva Pet 500ml",
    precoUnidade: 3.29,
    precoFardo: 19.74,
    quantidadeFardo: 6,
    img: "img/14008.jpg",
    temUnidade: false,   
    temFardo: true
  },
  { secao: "Energéticos" },
  {
    id: "77710",
    nome: "Energético Bally 2L Tradicional e Sabores",
    precoUnidade: 0,
    precoFardo: 32.40,
    quantidadeFardo: 6,
    img: "img/77710.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "77711",
    nome: "Energético Red Bull 250ml Lata",
    precoUnidade: 0,
    precoFardo: 119.76,
    quantidadeFardo: 24,
    img: "img/77711.jpg",
    temUnidade: false,   
    temFardo: true
  },
   {
    id: "77712",
    nome: "Energético Monster 473ml Lata",
    precoUnidade: 0,
    precoFardo: 40.0,
    quantidadeFardo: 6,
    img: "img/77712.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "77713",
    nome: "Energético Long One 2L",
    precoUnidade: 0,
    precoFardo: 29.50,
    quantidadeFardo: 6,
    img: "img/77713.jpg",
    temUnidade: false,   
    temFardo: true
  },
  
  {
    id: "14100",
    nome: "Fusion Pet 1l",
    precoUnidade: 6.86,
    precoFardo: 41.16,
    quantidadeFardo: 6,
    img: "img/14100.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "14101",
    nome: "Fusion Lata 250ml",
    precoUnidade: 3.75,
    precoFardo: 22.50,
    quantidadeFardo: 12,
    img: "img/14101.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "14102",
    nome: "Fusion Pêssego Lata 310ml",
    precoUnidade: 3.98,
    precoFardo: 23.88,
    quantidadeFardo: 12,
    img: "img/14102.png",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "14103",
    nome: "Fusion Limão e Hortelã Lata 310ml",
    precoUnidade: 3.98,
    precoFardo: 23.88,
    quantidadeFardo: 12,
    img: "img/14103.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "14104",
    nome: "Fusion Laranja Lata 310ml",
    precoUnidade: 3.98,
    precoFardo: 23.88,
    quantidadeFardo: 12,
    img: "img/14104.jpg",
    temUnidade: false,   
    temFardo: true
  },

  { secao: "Água/Água de coco/Sucos" },
  {
    id: "15100",
    nome: "Água mineral sem gás Crystal 500ml",
    precoUnidade: 0.89,
    precoFardo: 10.68,
    quantidadeFardo: 10,
    img: "img/15100.jpg",
    temUnidade: false,   
    temFardo: true
  },
{
    id: "15101",
    nome: "Água mineral com gás Crystal 500ml",
    precoUnidade: 0.95,
    precoFardo: 11.40,
    quantidadeFardo: 10,
    img: "img/15101.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "15102",
    nome: "Água mineral sem gás Crystal 1l",
    precoUnidade: 2.75,
    precoFardo: 16.50,
    quantidadeFardo: 6,
    img: "img/15102.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "15103",
    nome: "Água mineral com gás Crystal 1l",
    precoUnidade: 2.89,
    precoFardo: 17.34,
    quantidadeFardo: 6,
    img: "img/15103.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "15104",
    nome: "Água mineral sem gás Crystal 2l",
    precoUnidade: 3.02,
    precoFardo: 18.12,
    quantidadeFardo: 6,
    img: "img/15104.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "15105",
    nome: "Água mineral com gás Crystal 2l",
    precoUnidade: 3.13,
    precoFardo: 18.78,
    quantidadeFardo: 6,
    img: "img/15105.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "15350",
    nome: "Água de coco Kero Coco 1l",
    precoUnidade: 3.99,
    precoFardo: 23.94,
    quantidadeFardo: 6,
    img: "img/15105.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "15351",
    nome: "Água de coco Kero Coco 200ml",
    precoUnidade:1.79 ,
    precoFardo: 42.96,
    quantidadeFardo: 12,
    img: "img/15350.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "15352",
    nome: "Água de coco Coco Quadrado 200ml",
    precoUnidade:1.39 ,
    precoFardo: 33.36,
    quantidadeFardo: 12,
    img: "img/15352.png",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "15550",
    nome: "Suco Dell Vale Néctar 1l Uva",
    precoUnidade: 3.79,
    precoFardo: 22.74,
    quantidadeFardo: 6,
    img: "img/15550.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "15551",
    nome: "Suco Dell Vale Néctar Maracujá 1l",
    precoUnidade: 3.79,
    precoFardo: 22.74,
    quantidadeFardo: 6,
    img: "img/15551.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "15552",
    nome: "Suco Dell Vale Néctar Laranja 1l",
    precoUnidade: 3.79,
    precoFardo: 22.74,
    quantidadeFardo: 6,
    img: "img/15552.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "15553",
    nome: "Suco Dell Vale Néctar Uva Lata 290ml",
    precoUnidade: 1.99,
    precoFardo: 47.76,
    quantidadeFardo: 24,
    img: "img/15553.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "15554",
    nome: "Suco Dell Vale Néctar Maracujá Lata 290ml",
    precoUnidade: 1.99,
    precoFardo: 47.76,
    quantidadeFardo: 24,
    img: "img/15554.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "15555",
    nome: "Suco Dell Vale Néctar Laranja Lata 290ml",
    precoUnidade: 0.95,
    precoFardo: 11.40,
    quantidadeFardo: 24,
    img: "img/15555.jpg",
    temUnidade: false,   
    temFardo: true
  },
  { secao: "Cervejas Antarctica" },
  {
    id: "7000",
    nome: "Cerveja Antarctica Original GRF 600ML",
    precoUnidade: 5.42,
    precoFardo: 130.08,
    quantidadeFardo: 24,
    img: "img/7000.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "7001",
    nome: "Cerveja Antarctica Pilsen GRF 300ML",
    precoUnidade: 1.19,
    precoFardo: 28.56,
    quantidadeFardo: 24,
    img: "img/7001.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "7002",
    nome: "Cerveja Antarctica Pilsen GRF 355ML",
    precoUnidade: 2.10,
    precoFardo: 25.20,
    quantidadeFardo: 12,
    img: "imG/7002.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "7003",
    nome: "Cerveja Antarctica Pilsen GRF 600ML",
    precoUnidade: 5.23,
    precoFardo: 125.52,
    quantidadeFardo: 24,
    img: "img/7003.png",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "7004",
    nome: "Cerveja Antarctica Pilsen Lata 269ML",
    precoUnidade: 1.05,
    precoFardo: 15.75,
    quantidadeFardo: 15,
    img: "img/7004.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "7005",
    nome: "Cerveja Antarctica Pilsen Lata 350ML",
    precoUnidade: 1.77,
    precoFardo: 21.24,
    quantidadeFardo: 12,
    img: "img/7005.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "7006",
    nome: "Cerveja Antarctica Pilsen Lata 473ml",
    precoUnidade: 2.44,
    precoFardo: 29.28,
    quantidadeFardo: 12,
    img: "img/7006.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "7007",
    nome: "Cerveja Antarctica Sub-zero GRF 600ML",
    precoUnidade: 3.99,
    precoFardo: 95.76,
    quantidadeFardo: 24,
    img: "img/7007.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "7008",
    nome: "Cerveja Antarctica Original Lata 350ML",
    precoUnidade: 1.77,
    precoFardo: 21.24,
    quantidadeFardo: 12,
    img: "img/7008.png",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "7009",
    nome: "Cerveja Antarctica Pilsen Lata 473ml",
    precoUnidade: 2.44,
    precoFardo: 29.28,
    quantidadeFardo: 12,
    img: "img/7010.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "7010",
    nome: "Cerveja Antarctica Pilsen GRF 1L",
    precoUnidade: 4.24,
    precoFardo: 50.88,
    quantidadeFardo: 12,
    img: "img/7010.jpg",
    temUnidade: false,   
    temFardo: true
  },
{
    id: "7011",
    nome: "Cerveja Antarctica Sub-zero GRF 600ML",
    precoUnidade: 3.99,
    precoFardo: 95.76,
    quantidadeFardo: 24,
    img: "img/7011.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "7012",
    nome: "Cerveja Antarctica Sub-zero Lata 269ML",
    precoUnidade: 1.16,
    precoFardo: 17.40,
    quantidadeFardo: 15,
    img: "img/7012.jpg",
    temUnidade: false,   
    temFardo: true
  },
{
    id: "7013",
    nome: "Cerveja Antarctica Sub-zero Lata 350ML",
    precoUnidade: 1.89,
    precoFardo: 22.68,
    quantidadeFardo: 12,
    img: "img/7013.png",
    temUnidade: false,   
    temFardo: true
  },
  { secao: "Cervejas Becks" },
  {
    id: "9001",
    nome: "Cerveja Becks GRF 275ml",
    precoUnidade: 3.15,
    precoFardo: 37.80,
    quantidadeFardo: 15,
    img: "img/9001.jpg",
    temUnidade: false,   
    temFardo: true
  },
   {
    id: "9002",
    nome: "Cerveja Becks GRF 330ml",
    precoUnidade: 3.20,
    precoFardo: 38.40,
    quantidadeFardo: 12,
    img: "img/9002.jpg",
    temUnidade: false,   
    temFardo: true
  },
 {
    id: "9003",
    nome: "Cerveja Becks Lata 350ml",
    precoUnidade: 2.74,
    precoFardo: 32.88,
    quantidadeFardo: 12,
    img: "img/9003.png",
    temUnidade: false,   
    temFardo: true
  },
  { secao: "Cervejas Heineken" },
  {
    id: "9200",
    nome: "Cerveja Heineken GRF 250ml",
    precoUnidade: 2.13,
    precoFardo: 25.56,
    quantidadeFardo: 15,
    img: "img/9200.png",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "9201",
    nome: "Cerveja Heineken GRF 330ml",
    precoUnidade: 3.12,
    precoFardo: 18.72,
    quantidadeFardo: 6,
    img: "img/9201.jpeg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "9202",
    nome: "Cerveja Heineken GRF 355ml",
    precoUnidade: 3.33,
    precoFardo: 19.98,
    quantidadeFardo: 12,
    img: "img/9202.jpg",
    temUnidade: false,   
    temFardo: true
  },
   {
    id: "1",
    nome: "Cerveja Heineken Lata 473ml",
    precoUnidade: 0,
    precoFardo: 34.99,
    quantidadeFardo: 12,
    img: "img/9202.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "152004",
    nome: "Cerveja Heineken GRF 600ml",
    precoUnidade: 6.39,
    precoFardo: 153.36,
    quantidadeFardo: 24,
    img: "img/9203.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "9204",
    nome: "Cerveja Heineken Lata 269ml",
    precoUnidade: 2.05,
    precoFardo: 16.40,
    quantidadeFardo: 15,
    img: "img/9204.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "9205",
    nome: "Cerveja Heineken Lata 350ml",
    precoUnidade: 3.02,
    precoFardo: 36.24,
    quantidadeFardo: 12,
    img: "img/9205.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "9206",
    nome: "Cerveja Heineken Barril 5l",
    precoUnidade: 48.19,
    precoFardo: 0,
    quantidadeFardo: 0,
    img: "img/9206.jpg",
    temUnidade: true,   
    temFardo: false
  },
  { secao: "Cervejas Budweiser" },
  {
    id: "9400",
    nome: "Cerveja Budweiser GRF 330ML",
    precoUnidade: 2.89,
    precoFardo: 17.34,
    quantidadeFardo: 12,
    img: "img/9400.jpg",
    temUnidade: false,   
    temFardo: true
  },
{
    id: "9401",
    nome: "Cerveja Budweiser GRF 550ML",
    precoUnidade: 4.10,
    precoFardo: 49.20,
    quantidadeFardo: 12,
    img: "img/9401.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "9402",
    nome: "Cerveja Budweiser Lata 473ML",
    precoUnidade: 3.02,
    precoFardo: 24.16,
    quantidadeFardo: 12,
    img: "img/9402.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "9403",
    nome: "Cerveja Budweiser Lata 410ML",
    precoUnidade:2.97 ,
    precoFardo: 35.64,
    quantidadeFardo: 12,
    img: "img/9403.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "9404",
    nome: "Cerveja Budweiser GRF 343ML",
    precoUnidade: 2.94,
    precoFardo: 20.58,
    quantidadeFardo: 12,
    img: "img/9404.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "9405",
    nome: "Cerveja Budweiser GRF 600ML",
    precoUnidade: 4.75,
    precoFardo: 114.00,
    quantidadeFardo: 24,
    img: "img/9405.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "9406",
    nome: "Cerveja Budweiser GRF 269ML",
    precoUnidade: 1.92,
    precoFardo: 15.36,
    quantidadeFardo: 15,
    img: "img/9406.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "9407",
    nome: "Cerveja Budweiser Lata 350ML",
    precoUnidade: 2.09,
    precoFardo: 25.08,
    quantidadeFardo: 12,
    img: "img/9407.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "9408",
    nome: "Cerveja Budweiser GRF 1L",
    precoUnidade: 6.99,
    precoFardo: 83.88,
    quantidadeFardo: 12,
    img: "img/9408.jpg",
    temUnidade: false,   
    temFardo: true
  },
  { secao: "Cervejas Skol" },
  {
    id: "7500",
    nome: "Cerveja Skol Pilsen GRF 275ml",
    precoUnidade: 2.12,
    precoFardo: 25.44,
    quantidadeFardo: 15,
    img: "img/7500.jpg",
    temUnidade: false,   
    temFardo: true
  },
   {
    id: "7501",
    nome: "Cerveja Skol Pilsen Lata 550ml",
    precoUnidade: 3.12,
    precoFardo: 37.44,
    quantidadeFardo: 12,
    img: "img/7502.jpg",
    temUnidade: false,   
    temFardo: true
  },
   {
    id: "7502",
    nome: "Cerveja Skol Pilsen GAD 473ml",
    precoUnidade: 2.99,
    precoFardo: 35.88,
    quantidadeFardo: 12,
    img: "img/7502.jpg",
    temUnidade: false,   
    temFardo: true
  },
 {
    id: "7503",
    nome: "Cerveja Skol Puro Malte GRF 275ml",
    precoUnidade: 1.89,
    precoFardo: 22.68,
    quantidadeFardo: 15,
    img: "img/7503.png",
    temUnidade: false,   
    temFardo: true
  },
   {
    id: "7504",
    nome: "Cerveja Skol Puro Malte GRF 300ml",
    precoUnidade: 1.09,
    precoFardo: 26.16,
    quantidadeFardo: 24,
    img: "img/7504.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "7505",
    nome: "Cerveja Skol Puro Malte GRF 600ml",
    precoUnidade: 4.59,
    precoFardo: 110.16,
    quantidadeFardo: 24,
    img: "img/7505.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "7506",
    nome: "Cerveja Skol Puro Malte Lata 269ml",
    precoUnidade: 1.29,
    precoFardo: 19.35,
    quantidadeFardo: 15,
    img: "img/7506.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "7507",
    nome: "Cerveja Skol Puro Malte Lata 350ml",
    precoUnidade: 1.74,
    precoFardo: 20.88,
    quantidadeFardo: 12,
    img: "img/7507.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "7508",
    nome: "Cerveja Skol Puro Malte Lata 473ml",
    precoUnidade: 2.62,
    precoFardo: 31.44,
    quantidadeFardo: 12,
    img: "img/7508.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "7509",
    nome: "Cerveja Skol Puro Malte GRF 1l",
    precoUnidade: 5.89,
    precoFardo: 70.68,
    quantidadeFardo: 12,
    img: "img/7509.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "7510",
    nome: "Cerveja Skol Pilsen GRF 300ml",
    precoUnidade: 1.59,
    precoFardo: 38.19,
    quantidadeFardo: 24,
    img: "img/7510.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "7511",
    nome: "Cerveja Skol Pilsen GRF 355ml",
    precoUnidade: 3.09,
    precoFardo: 18.54,
    quantidadeFardo: 12,
    img: "img/7511.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "7512",
    nome: "Cerveja Skol Pilsen GRF 600ml",
    precoUnidade: 4.59,
    precoFardo: 110.16,
    quantidadeFardo: 24,
    img: "img/7512.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "7513",
    nome: "Cerveja Skol Pilsen Lata 269ml",
    precoUnidade: 1.49,
    precoFardo: 22.35,
    quantidadeFardo: 15,
    img: "img/7513.jpg",
    temUnidade: false,   
    temFardo: true
  },
   {
    id: "7514",
    nome: "Cerveja Skol Pilsen Lata 350ml",
    precoUnidade: 1.82,
    precoFardo: 21.84,
    quantidadeFardo: 12,
    img: "img/7514.jpg",
    temUnidade: false,   
    temFardo: true
  },
   {
    id: "7515",
    nome: "Cerveja Skol Pilsen Lata 473ml",
    precoUnidade: 2.09,
    precoFardo: 25.08,
    quantidadeFardo: 12,
    img: "img/7515.jpg",
    temUnidade: false,   
    temFardo: true
  },
   {
    id: "7516",
    nome: "Cerveja Skol Pilsen GRF 1l",
    precoUnidade: 6.99,
    precoFardo: 83.88,
    quantidadeFardo: 12,
    img: "img/7516.jpg",
    temUnidade: false,   
    temFardo: true
  },
   {
    id: "7517",
    nome: "Cerveja Skol Ultra GRF 275ml",
    precoUnidade: 1.98,
    precoFardo: 23.76,
    quantidadeFardo: 15,
    img: "img/7517.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "7518",
    nome: "Cerveja Skol Ultra Lata 310ml",
    precoUnidade: 1.99,
    precoFardo: 23.88,
    quantidadeFardo: 24,
    img: "img/7518.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "153004",
    nome: "Cerveja Skol Pilsen Lata 269ml",
    precoUnidade: 0,
    precoFardo: 22.35,
    quantidadeFardo: 24,
    img: "img/7518.jpg",
    temUnidade: false,   
    temFardo: true
  },
  
  {
    id: "7519",
    nome: "Cerveja Skol Beats Lata 269ml",
    precoUnidade: 1.85,
    precoFardo: 27.75,
    quantidadeFardo: 15,
    img: "img/7519.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "7520",
    nome: "Cerveja Skol Beats Extreme Lata 269ml",
    precoUnidade: 1.89,
    precoFardo: 28.35,
    quantidadeFardo: 15,
    img: "img/7520.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "7521",
    nome: "Cerveja Skol Beats GRF 330ml",
    precoUnidade: 3.19,
    precoFardo: 38.28,
    quantidadeFardo: 24,
    img: "img/7521.jpg",
    temUnidade: false,   
    temFardo: true
  },
   {
    id: "7522",
    nome: "Cerveja Skol Beats Extreme GRF 313ml",
    precoUnidade: 3.33,
    precoFardo: 39.96,
    quantidadeFardo: 12,
    img: "img/7522.jpg",
    temUnidade: false,   
    temFardo: true
  },
  { secao: "Cervejas Brahma" },
   {
    id: "4100",
    nome: "Cerveja Brahma Extra Red Lager Lata 350ml",
    precoUnidade: 1.99,
    precoFardo: 23.88,
    quantidadeFardo: 12,
    img: "img/4100.png",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "4101",
    nome: "Cerveja Brahma Extra Weiss Lata 350ml",
    precoUnidade: 1.99,
    precoFardo: 23.88,
    quantidadeFardo: 12,
    img: "img/4101.png",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "4102",
    nome: "Cerveja Brahma Chopp GRF 300ml",
    precoUnidade: 1.43,
    precoFardo: 34.32,
    quantidadeFardo: 24,
    img: "img/4102.jpg",
    temUnidade: false,   
    temFardo: true
  },
   {
    id: "4103",
    nome: "Cerveja Brahma Chopp Lata 550ml",
    precoUnidade: 2.89,
    precoFardo: 34.68,
    quantidadeFardo: 12,
    img: "img/4103.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "4104",
    nome: "Cerveja Brahma Chopp Lata 473ml",
    precoUnidade: 2.76,
    precoFardo: 33.12,
    quantidadeFardo: 12,
    img: "img/4104.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "4105",
    nome: "Cerveja Brahma Chopp GRF 1l",
    precoUnidade: 5.12,
    precoFardo: 61.44,
    quantidadeFardo: 12,
    img: "img/4105.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "4106",
    nome: "Cerveja Brahma Chopp GRF 600ml",
    precoUnidade: 4.62,
    precoFardo: 110.88,
    quantidadeFardo: 24,
    img: "img/4106.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "4107",
    nome: "Cerveja Brahma Chopp Lata 269ml",
    precoUnidade: 1.55,
    precoFardo: 23.25,
    quantidadeFardo: 15,
    img: "img/4107.jpg",
    temUnidade: false,   
    temFardo: true
  },
{
    id: "4108",
    nome: "Cerveja Brahma Chopp Lata 350ml",
    precoUnidade: 1.72,
    precoFardo: 20.64,
    quantidadeFardo: 12,
    img: "img/4108.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "4109",
    nome: "Cerveja Brahma Chopp Zero GRF 355ml",
    precoUnidade: 2.55,
    precoFardo: 30.60,
    quantidadeFardo: 12,
    img: "img/4109.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "4110",
    nome: "Cerveja Brahma Chopp Zero Lata 350ml",
    precoUnidade: 2.60,
    precoFardo: 31.20,
    quantidadeFardo: 12,
    img: "img/4110.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "4111",
    nome: "Cerveja Brahma Extra Lager Lata 269ml",
    precoUnidade: 1.40,
    precoFardo: 21.00,
    quantidadeFardo: 15,
    img: "img/4111.png",
    temUnidade: false,   
    temFardo: true
  },
   {
    id: "4112",
    nome: "Cerveja Brahma Extra Lager Lata 350ml",
    precoUnidade: 2.07,
    precoFardo: 24.84,
    quantidadeFardo: 12,
    img: "img/4112.png",
    temUnidade: false,   
    temFardo: true
  },
 {
    id: "4113",
    nome: "Cerveja Brahma Extra Lager Lata 473ml",
    precoUnidade: 2.80,
    precoFardo: 33.60,
    quantidadeFardo: 12,
    img: "img/4113.jpg",
    temUnidade: false,   
    temFardo: true
  },
   {
    id: "4114",
    nome: "Cerveja Brahma Extra Dark GRF 350ml",
    precoUnidade: 1.88,
    precoFardo: 22.56,
    quantidadeFardo: 12,
    img: "img/4114.jpg",
    temUnidade: false,   
    temFardo: true
  },
   {
    id: "4115",
    nome: "Cerveja Brahma Extra Dark GRF 355ml",
    precoUnidade: 3.13,
    precoFardo: 37.56,
    quantidadeFardo: 12,
    img: "img/4115.jpg",
    temUnidade: false,   
    temFardo: true
  },
   {
    id: "4116",
    nome: "Cerveja Brahma Malzebier GRF 600ml",
    precoUnidade: 4.45,
    precoFardo: 53.40,
    quantidadeFardo: 24,
    img: "img/4116.png",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "4117",
    nome: "Cerveja Brahma Malzebier GRF 355ml",
    precoUnidade: 2.62,
    precoFardo: 31.44,
    quantidadeFardo: 12,
    img: "img/4117.png",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "4118",
    nome: "Cerveja Brahma Malzebier Lata 350ml",
    precoUnidade: 2.52,
    precoFardo: 30.24,
    quantidadeFardo: 12,
    img: "img/4118.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "4119",
    nome: "Cerveja Brahma Duplo Malte Lata 350ml",
    precoUnidade: 1.75,
    precoFardo: 21.00,
    quantidadeFardo: 12,
    img: "img/4119.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "4120",
    nome: "Cerveja Brahma Duplo Malte GRF 600ml",
    precoUnidade: 4.69,
    precoFardo: 112.56,
    quantidadeFardo: 24,
    img: "img/4120.png",
    temUnidade: false,   
    temFardo: true
  },
  { secao: "Chopp Barril" },
  {
    id: "3900",
    nome: "Chopp Brahma Claro 30l",
    precoUnidade: 379.21,
    precoFardo: 0,
    quantidadeFardo: 6,
    img: "img/3900.jpg",
    temUnidade: true,   
    temFardo: false
  },
   {
    id: "3901",
    nome: "Chopp Brahma Claro 50l",
    precoUnidade: 612.91,
    precoFardo: 0,
    quantidadeFardo: 0,
    img: "img/3901.jpg",
    temUnidade: true,   
    temFardo: false
  },
   {
    id: "3902",
    nome: "Chopp Brahma Claro 100l",
    precoUnidade: 1109.64,
    precoFardo: 0,
    quantidadeFardo: 0,
    img: "img/3902.jpg",
    temUnidade: true,   
    temFardo: false
  },
   {
    id: "3903",
    nome: "Chopp Brahma Black 30l",
    precoUnidade: 463.39,
    precoFardo: 0,
    quantidadeFardo: 0,
    img: "img/3903.jpg",
    temUnidade: true,   
    temFardo: false
  },
  { secao: "Cerveja Bohemia" },
  {
    id: "5500",
    nome: "Cerveja Bohemia Confraria GRF 315ml",
    precoUnidade: 7.50,
    precoFardo: 90.00,
    quantidadeFardo: 12,
    img: "img/5500.jpg",
    temUnidade: false,   
    temFardo: true
  },
   {
    id: "5501",
    nome: "Cerveja Bohemia Confraria GRF 550ml",
    precoUnidade: 7.76,
    precoFardo: 93.12,
    quantidadeFardo: 12,
    img: "img/5501.jpg",
    temUnidade: false,   
    temFardo: true
  },
   {
    id: "5502",
    nome: "Cerveja Bohemia Escura GRF 355ml",
    precoUnidade: 5.20,
    precoFardo: 62.40,
    quantidadeFardo: 12,
    img: "img/5502.jpg",
    temUnidade: false,   
    temFardo: true
  },
{
    id: "5503",
    nome: "Cerveja Bohemia Escura GRF 550ml",
    precoUnidade: 10.20,
    precoFardo: 122.40,
    quantidadeFardo: 12,
    img: "img/5503.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "5504",
    nome: "Cerveja Bohemia Escura Lata 350ml",
    precoUnidade: 2.50,
    precoFardo: 30.00,
    quantidadeFardo: 12,
    img: "img/5504.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "5505",
    nome: "Cerveja Bohemia Pilsen GRF 300ml",
    precoUnidade: 1.67,
    precoFardo: 40.08,
    quantidadeFardo: 24,
    img: "img/5505.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "5506",
    nome: "Cerveja Bohemia Escura Lata 269ml",
    precoUnidade: 1.57,
    precoFardo: 23.55,
    quantidadeFardo: 15,
    img: "img/5506.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "5507",
    nome: "Cerveja Bohemia Escura Lata 473ml",
    precoUnidade: 2.80,
    precoFardo: 33.60,
    quantidadeFardo: 12,
    img: "img/5507.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "5508",
    nome: "Cerveja Bohemia Weiss Trigo GRF 550ml",
    precoUnidade: 11.99,
    precoFardo: 143.88,
    quantidadeFardo: 12,
    img: "img/5508.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "5509",
    nome: "Cerveja Bohemia 838 Pale Ale GRF 300ml",
    precoUnidade: 3.90,
    precoFardo: 46.80,
    quantidadeFardo: 24,
    img: "img/5509.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "5510",
    nome: "Cerveja Bohemia Aura Lager GRF 300ml",
    precoUnidade: 3.90,
    precoFardo: 46.80,
    quantidadeFardo: 24,
    img: "img/5510.png",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "5511",
    nome: "Cerveja Bohemia 14 Weiss GRF 300ml",
    precoUnidade: 3.90,
    precoFardo: 46.80,
    quantidadeFardo: 24,
    img: "img/5511.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "5512",
    nome: "Cerveja Bohemia Bela Rosa GRF 300ml",
    precoUnidade: 3.90,
    precoFardo: 46.80,
    quantidadeFardo: 24,
    img: "img/5512.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "5513",
    nome: "Cerveja Bohemia CAARI GRF 300ml",
    precoUnidade: 3.90,
    precoFardo: 46.80,
    quantidadeFardo: 24,
    img: "img/5513.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "5514",
    nome: "Cerveja Bohemia Jabutipa GRF 300ml",
    precoUnidade: 3.90,
    precoFardo: 46.80,
    quantidadeFardo: 24,
    img: "img/5514.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "5515",
    nome: "Cerveja Bohemia Pilsen GRF 355ml",
    precoUnidade: 2.52,
    precoFardo: 30.24,
    quantidadeFardo: 12,
    img: "img/5515.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "5516",
    nome: "Cerveja Bohemia Pilsen GRF 600ml",
    precoUnidade: 5.59,
    precoFardo: 134.16,
    quantidadeFardo: 24,
    img: "img/5516.jpg",
    temUnidade: false,   
    temFardo: true
  },
{
    id: "5517",
    nome: "Cerveja Bohemia Pilsen Lata 350ml",
    precoUnidade: 1.99,
    precoFardo: 23.88,
    quantidadeFardo: 12,
    img: "img/5517.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "5518",
    nome: "Cerveja Bohemia Pilsen GRF 990ml",
    precoUnidade: 6.99,
    precoFardo: 83.88,
    quantidadeFardo: 12,
    img: "img/5518.png",
    temUnidade: false,   
    temFardo: true
  },
  { secao: "Cerveja Itaipava"},
  {
    id: "5700",
    nome: "Cerveja Itaipava Pilsen GRF 600ml",
    precoUnidade: 3.99,
    precoFardo: 95.76,
    quantidadeFardo: 24,
    img: "img/5700.png",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "5701",
    nome: "Cerveja Itaipava Pilsen GRF 1l",
    precoUnidade: 4.39,
    precoFardo: 52.68,
    quantidadeFardo: 12,
    img: "img/5701.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "5702",
    nome: "Cerveja Itaipava Pilsen Lata 269ml",
    precoUnidade: 1.39,
    precoFardo: 20.85,
    quantidadeFardo: 15,
    img: "img/5702.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "5703",
    nome: "Cerveja Itaipava Pilsen Lata 350ml",
    precoUnidade: 1.75,
    precoFardo: 21.00,
    quantidadeFardo: 12,
    img: "img/5703.png",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "5704",
    nome: "Cerveja Itaipava Pilsen Lata 473ml",
    precoUnidade: 2.03,
    precoFardo: 24.36,
    quantidadeFardo: 12,
    img: "img/5704.jpg",
    temUnidade: false,   
    temFardo: true
  },
  { secao: "Cervejas Polar"},
  {
    id: "153310",
    nome: "Cerveja Polar 473ml",
    precoUnidade:0,
    precoFardo: 26.28,
    quantidadeFardo: 12,
    img: "img/153310.jpg",
    temUnidade: false,   
    temFardo: true
  },
   {
    id: "153311",
    nome: "Cerveja Polar 1L GRF",
    precoUnidade: 0,
    precoFardo: 54.00,
    quantidadeFardo: 12,
    img: "img/153311.jpg",
    temUnidade: false,   
    temFardo: true
  },

  { secao: "Cervejas Schin"},
  {
    id: "153312",
    nome: "Cerveja Schin 473ml Lata",
    precoUnidade: 0,
    precoFardo: 24.60,
    quantidadeFardo: 12,
    img: "img/153312.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "153313",
    nome: "Cerveja Schin 350ml Lata",
    precoUnidade: 0,
    precoFardo: 17.64,
    quantidadeFardo: 12,
    img: "img/153313.jpg",
    temUnidade: false,   
    temFardo: true
  },
 {
    id: "153314",
    nome: "Cerveja Schin 1L GRF",
    precoUnidade: 0,
    precoFardo: 40.80,
    quantidadeFardo: 12,
    img: "img/153314.jpg",
    temUnidade: false,   
    temFardo: true
  },

  { secao: "Cervejas Kaiser"},
  {
    id: "152001",
    nome: "Cerveja Kaiser 600ml GRF",
    precoUnidade: 0,
    precoFardo: 102.0,
    quantidadeFardo: 24,
    img: "img/152001.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "152002",
    nome: "Cerveja Kaiser 350ml Lata",
    precoUnidade: 0,
    precoFardo: 21.49,
    quantidadeFardo: 12,
    img: "img/152002.jpg",
    temUnidade: false,   
    temFardo: true
  },
 {
    id: "152003",
    nome: "Cerveja Kaiser 473ml Lata",
    precoUnidade: 0,
    precoFardo: 22.80,
    quantidadeFardo: 12,
    img: "img/152003.jpg",
    temUnidade: false,   
    temFardo: true
  },

{ secao: "Cervejas Antarctica"},
  {
    id: "152005",
    nome: "Cerveja Antarctica Original 300ml GRF",
    precoUnidade: 0,
    precoFardo: 28.56,
    quantidadeFardo: 24,
    img: "img/152005.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "152006",
    nome: "Cerveja Antarctica Original 350ml Lata ",
    precoUnidade: 0,
    precoFardo: 21.24,
    quantidadeFardo: 12,
    img: "img/152006.jpg",
    temUnidade: false,   
    temFardo: true
  },
 {
    id: "152007",
    nome: "Cerveja Antarctica Original 269ml Lata ",
    precoUnidade: 0,
    precoFardo: 18.30,
    quantidadeFardo: 15,
    img: "img/152007.jpg",
    temUnidade: false,   
    temFardo: true
  },
   {
    id: "152008",
    nome: "Cerveja Antarctica Original 600ml GRF",
    precoUnidade: 0,
    precoFardo: 130.08,
    quantidadeFardo: 24,
    img: "img/152008.jpg",
    temUnidade: false,   
    temFardo: true
  },
   { secao: "Cervejas Império"},
  {
    id: "153001",
    nome: "Cerveja Império 473ml Lata",
    precoUnidade: 0,
    precoFardo: 27.99,
    quantidadeFardo: 12,
    img: "img/153001.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "153002",
    nome: "Cerveja Império 269ml Lata",
    precoUnidade: 0,
    precoFardo: 28.99,
    quantidadeFardo: 15,
    img: "img/153002.jpg",
    temUnidade: false,   
    temFardo: true
  },
 {
    id: "153003",
    nome: "Cerveja Império 350ml Lata",
    precoUnidade: 0,
    precoFardo: 33.60,
    quantidadeFardo: 12,
    img: "img/153003.jpg",
    temUnidade: false,   
    temFardo: true
  },
  { secao: "Cervejas Amstel"},
  {
    id: "154001",
    nome: "Cerveja Amstel 473 ML Lata",
    precoUnidade: 0,
    precoFardo: 35.88,
    quantidadeFardo: 12,
    img: "img/154001.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "154002",
    nome: "Cerveja Amstel 269 ML Lata",
    precoUnidade: 4.50,
    precoFardo: 21.00,
    quantidadeFardo: 15,
    img: "img/154002.jpg",
    temUnidade: false,   
    temFardo: true
  },
 {
    id: "154003",
    nome: "Cerveja Amstel 350 ML Lata",
    precoUnidade: 0,
    precoFardo: 28.50,
    quantidadeFardo: 24,
    img: "img/154003.jpg",
    temUnidade: false,   
    temFardo: true
  },
  
  { secao: "Cervejas Diversas"},
  {
    id: "1000",
    nome: "Cerveja Caracu GRF 300ml",
    precoUnidade: 1.10,
    precoFardo: 26.40,
    quantidadeFardo: 24,
    img: "img/1000.png",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "1011",
    nome: "Cerveja Colorado Appia GRF 300ml",
    precoUnidade: 4.50,
    precoFardo: 54.00,
    quantidadeFardo: 24,
    img: "img/1011.jpg",
    temUnidade: false,   
    temFardo: true
  },
 {
    id: "1012",
    nome: "Cerveja Colorado Cauim GRF 300ml",
    precoUnidade: 4.50,
    precoFardo: 54.00,
    quantidadeFardo: 24,
    img: "img/1012.jpg",
    temUnidade: false,   
    temFardo: true
  },
   {
    id: "1013",
    nome: "Cerveja Colorado Lager GRF 600ml",
    precoUnidade: 7.90,
    precoFardo: 94.80,
    quantidadeFardo: 24,
    img: "img/1013.jpg",
    temUnidade: false,   
    temFardo: true
  },
   {
    id: "1014",
    nome: "Cerveja Coronita Extra GRF 210ml",
    precoUnidade: 2.49,
    precoFardo: 14.94,
    quantidadeFardo: 15,
    img: "img/1014.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "1015",
    nome: "Cerveja Coronita Extra GRF 330ml",
    precoUnidade: 4.20,
    precoFardo: 25.20,
    quantidadeFardo: 12,
    img: "img/1015.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "1016",
    nome: "Cerveja Coronita Extra Nacional GRF 210ml",
    precoUnidade: 2.49,
    precoFardo: 14.94,
    quantidadeFardo: 15,
    img: "img/1016.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "1017",
    nome: "Cerveja Franziskaner Weissbier Dunkel GRF 500ml",
    precoUnidade: 20.40,
    precoFardo: 122.40,
    quantidadeFardo: 12,
    img: "img/1017.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "1018",
    nome: "Cerveja Goose Island Ipa GRF 355ml",
    precoUnidade: 6.50,
    precoFardo: 78.00,
    quantidadeFardo: 12,
    img: "img/1018.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "1019",
    nome: "Cerveja Goose Island Midway GRF 355ml",
    precoUnidade: 6.50,
    precoFardo: 78.00,
    quantidadeFardo: 12,
    img: "img/1019.png",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "1020",
    nome: "Cerveja Hoegaarden GRF 330ml",
    precoUnidade: 6.50,
    precoFardo: 78.00,
    quantidadeFardo: 12,
    img: "img/1020.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "1021",
    nome: "Cerveja Hoegaarden Grand Cru GRF 330ml",
    precoUnidade: 20.90,
    precoFardo: 250.80,
    quantidadeFardo: 12,
    img: "img/1021.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "1022",
    nome: "Cerveja Hoegaarden Rosée GRF 750ml",
    precoUnidade: 47.00,
    precoFardo: 282.00,
    quantidadeFardo: 12,
    img: "img/1022.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "1023",
    nome: "Cerveja Kona Big Wave GRF 355ml",
    precoUnidade: 6.50,
    precoFardo: 78.00,
    quantidadeFardo: 12,
    img: "img/1023.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "1024",
    nome: "Cerveja Longboard GRF 355ml",
    precoUnidade: 6.50,
    precoFardo: 78.00,
    quantidadeFardo: 12,
    img: "img/1024.png",
    temUnidade: false,   
    temFardo: true
  },
   {
    id: "1025",
    nome: "Cerveja Leffe Brune-Brown GRF 330ml",
    precoUnidade: 12.50,
    precoFardo: 250.00,
    quantidadeFardo: 12,
    img: "img/1025.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "1026",
    nome: "Cerveja Leffe Rituel 9 GRF 250ml",
    precoUnidade: 11.90,
    precoFardo: 142.80,
    quantidadeFardo: 15,
    img: "img/1026.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "1027",
    nome: "Cerveja Leffe Ruby GRF 750ml",
    precoUnidade: 33.00,
    precoFardo: 198.00,
    quantidadeFardo: 12,
    img: "img/1027.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "1028",
    nome: "Cerveja Liber GRF 355ml",
    precoUnidade: 2.16,
    precoFardo: 25.92,
    quantidadeFardo: 12,
    img: "img/1028.jpg",
    temUnidade: false,   
    temFardo: true
  },
 {
    id: "1029",
    nome: "Cerveja Liber Lata 350ml",
    precoUnidade: 1.95,
    precoFardo: 23.40,
    quantidadeFardo: 12,
    img: "img/1029.jpg",
    temUnidade: false,   
    temFardo: true
  },
   {
    id: "1030",
    nome: "Cerveja Patagônia Amber GRF 355ml",
    precoUnidade: 6.90,
    precoFardo: 82.80,
    quantidadeFardo: 12,
    img: "img/1030.jpg",
    temUnidade: false,   
    temFardo: true
  },
   {
    id: "1031",
    nome: "Cerveja Patagônia Amber GRF 740ml",
    precoUnidade: 10.90,
    precoFardo: 65.40,
    quantidadeFardo: 12,
    img: "img/1031.jpg",
    temUnidade: false,   
    temFardo: true
  },
   {
    id: "1032",
    nome: "Cerveja Patagônia Amber Lata 473ml",
    precoUnidade: 3.90,
    precoFardo: 46.80,
    quantidadeFardo: 12,
    img: "img/1032.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "1033",
    nome: "Cerveja Patagônia Bohemian GRF 355ml",
    precoUnidade: 6.90,
    precoFardo: 82.80,
    quantidadeFardo: 12,
    img: "img/1033.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "1034",
    nome: "Cerveja Patagônia Bohemian GRF 740ml",
    precoUnidade: 10.90,
    precoFardo: 130.80,
    quantidadeFardo: 12,
    img: "img/1034.png",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "1035",
    nome: "Cerveja Patagônia Bohemian Lata 473ml",
    precoUnidade: 3.90,
    precoFardo: 46.80,
    quantidadeFardo: 12,
    img: "img/1035.jpg",
    temUnidade: false,   
    temFardo: true
  },
{
    id: "1036",
    nome: "Cerveja Patagônia Weiss GRF 355ml",
    precoUnidade: 6.90,
    precoFardo: 82.80,
    quantidadeFardo: 12,
    img: "img/1036.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "1037",
    nome: "Cerveja Patagônia Weiss GRF 740ml",
    precoUnidade: 10.90,
    precoFardo: 130.40,
    quantidadeFardo: 12,
    img: "img/1037.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "1038",
    nome: "Cerveja Patagônia Weiss Lata 473ml",
    precoUnidade: 3.90,
    precoFardo: 46.80,
    quantidadeFardo: 12,
    img: "img/1038.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "1039",
    nome: "Cerveja Patrícia GRF 300ml",
    precoUnidade: 4.00,
    precoFardo: 48.00,
    quantidadeFardo: 24,
    img: "img/1039.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "1040",
    nome: "Cerveja Patrícia GRF 960ml",
    precoUnidade: 12.06,
    precoFardo: 144.72,
    quantidadeFardo: 12,
    img: "img/1040.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "1041",
    nome: "Cerveja Quilmes GRF 330ml",
    precoUnidade: 3.63,
    precoFardo: 43.56,
    quantidadeFardo: 12,
    img: "img/1041.jpg",
    temUnidade: false,   
    temFardo: true
  },
   {
    id: "1042",
    nome: "Cerveja Quilmes GRF 970ml",
    precoUnidade: 14.00,
    precoFardo: 84.00,
    quantidadeFardo: 12,
    img: "img/1042.jpg",
    temUnidade: false,   
    temFardo: true
  },
   {
    id: "1043",
    nome: "Cerveja Serramalte Lata 350ml",
    precoUnidade: 2.49,
    precoFardo: 29.88,
    quantidadeFardo: 12,
    img: "img/1043.png",
    temUnidade: false,   
    temFardo: true
  },
   {
    id: "1044",
    nome: "Cerveja Serramalte GRF 300ml",
    precoUnidade: 2.75,
    precoFardo: 33.00,
    quantidadeFardo: 24,
    img: "img/1044.jpg",
    temUnidade: false,   
    temFardo: true
  },
   {
    id: "1045",
    nome: "Cerveja Serramalte GRF 600ml",
    precoUnidade: 10.98,
    precoFardo: 131.00,
    quantidadeFardo: 24,
    img: "img/1045.jpg",
    temUnidade: false,   
    temFardo: true
  },
   {
    id: "1046",
    nome: "Cerveja Corona Extra GRF 355ml",
    precoUnidade: 4.89,
    precoFardo: 58.68,
    quantidadeFardo: 12,
    img: "img/1046.jpg",
    temUnidade: false,   
    temFardo: true
  },
   {
    id: "1047",
    nome: "Cerveja Franziskaner Hefe-Weissbier GRF 500ml",
    precoUnidade: 14.90,
    precoFardo: 178.80,
    quantidadeFardo: 12,
    img: "img/1047.jpg",
    temUnidade: false,   
    temFardo: true
  },
   {
    id: "1048",
    nome: "Cerveja Hoegaarden Wit Blance GRF 330ml",
    precoUnidade: 10.08,
    precoFardo: 120.96,
    quantidadeFardo: 12,
    img: "img/1048.jpg",
    temUnidade: false,   
    temFardo: true
  },
   {
    id: "1049",
    nome: "Cerveja Quilmes GRF 330ml",
    precoUnidade: 3.63,
    precoFardo: 43.56,
    quantidadeFardo: 12,
    img: "img/1041.jpg",
    temUnidade: false,   
    temFardo: true
  },
   {
    id: "1050",
    nome: "Cerveja Leffe Blonde GRF 330ml",
    precoUnidade: 8.38,
    precoFardo: 100.56,
    quantidadeFardo: 12,
    img: "img/1050.jpg",
    temUnidade: false,   
    temFardo: true
  },
   {
    id: "1051",
    nome: "Cerveja Leffe Radieuse GRF 330ml",
    precoUnidade: 7.27,
    precoFardo: 87.24,
    quantidadeFardo: 12,
    img: "img/1051.jpg",
    temUnidade: false,   
    temFardo: true
  },
   {
    id: "1052",
    nome: "Cerveja Norteña GRF 960ml",
    precoUnidade: 9.19,
    precoFardo: 55.14,
    quantidadeFardo: 12,
    img: "img/1052.jpg",
    temUnidade: false,   
    temFardo: true
  },
  { secao: "Destilados/Ices/Diversos" },
    {
    id: "2100",
    nome: "Vodka Smirnoff Ice GRF 275ml",
    precoUnidade: 4.20,
    precoFardo: 16.50,
    quantidadeFardo: 6,
    img: "img/2100.jpg",
    temUnidade: true,   
    temFardo: false
  },
     {
    id: "2101",
    nome: "Vodka Smirnoff Ice Lata 269ml",
    precoUnidade: 3.89,
    precoFardo: 23.34,
    quantidadeFardo: 6,
    img: "img/2101.jpg",
    temUnidade: true,   
    temFardo: false
  },
     {
    id: "2102",
    nome: "Bebida Mista Ice 51 Limão GRF 275ml",
    precoUnidade: 3.19,
    precoFardo: 19.14,
    quantidadeFardo: 6,
    img: "img/2102.png",
    temUnidade: true,   
    temFardo: false
  },
   {
    id: "2103",
    nome: "Bebida Mista Ice 51 Maracujá GRF 275ml",
    precoUnidade: 3.19,
    precoFardo: 19.14,
    quantidadeFardo: 6,
    img: "img/2103.jpg",
    temUnidade: true,   
    temFardo: false
  },
    {
    id: "2104",
    nome: "Bebida Mista Ice 51 Fruit Mix GRF 275ml",
    precoUnidade: 3.19,
    precoFardo: 19.14,
    quantidadeFardo: 6,
    img: "img/2104.jpg",
    temUnidade: true,   
    temFardo: false
  },
    {
    id: "2105",
    nome: "Bebida Mista Ice 51 Citrus GRF 275ml",
    precoUnidade: 3.19,
    precoFardo: 19.14,
    quantidadeFardo: 6,
    img: "img/2105.jpg",
    temUnidade: true,   
    temFardo: false
  },
    {
    id: "2106",
    nome: "Cachaça Corote Adoçada GRF 500ml",
    precoUnidade: 2.08,
    precoFardo: 24.96,
    quantidadeFardo: 6,
    img: "img/2106.jpg",
    temUnidade: true,   
    temFardo: false
  },
  {
    id: "2107",
    nome: "Cachaça Corote Adoçada Limão GRF 500ml",
    precoUnidade: 2.19,
    precoFardo: 26.28,
    quantidadeFardo: 6,
    img: "img/2107.jpg",
    temUnidade: true,   
    temFardo: false
  },
  {
    id: "2108",
    nome: "Cachaça Corote Adoçada Blueberry GRF 500ml",
    precoUnidade: 2.19,
    precoFardo: 26.28,
    quantidadeFardo: 6,
    img: "img/2108.jpg",
    temUnidade: true,   
    temFardo: false
  },
  {
    id: "2109",
    nome: "Cachaça Corote Adoçada Melância GRF 500ml",
    precoUnidade: 2.19,
    precoFardo: 26.28,
    quantidadeFardo: 6,
    img: "img/2109.jpg",
    temUnidade: true,   
    temFardo: false
  },
  {
    id: "2110",
    nome: "Cachaça Corote Adoçada Morango GRF 500ml",
    precoUnidade: 2.19,
    precoFardo: 26.28,
    quantidadeFardo: 6,
    img: "img/2110.jpg",
    temUnidade: true,   
    temFardo: false
  },
  {
    id: "2111",
    nome: "Cachaça Corote Adoçada Canelinha GRF 500ml",
    precoUnidade: 2.19,
    precoFardo: 26.28,
    quantidadeFardo: 6,
    img: "img/2111.jpg",
    temUnidade: true,   
    temFardo: false
  },
  {
    id: "2112",
    nome: "Cachaça Corote Adoçada Baunilha GRF 500ml",
    precoUnidade: 2.19,
    precoFardo: 26.28,
    quantidadeFardo: 6,
    img: "img/2112.jpg",
    temUnidade: true,   
    temFardo: false
  },
  {
    id: "2113",
    nome: "Cachaça Corote Adoçada Maracujá GRF 500ml",
    precoUnidade: 2.19,
    precoFardo: 26.28,
    quantidadeFardo: 6,
    img: "img/2113.jpg",
    temUnidade: true,   
    temFardo: false
  },
  {
    id: "2114",
    nome: "Vodka Smirnoff GRF 998ml",
    precoUnidade: 24.22,
    precoFardo: 290.64,
    quantidadeFardo: 6,
    img: "img/2114.jpg",
    temUnidade: true,   
    temFardo: false
  },
  {
    id: "2115",
    nome: "Vodka Smirnoff GRF 1750ml",
    precoUnidade: 47.10,
    precoFardo: 471.00,
    quantidadeFardo: 6,
    img: "img/2115.jpg",
    temUnidade: true,   
    temFardo: false
  },
  {
    id: "2116",
    nome: "Vodka Absolut GRF 1l",
    precoUnidade: 57.30,
    precoFardo: 687.60,
    quantidadeFardo: 6,
    img: "img/2116.jpg",
    temUnidade: true,   
    temFardo: false
  },
  {
    id: "2117",
    nome: "Vodka Orloff GRF 1l",
    precoUnidade: 21.80,
    precoFardo: 262.68,
    quantidadeFardo: 6,
    img: "img/2117.jpg",
    temUnidade: true,   
    temFardo: false
  },
   {
    id: "2118",
    nome: "Vodka Balalaika GRF 1l",
    precoUnidade: 13.00,
    precoFardo: 156.00,
    quantidadeFardo: 6,
    img: "img/2118.jpg",
    temUnidade: true,   
    temFardo: false
  },
 {
    id: "2119",
    nome: "Licos Espanhol 43 tradicional GRF 700ml",
    precoUnidade: 119.00,
    precoFardo: 714.00,
    quantidadeFardo: 6,
    img: "img/2119.jpg",
    temUnidade: true,   
    temFardo: false
  },
   {
    id: "2120",
    nome: "Jack Daniels Honey GRF 1l",
    precoUnidade: 115.00,
    precoFardo: 1380.00,
    quantidadeFardo: 6,
    img: "img/2120.jpg",
    temUnidade: true,   
    temFardo: false
  },
  {
    id: "2121",
    nome: "Jack Daniels Apple GRF 1l",
    precoUnidade: 120.00,
    precoFardo: 1440.00,
    quantidadeFardo: 6,
    img: "img/2121.jpg",
    temUnidade: true,   
    temFardo: false
  },
  {
    id: "2122",
    nome: "Jack Daniels Fire GRF 1l",
    precoUnidade: 105.00,
    precoFardo: 1260.00,
    quantidadeFardo: 6,
    img: "img/2122.jpg",
    temUnidade: true,   
    temFardo: false
  },
  {
    id: "2123",
    nome: "Passport Scotch GRF 1l",
    precoUnidade: 30.00,
    precoFardo: 360.00,
    quantidadeFardo: 6,
    img: "img/2123.jpg",
    temUnidade: true,   
    temFardo: false
  },
  {
    id: "2124",
    nome: "Johnnie Walker Red Label GRF 1l",
    precoUnidade: 55.00,
    precoFardo: 660.00,
    quantidadeFardo: 6,
    img: "img/2124.jpg",
    temUnidade: true,   
    temFardo: false
  },
    {
    id: "2125",
    nome: "Ballentines Finnest Blended Scotch Whisky GRF 1l",
    precoUnidade: 47.99,
    precoFardo: 575.88,
    quantidadeFardo: 6,
    img: "img/2125.jpg",
    temUnidade: true,   
    temFardo: false
  },
  {
    id: "21410",
    nome: "Whisky Black Blend 900ml",
    precoUnidade: 23.90,
    precoFardo: 575.88,
    quantidadeFardo: 6,
    img: "img/21410.jpg",
    temUnidade: true,   
    temFardo: false
  },
   {
    id: "21411",
    nome: "Whisky Escocês Black & White 1L GRF",
    precoUnidade: 37.99,
    precoFardo: 575.88,
    quantidadeFardo: 6,
    img: "img/21411.jpg",
    temUnidade: true,   
    temFardo: false
  },
   {
    id: "21412",
    nome: "Whisky Old Parr 12 anos 1L GRF",
    precoUnidade: 120.0,
    precoFardo: 575.88,
    quantidadeFardo: 6,
    img: "img/21412.jpg",
    temUnidade: true,   
    temFardo: false
  },
  
   {
    id: "2126",
    nome: "Johnnie Walker Double Black GRF 1l",
    precoUnidade: 170.00,
    precoFardo: 2040.00,
    quantidadeFardo: 6,
    img: "img/2126.jpg",
    temUnidade: true,   
    temFardo: false
  },
   {
    id: "2127",
    nome: "Johnnie Walker Gold Label GRF 1l",
    precoUnidade: 210.00,
    precoFardo: 2520.00,
    quantidadeFardo: 6,
    img: "img/2127.jpg",
    temUnidade: true,   
    temFardo: false
  },
   {
    id: "2128",
    nome: "Gin Tanqueray GRF 750l",
    precoUnidade: 82.00,
    precoFardo: 492.00,
    quantidadeFardo: 6,
    img: "img/2128.jpg",
    temUnidade: true,   
    temFardo: false
  },
   {
    id: "211533",
    nome: "Gin Eternity 900ml Sabores",
    precoUnidade: 9.90,
    precoFardo: 492.00,
    quantidadeFardo: 6,
    img: "img/211533.jpg",
    temUnidade: true,   
    temFardo: false
  },
   {
    id: "211534",
    nome: "Gin Seagers 1L GRF",
    precoUnidade: 29.90,
    precoFardo: 492.00,
    quantidadeFardo: 6,
    img: "img/211534.jpg",
    temUnidade: true,   
    temFardo: false
  },
  {
    id: "211535",
    nome: "Gin Eternity 900ml GRF Tradicional e Sabores",
    precoUnidade: 12.90,
    precoFardo: 492.00,
    quantidadeFardo: 6,
    img: "img/211535.jpg",
    temUnidade: true,   
    temFardo: false
  },
  {
    id: "2129",
    nome: "Gin Tanqueray Sevilla GRF 700l",
    precoUnidade: 95.00,
    precoFardo: 570.00,
    quantidadeFardo: 6,
    img: "img/2129.jpg",
    temUnidade: true,   
    temFardo: false
  },
  {
    id: "2130",
    nome: "Gin Tanqueray Royale GRF 700l",
    precoUnidade: 99.00,
    precoFardo: 594.00,
    quantidadeFardo: 6,
    img: "img/2130.jpg",
    temUnidade: true,   
    temFardo: false
  },
  {
    id: "2131",
    nome: "Gin Beefeater Londo Dry GRF 700l",
    precoUnidade: 90.00,
    precoFardo: 540.00,
    quantidadeFardo: 6,
    img: "img/2131.jpg",
    temUnidade: true,   
    temFardo: false
  },
  {
    id: "2132",
    nome: "Gin Rocks Original GRF 1l",
    precoUnidade: 18.00,
    precoFardo: 216.00,
    quantidadeFardo: 6,
    img: "img/2132.png",
    temUnidade: true,   
    temFardo: false
  },
  {
    id: "2133",
    nome: "Gin Rocks Strawberry GRF 1l",
    precoUnidade: 19.90,
    precoFardo: 238.80,
    quantidadeFardo: 6,
    img: "img/2133.jpg",
    temUnidade: true,   
    temFardo: false
  },
  {
    id: "2134",
    nome: "Conhaque Dreher GRF 900ml",
    precoUnidade: 13.75,
    precoFardo: 82.50,
    quantidadeFardo: 6,
    img: "img/2134.jpg",
    temUnidade: true,   
    temFardo: false
  },
  {
    id: "2135",
    nome: "Conhaque Domecq GRF 1l",
    precoUnidade: 24.76,
    precoFardo: 148.56,
    quantidadeFardo: 6,
    img: "img/2135.jpg",
    temUnidade: true,   
    temFardo: false
  },
  {
    id: "2136",
    nome: "Aguardente Pirassunga 51 GRF 965ml",
    precoUnidade: 10.12,
    precoFardo: 121.44,
    quantidadeFardo: 6,
    img: "img/2136.jpg",
    temUnidade: true,   
    temFardo: false
  },
  {
    id: "2137",
    nome: "Aguardente Velho Barreiro GRF 910ml",
    precoUnidade: 11.10,
    precoFardo: 133.20,
    quantidadeFardo: 6,
    img: "img/2137.jpg",
    temUnidade: true,   
    temFardo: false
  },
  {
    id: "2138",
    nome: "Whisky Buchanan's 12 anos GRF 1l",
    precoUnidade: 109.00,
    precoFardo: 1308.00,
    quantidadeFardo: 6,
    img: "img/2138.jpg",
    temUnidade: true,   
    temFardo: false
  },
  {
    id: "2139",
    nome: "Whisky Royal Salute 21 anos GRF 1l",
    precoUnidade: 650.00,
    precoFardo: 7800.00,
    quantidadeFardo: 6,
    img: "img/2139.jpg",
    temUnidade: true,   
    temFardo: false
  },
  {
    id: "2140",
    nome: "Whisky White Horse GRF 700ml",
    precoUnidade: 48.00,
    precoFardo: 576.00,
    quantidadeFardo: 6,
    img: "img/2140.jpg",
    temUnidade: true,   
    temFardo: false
  },
  {
    id: "2141",
    nome: "Vodka Askov GRF 900ml",
    precoUnidade: 15.20,
    precoFardo: 182.40,
    quantidadeFardo: 6,
    img: "img/2141.jpg",
    temUnidade: true,   
    temFardo: false
  },
   {
    id: "211561",
    nome: "Vodka Natasha 900ml GRF",
    precoUnidade: 15.20,
    precoFardo: 338.0,
    quantidadeFardo: 6,
    img: "img/211561.jpg",
    temUnidade: false,   
    temFardo: true
  },
   {
    id: "211562",
    nome: "Canelinha da Rocha 900ml GFR",
    precoUnidade: 10.90,
    precoFardo: 338.0,
    quantidadeFardo: 6,
    img: "img/211562.jpg",
    temUnidade: true,   
    temFardo: false
  },
   {
    id: "5152",
    nome: "Aguardente Pitu 350Ml GRF",
    precoUnidade: 10.90,
    precoFardo: 40.68,
    quantidadeFardo: 6,
    img: "img/5152.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "5153",
    nome: "Aguardente Pitu 965Ml GRF",
    precoUnidade: 10.90,
    precoFardo: 106.08,
    quantidadeFardo: 6,
    img: "img/5153.jpg",
    temUnidade: false,   
    temFardo: true
  },
  {
    id: "2142",
    nome: "Licor Amarula 750ml",
    precoUnidade: 82.00,
    precoFardo: 984.00,
    quantidadeFardo: 6,
    img: "img/2142.jpg",
    temUnidade: true,   
    temFardo: false
  },
{
    id: "2143",
    nome: "Aperitivo Campary GRF 900ml",
    precoUnidade: 27.00,
    precoFardo: 324.00,
    quantidadeFardo: 6,
    img: "img/2143.jpg",
    temUnidade: true,   
    temFardo: false
  },
  {
    id: "2144",
    nome: "Vinho Rosê Piscine Stripes GRF 750ml",
    precoUnidade: 75.00,
    precoFardo: 900.00,
    img: "img/2144.jpg",
    temUnidade: true,   
    temFardo: false
  },
];

// Carrinho
// =======================
let carrinho = {};

// =======================
// Funções de Utilitário para Abertura/Fechamento
// =======================

// Função para gerenciar o overflow do body
function toggleBodyScroll(enable) {
    if (enable) {
        document.body.classList.remove('no-scroll');
    } else {
        document.body.classList.add('no-scroll');
    }
}

// Funções para o Menu Lateral
function abrirMenuLateral() {
    elementos.menuLateral.classList.add('aberto');
    toggleBodyScroll(false);
}

function fecharMenuLateral() {
    elementos.menuLateral.classList.remove('aberto');
    // Só reabilita o scroll do body se o carrinho NÃO estiver aberto
    if (!elementos.carrinhoDiv.classList.contains('aberto')) {
        toggleBodyScroll(true);
    }
}

// Funções para o Carrinho
function abrirCarrinho() {
    elementos.carrinhoDiv.classList.add('aberto');
    document.body.classList.add('carrinho-aberto'); // Mantém para responsividade CSS
    elementos.btnMenuMobile.setAttribute('aria-expanded', 'true');
    toggleBodyScroll(false);
}

function fecharCarrinho() {
    elementos.carrinhoDiv.classList.remove('aberto');
    document.body.classList.remove('carrinho-aberto'); // Remove para responsividade CSS
    elementos.btnMenuMobile.setAttribute('aria-expanded', 'false');
    // Só reabilita o scroll do body se o menu lateral NÃO estiver aberto
    if (!elementos.menuLateral.classList.contains('aberto')) {
        toggleBodyScroll(true);
    }
}

// =======================
// Renderizar Produtos
// =======================
function renderizarProdutos() {
  let html = '';
  produtos.forEach(prod => {
    if (prod.secao) {
      html += `<h2 class="secao-titulo" id="${prod.secao}">${prod.secao}</h2>`;
    } else {
      html += `
        <div class="produto-card">
          <img src="${prod.img}" alt="${prod.nome}">
          <div class="produto-info">
            <h3>${prod.nome}</h3>
            <p>Código: ${prod.id}</p>
          </div>
      `;
      if (prod.temUnidade) {
        html += `
          <div class="quantidade-container">
            <label>Unidade:</label>
            <span>R$ ${prod.precoUnidade.toFixed(2)}</span>
            <input type="number" id="qtd-unidade-${prod.id}" min="1" value="1">
            <button class="btn-add" data-id="${prod.id}">Adicionar</button>
          </div>
        `;
      }
      if (prod.temFardo) {
        html += `
          <div class="quantidade-container">
            <label class="fardo-label">Fardo (${prod.quantidadeFardo} unidades):</label>
            <span>R$ ${prod.precoFardo.toFixed(2)}</span>
            <input type="number" id="qtd-fardo-${prod.id}" min="1" value="1">
            <button class="btn-add-fardo" data-id="${prod.id}">Adicionar</button>
          </div>
        `;
      }
      html += `</div>`;
    }
  });
  elementos.produtosContainer.innerHTML = html;
}

// =======================
// Atualizar Carrinho
// =======================
function atualizarCarrinho() {
  elementos.itensCarrinho.innerHTML = '';
  let total = 0;

  for (const key in carrinho) {
    const item = carrinho[key];
    const li = document.createElement('li');
    li.innerHTML = `
      <span class="carrinho-produto-nome">
        ${item.nome}
        ${item.tipo === 'fardo' ? `<span class="fardo-label">FARDO</span>` : ''}
        <br>
        <small>${item.codigo} - ${item.qtd}x</small>
      </span>
      <button class="btn-remover" data-key="${key}">X</button>
    `;
    elementos.itensCarrinho.appendChild(li);
    total += item.preco * item.qtd;
  }

  elementos.total.textContent = `Total: R$ ${total.toFixed(2)}`;
  elementos.btnFinalizar.disabled = Object.keys(carrinho).length === 0;
}

// =======================
// Evento Único (Consolidado)
// =======================
document.addEventListener('click', (e) => {
  // Adicionar unidade
  if (e.target.classList.contains('btn-add')) {
    const id = e.target.dataset.id;
    const prod = produtos.find(p => p.id === id);
    const qtdInput = document.getElementById(`qtd-unidade-${id}`);
    const qtd = qtdInput ? parseInt(qtdInput.value) : 1;
    if (qtd < 1 || isNaN(qtd)) return;

    const key = `${id}-unidade`;
    if (carrinho[key]) {
      carrinho[key].qtd += qtd;
    } else {
      carrinho[key] = {
        nome: prod.nome,
        codigo: prod.id,
        tipo: 'unidade',
        preco: prod.precoUnidade,
        qtd
      };
    }
    atualizarCarrinho();
    mostrarMensagemAdicao('Produto adicionado ao carrinho!');
  }

  // Adicionar fardo
  if (e.target.classList.contains('btn-add-fardo')) {
    const id = e.target.dataset.id;
    const prod = produtos.find(p => p.id === id);
    const qtdInput = document.getElementById(`qtd-fardo-${id}`);
    const qtd = qtdInput ? parseInt(qtdInput.value) : 1;
    if (qtd < 1 || isNaN(qtd)) return;

    const key = `${id}-fardo`;
    if (carrinho[key]) {
      carrinho[key].qtd += qtd;
    } else {
      carrinho[key] = {
        nome: prod.nome,
        codigo: prod.id,
        tipo: 'fardo',
        preco: prod.precoFardo,
        qtd,
        quantidadeFardo: prod.quantidadeFardo
      };
    }
    atualizarCarrinho();
    mostrarMensagemAdicao('Fardo adicionado ao carrinho!');
  }

  // Remover item
  if (e.target.classList.contains('btn-remover')) {
    e.stopPropagation();
    delete carrinho[e.target.dataset.key];
    atualizarCarrinho();
    mostrarMensagemRemocao('Produto removido do carrinho!');
  }

  // Limpar carrinho
  if (e.target === elementos.btnLimpar) {
    e.stopPropagation();
    if (confirm('Tem certeza que deseja limpar todo o carrinho?')) {
      carrinho = {};
      atualizarCarrinho();
    }
  }

  // Fechar carrinho ao clicar fora (Desktop e Mobile)
  if (
    elementos.carrinhoDiv.classList.contains('aberto') &&
    !elementos.carrinhoDiv.contains(e.target) &&
    e.target !== elementos.btnMenuMobile
  ) {
    fecharCarrinho();
  }

  // Fechar menu lateral ao clicar fora
  if (
    elementos.menuLateral.classList.contains('aberto') &&
    !elementos.menuLateral.contains(e.target) &&
    e.target !== elementos.botaoMenuLateral
  ) {
    fecharMenuLateral();
  }
});


// =======================
// Finalizar Pedido (WhatsApp)
// =======================
elementos.btnFinalizar.addEventListener('click', (e) => {
  e.stopPropagation();
  if (Object.keys(carrinho).length === 0) return;

  const mensagem = `Olá, gostaria de finalizar meu pedido:%0A%0A${Object.values(carrinho)
    .map(item => `Código: ${item.codigo} - ${item.nome} (${item.tipo}) - ${item.qtd}x - R$ ${(item.preco * item.qtd).toFixed(2)}`)
    .join('%0A')}%0A%0ATotal: R$ ${elementos.total.textContent.split('R$ ')[1]}`;

  window.open(`https://wa.me/5511967022294?text=${mensagem}`, '_blank');
});

// =======================
// Mensagens
// =======================
function mostrarMensagemAdicao(texto) {
  const msgDiv = document.getElementById('mensagem-adicao');
  msgDiv.textContent = texto;
  msgDiv.classList.add('mostrar');
  setTimeout(() => msgDiv.classList.remove('mostrar'), 1500);
}

function mostrarMensagemRemocao(texto) {
  const msgDiv = document.getElementById('mensagem-adicao');
  msgDiv.textContent = texto;
  msgDiv.classList.add('mostrar');
  setTimeout(() => msgDiv.classList.remove('mostrar'), 1500);
}

// =======================
// Interação do Carrinho (Mobile)
// =======================
if (elementos.btnMenuMobile) {
  elementos.btnMenuMobile.addEventListener('click', (e) => {
    e.stopPropagation();
    if (elementos.carrinhoDiv.classList.contains('aberto')) {
        fecharCarrinho();
    } else {
        abrirCarrinho();
    }
  });
}

if (elementos.btnFecharCarrinho) {
  elementos.btnFecharCarrinho.addEventListener('click', () => {
    fecharCarrinho();
  });
}

// =======================
// Inicialização do Menu Lateral e Carrinho
// =======================
renderizarProdutos();
atualizarCarrinho();

document.addEventListener('DOMContentLoaded', () => {
  if (elementos.botaoMenuLateral && elementos.menuLateral && elementos.fecharMenuLateral) {
    elementos.botaoMenuLateral.addEventListener('click', () => {
      // Se o menu lateral está aberto, fecha. Se não, abre.
      if (elementos.menuLateral.classList.contains('aberto')) {
          fecharMenuLateral();
      } else {
          abrirMenuLateral();
      }
    });

    elementos.fecharMenuLateral.addEventListener('click', () => {
      fecharMenuLateral();
    });

    // Adicione um listener para fechar o menu lateral quando um link é clicado
    const menuLinks = elementos.menuLateral.querySelectorAll('a');
    menuLinks.forEach(link => {
      link.addEventListener('click', () => {
        fecharMenuLateral(); // Fecha o menu ao clicar no link
      });
    });
  }
});
