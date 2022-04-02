export default async function getArticle(articleId) {
  //1 title
  //2 description
  //3 h3
  //4 Link
  //5 video
  const data = [
    {
      id: 1,
      title: "Modelagem de domínios ricos na prática",
      description:
        "Nessa série construímos uma implementação para uma biblioteca pública se baseando em um caso de negócio real utilizando conceitos de domain driven design para mostrar como uma boa modelagem de domínio nos ajuda a construir um software de qualidade da maneira mais eficiente possível.",
      imageUrl:
        "https://images.pexels.com/photos/2041540/pexels-photo-2041540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      createdAt: "2022-04-01T23:43:26.338Z",
      attributes: [
        {
          type: 1,
          value: "Como a modelagem de um domínio rico pode te ajudar?",
        },
        {
          type: 2,
          value:
            "Vamos ilustrar o seguinte cenário: João é mais um desenvolvedor de software na sua equipe, ele chega em mais um dia de trabalho, entusiasmado para começar um projeto novo que seu time está inserido, e logo de cara entra na Sprint Planning (a cerimônia em que o time fala sobre o início da sprint, e planejam suas entregas), e quando ele começa a ouvir o Product Owner falando sobre o negócio do cliente, as soluções que ele quer e todos aqueles jargões técnicos que foi passado para a empresa, ele logo pensa <i><b style='color:#141414b9'> - 'Mas que diabos de regra de negócio é essa?'- </b></i> e cada vez que o P.O fala, mais pálido João fica... o ponto de interrogação fica presente naquela cerimonia e todos estão pensando <i><b style='color:#141414b9'>‘Como vamos implementar isso?’</b></i>, e então a equipe segue planejando o desenvolvimento desse sistema da maneira que dá. A reunião acaba e o ponto de interrogação ainda segue a equipe no decorrer da sprint, criando uma bola de neve de dívidas técnicas e atrasos porque os desenvolvedores, e muita das vezes o próprio P.O, <b style='color:#141414b9'>não entenderam sobre o negócio do cliente</b> e o que ele queria resolver. Com muito esforço a equipe consegue entregar algo no final da Sprint, abatidos com a enxurrada de problemas que enfrentaram, e mesmo assim não puderam entregar o máximo de valor naquela entrega, isso quando o cliente não fala que a solução não resolveu o problema dele... ",
        },
        {
          type: 3,
          value: "Afinal, qual desenvolvedor quer passar por esse cenário? ",
        },
        {
          type: 2,
          value:
            "Se desde o início fosse entendido claramente o que o cliente queria, e em uma só linguagem a equipe conseguisse se comunicar com o negócio para que soubessem cada vez mais sobre as entidades e seus comportamentos dentro de um sistema, já pensou como seria simplificada essa implementação? Todo desenvolvedor quer entregar um <b style='color:#141414b9'>código de qualidade e testável para o cliente</b>, e é isso que a proposta do Domain Driven Design entrega para você, e uma dessas ferramentas vamos abordar logo abaixo:<b style='color:#141414b9'> Uma modelagem de domínio rico.</b> ",
        },
        {
          type: 4,
          value: "Link pra playlist completa",
          subvalue:
            "https://www.youtube.com/playlist?list=PLCrysdX19rSJry6a7Df_lmGdX50DhqD3y",
        },
        {
          type: 5,
          value:
            "https://www.youtube.com/watch?v=Y3ne-ICv6Dc&list=PLCrysdX19rSJry6a7Df_lmGdX50DhqD3y&index=1&ab_channel=MatheusVieira",
        },
        { type: 1, value: "O que vai ser abordado nessa série?" },
        {
          type: 2,
          value:
            "Nós iremos abordar nessa série de vídeos um <b style='color:#141414b9'>case de negócio real para um biblioteca pública</b> onde existem diversas regras de negócio em suas entidades, e de uma maneira metódica e objetiva, nós separaremos seus comportamentos e atributos dentro do sistema seguindo o modelo que nós criaremos logo no início da série, onde aplicaremos o conceito de modelagem de domínio para mostrar como as entidades do caso de negócio são modeladas, ressaltando os pontos importantes para se atentar na modelagem de domínio no início de um projeto.  ",
        },
        { type: 3, value: "Implementação técnica" },
        {
          type: 2,
          value:
            "No final ainda implementaremos a solução utilizando <b style='color:#141414b9'>.NET 6</b> e testaremos a camada de negocio utilizando um <b style='color:#141414b9'>projeto de testes xUnit</b>, ressaltando a importância de testes para validar se a implementação atende os requisitos do negócio ",
        },
        {
          type: 4,
          value: "Link para UML",
          subvalue:
            "https://miro.com/app/board/uXjVOBT8R3Y=/?invite_link_id=306059649686",
        },
        {
          type: 4,
          value: "Link para repositorio",
          subvalue: "https://github.com/MatheusDevelop/LibraryExample",
        },
      ],
    },
  ];
  const article = data.find((e) => e.id == articleId);
  return article;
}
