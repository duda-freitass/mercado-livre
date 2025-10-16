const produtos = [
     {
        titulo: "Kit Luva Boxe Muay Thai + Bandagem + Bucal Naja Extreme, Rosa, 12oz",
        preco: "R$ 225,90",
        imagem: "luva.webp",
        oferta: "OFERTA DO DIA",
        frete: "Chegará grátis amanhã",
          nome:"Kit Luva Boxe Muay Thai + Bandagem + Bucal Naja Extreme, Rosa, 12oz"
      },

      {
        titulo: "Raquete Beach Tenni",
        preco: "R$ 189,90",
        imagem: "raquete.webp",
        oferta: "OFERTA DO DIA",
        frete: "Chegará grátis amanhã",
          nome:"Raquete Beach Tennis"
      },

      {
        titulo: "Tenis Nike",
        preco: "R$ 30",
        imagem: "tenis.webp",
        oferta: "OFERTA DO DIA",
        frete: "Chegará grátis amanhã",
          nome:"Tenis Nike"
      }, 

    {
        titulo: "Patins Rosa",
        preco: "R$ 78,90",
        imagem: "patins.webp",
        oferta: "OFERTA DO DIA",
        frete: "Chegará grátis amanhã",
          nome:"Patins Rosa"
      },
      {
        titulo: "Bola de VOlei",
        preco: "R$ 129,70",
        imagem: "bola de volei.webp",
        oferta: "OFERTA DO DIA",
        frete: "Chegará grátis amanhã",
          nome:"Bola de Volei"
      },
      {
        titulo: " Patinete Elétrico",
        preco: "R$ 999,98",
        imagem: "patinete-1.jpg",
        oferta: "OFERTA DO DIA",
        frete: "Chegará grátis amanhã",
        nome:"Patinete Elétrico"
      }
    ];

    const divProdutos = document.getElementById("produtos1");

    for(let i = 0; i < produtos.length; i++) {
      divProdutos.innerHTML += `
        <div class="produto">
          <img src="img/${produtos[i].imagem}" alt="${produtos[i].titulo}">
          <span class="oferta">${produtos[i].oferta}</span>
          <div class="nome"><h2> ${produtos[i].nome}</h2> </div>
          <div class="titulo">${produtos[i].titulo}</div>
          <div class="preco">${produtos[i].preco}</div>
          <div class="frete"><p class="texto">${produtos[i].frete}</p><img style="width:40px; height:20px; margin-left: 10px"  src="Imagens/full.png"></div>
        </div>
      `;
    }