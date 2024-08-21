const Questao01A = () => {
  const lista = [
    { a: 10, b: 3, c: 7 },
    { a: 5, b: -3, c: 9 },
    { a: 1, b: 9, c: 40 },
  ]

  return (
    <Questao01B lista={lista} />
  )
};

function Questao01B({ lista }) {

  const retornarMaiorElementoDeCadaObjeto = (lista) => {
    let maioresElementos = [];

    // para cada objeto da lista
    lista.forEach(element => {
      // vamos obter as as chaves de suas propriedades
      const chaves = Object.keys(element);
      // assumir que o primeiro elemento é o maior
        // Obs: utilizei o Object.keys pois pode ser uma situação
        // em que não sabemos os nomes dos atributos
      let maiorElemento = element[chaves[0]];

      // para cada chave do objeto vamos verificar se o valor dela
      // é maior do que o maior elemento atual, e caso seja
      // atribuir o novo valor
      chaves.forEach(key => {
        if(element[key] > maiorElemento) maiorElemento = element[key];
      })

      // para este objeto apenas, vamos inserir o maior elemento
      // encontrado no array maioresElementos
      maioresElementos.push(maiorElemento);
    });

    // ao finalizar vamos retornar para que o JSX possa renderizar
    // como bem preferir
    return maioresElementos;
  }

  return (
    <div>{retornarMaiorElementoDeCadaObjeto(lista).map((item, index) => {
      return (
        <p>O maior elemento do {index + 1}° objeto é: {item}</p>
      )
    })}</div>
  );
}

export default Questao01A;