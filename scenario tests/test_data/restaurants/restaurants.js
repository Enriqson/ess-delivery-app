exports.getRestaurants = {
  restaurants: [
    {
      id: 0,
      name: "Almir quentinhas",
      photo:
        "https://cdn.folhape.com.br/img/pc/1100/1/dn_arquivo/2021/05/materia.jpg",
      addresses: ["Avenida Domingos Ferreira, 1230"],
      menu: {
        destaqueIndex: 0,
        options: [
          {
            name: "Frango a parmegiana",
            price: 13,
            item_id: 1,
            photo:
              "https://photos.bigoven.com/recipe/hero/fil-de-frango-parmegiana-bcd93f.jpg",
            description:
              "Experimente agora a deliciosa parmegiana do Seu Almir, MUITOOOOOOO SABOROSA! Acompanha macarrão.",
          },
          {
            name: "Frango a milanesa",
            price: 11,
            item_id: 2,
            photo:
              "https://img.itdg.com.br/tdg/images/recipes/000/021/372/357312/357312_original.jpg?mode=crop&width=710&height=400",
            description: "Frango a milanesa com gostinho caseiro.",
          },
          {
            name: "Cubos de carne ao molho madeira",
            price: 13,
            item_id: 3,
            photo:
              "https://www.divenetoalimentos.com.br/images/produtos/picadinho-de-cubos-de-carne-com-molho-congelado.png",
            description: "Cubos de carne com o molho especial da casa.",
          },
          {
            name: "Panqueca de carne",
            price: 11,
            item_id: 4,
            photo:
              "https://t1.rg.ltmcdn.com/pt/posts/0/7/2/panqueca_de_carne_moida_270_600_square.jpg",
            description:
              "Panqueca de dar água na boca para deixar o seu almoço ainda mais especial.",
          },
          {
            name: "Panqueca de queijo e presunto",
            price: 11,
            item_id: 5,
            photo:
              "http://receitasmais.com.br/wp-content/uploads/2013/04/Panqueca-de-mussarela-e-presunto-1200x675.jpg",
            description:
              "Panqueca de dar água na boca para deixar o seu almoço ainda mais especial.",
          },
          {
            name: "Calabresa acebolada",
            price: 13,
            item_id: 6,
            photo:
              "https://img.itdg.com.br/tdg/images/recipes/000/001/109/318805/318805_original.jpg?mode=crop&width=350&height=250",
            description:
              "E quem não gosta de comida acebolada, né? RSRS. Acompanha batata frita, arroz e feijão",
          },
        ],
      },
      rates: [{ user_id: "1", stars: 4.5, feedback_text: "" }],
    },
    {
      id: 1,
      name: "Mongas",
      photo:
        "https://vinicolaaraucaria.com.br/wp-content/uploads/2020/06/interna_restaurante-1-1400x700.jpg",
      addresses: ["Avenida Rosa e Silva, 1338"],
      menu: {
        destaqueIndex: 0,
        options: [
          {
            name: "Pizza de Calabresa",
            price: 30,
            item_id: 1,
            photo:
              "https://t2.rg.ltmcdn.com/pt/posts/9/8/3/pizza_calabresa_e_mussarela_4389_600.jpg",
            description: "A melhor pizza da ZN! Peça já!",
          },
          {
            name: "Guaraná 1L",
            price: 10,
            item_id: 2,
            photo:
              "https://a-static.mlcdn.com.br/1500x1500/refrigerante-guarana-original-antarctica-1-litro/lojasemix/1803p/b4b32c23dd9c6e4d77fa9c37daf6732e.jpg",
            description: "Guaraná 1L",
          },
        ],
      },
      rates: [{ user_id: "1", stars: 4.5, feedback_text: "" }],
    },
    {
      id: 2,
      name: "Elias",
      photo:
        "https://media-cdn.tripadvisor.com/media/photo-s/05/85/e1/f5/sala-ristorante.jpg",
      addresses: ["Avenida Caxangá, 634"],
      menu: {
        destaqueIndex: 0,
        options: [
          {
            name: "Ogro Burguer com Batata Média",
            price: 25.5,
            item_id: 1,
            photo:
              "https://img.itdg.com.br/tdg/images/recipes/000/312/870/355695/355695_original.jpg",
            description:
              "Hamburguer monstro de dar água na boca. ELIASLOL, O MELHOR COZINHEIRO DE LIMOEIRO!",
          },
          {
            name: "Coca-cola lata",
            price: 5.5,
            item_id: 2,
            photo:
              "https://images-americanas.b2w.io/produtos/4575311740/imagens/coquinha-coca-cola-lata-220ml-desde-1886-sabor/4575311740_1_large.jpg",
            description: "Coquinha geladinha HMMMMM!",
          },
        ],
      },
      rates: [{ user_id: "1", stars: 4.5, feedback_text: "" }],
    },
    {
      id: 3,
      name: "Daylol",
      photo:
        "https://media-cdn.tripadvisor.com/media/photo-s/16/3d/cb/2f/quintal-da-praia.jpg",
      addresses: ["Avenida Bernardo Vieira de Melo, 980"],
      menu: {
        destaqueIndex: 1,
        options: [
          {
            name: "Frango a parmegiana",
            price: 20,
            item_id: 1,
            photo:
              "https://photos.bigoven.com/recipe/hero/fil-de-frango-parmegiana-bcd93f.jpg",
            description: "Melhor parme de piedade e arredores!",
          },
          {
            name: "Frango a milanesa",
            price: 22,
            item_id: 2,
            photo:
              "https://img.itdg.com.br/tdg/images/recipes/000/021/372/357312/357312_original.jpg?mode=crop&width=710&height=400",
            description: "Frango empanado a moda da casa!",
          },
          {
            name: "Guaraná 1L",
            price: 10,
            item_id: 3,
            photo:
              "https://a-static.mlcdn.com.br/1500x1500/refrigerante-guarana-original-antarctica-1-litro/lojasemix/1803p/b4b32c23dd9c6e4d77fa9c37daf6732e.jpg",
            description: "Guaraná 1L",
          },
        ],
      },
      rates: [{ user_id: "1", stars: 4.5, feedback_text: "" }],
    },
    {
      id: 4,
      name: "Alicelol",
      photo:
        "https://vejasp.abril.com.br/wp-content/uploads/2016/12/k-pop-chiken2.jpeg",
      addresses: ["Avenida Abdias de Carvalho, 142"],
      menu: {
        destaqueIndex: 0,
        options: [
          {
            name: "Frango KPOPPER",
            price: 50,
            item_id: 1,
            photo:
              "https://s2.glbimg.com/0X_hlC9TWAJUt6CsKQoSKcQ7hvM=/620x345/e.glbimg.com/og/ed/f/original/2019/06/10/kpop_chickin_4.jpg",
            description: "Idol Chicken para você que é fã dos coreanos :D",
          },
          {
            name: "Água",
            price: 4,
            item_id: 2,
            photo:
              "https://farmaciaindiana.vteximg.com.br/arquivos/ids/206727/7896371000045_0.jpg?v=636748773745400000",
            description: "Garrafa 500ml",
          },
        ],
      },
      rates: [{ user_id: "1", stars: 4.5, feedback_text: "" }],
    },
    {
      id: 5,
      name: "Restaurante do PAI!",
      photo:
        "https://www.istoedinheiro.com.br/wp-content/uploads/sites/17/2021/12/bar-1-scaled-e1639011077158.jpg",
      addresses: ["Rua Real da Torre, 47"],
      menu: {
        destaqueIndex: 1,
        options: [
          {
            name: "Panqueca de carne",
            price: 15,
            item_id: 1,
            photo:
              "https://t1.rg.ltmcdn.com/pt/posts/0/7/2/panqueca_de_carne_moida_270_600_square.jpg",
            description: "Panquequinhaaaaaa.",
          },
          {
            name: "Calabresa acebolada",
            price: 27,
            item_id: 2,
            photo:
              "https://img.itdg.com.br/tdg/images/recipes/000/001/109/318805/318805_original.jpg?mode=crop&width=350&height=250",
            description: "Sugestão do chefe BILAS!",
          },
        ],
      },
      rates: [{ user_id: "1", stars: 4.5, feedback_text: "" }],
    },
  ],
};
