import { useEffect, useState } from "react";

const Questao03 = () => {
    const [populacaoEuropa, setPopulacaoEuropa] = useState([]);

    // useEffect sem dependências para realizar a requisição apenas uma vez a cada renderização do componente
    useEffect(() => {
        // função utilizando async e await para realizar a requisição apenas quando necessitarmos
        const obterPopulacaoEuropa = async () => {
            fetch(
                "https://restcountries.com/v3.1/region/europe?fields=capital,population",
            )
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    // data.map(console.log(data));
                    setPopulacaoEuropa(data);
                })
                .catch((error) => console.log(error));
        };
        obterPopulacaoEuropa();
    }, []);

    // funcções auxiliares para obter a maior e a menor população
    const obterCapitalComMaiorPopulação = (data) => {
        let capitalComMaiorPopulacao = data[0];
        data &&
            data.forEach((element) => {
                if (
                    Number(element.population) >
                    Number(capitalComMaiorPopulacao.population)
                ) {
                    capitalComMaiorPopulacao = element;
                }
            });
        return capitalComMaiorPopulacao;
    };

    const obterCapitalComMenorPopulação = (data) => {
        let capitalComMenorPopulacao = data[0];
        data &&
            data.forEach((element) => {
                if (
                    Number(element.population) <
                    Number(capitalComMenorPopulacao.population)
                ) {
                    capitalComMenorPopulacao = element;
                }
            });
        return capitalComMenorPopulacao;
    };

    return (
        <div>
            <h3>
                Capital com maior população da Europa:{" "}
                {obterCapitalComMaiorPopulação(populacaoEuropa)?.capital}
            </h3>
            <h3>
                Capital com menor população da Europa:{" "}
                {obterCapitalComMenorPopulação(populacaoEuropa)?.capital}
            </h3>
        </div>
    );
};

export default Questao03;
