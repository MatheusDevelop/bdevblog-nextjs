export default async function getBlogsService(
  filter = { itemsByPage, numberOfPage, quicksearch }
) {
  return {
    filter: {},
    data: [
      {
        id: 1,
        title: "Modelagem de domínios ricos na prática",
        description:
          "Nessa série construímos uma implementação para uma biblioteca pública se baseando em um caso de negócio real utilizando conceitos de domain driven design para mostrar como uma boa modelagem de domínio nos ajuda a construir um software de qualidade da maneira mais eficiente possível.",
        imageUrl:
          "https://images.pexels.com/photos/2041540/pexels-photo-2041540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        createdAt: "2022-04-01T23:43:26.338Z",
      },
      
    ],
  };
}
