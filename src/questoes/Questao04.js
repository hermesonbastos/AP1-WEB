import { useEffect, useState } from "react";

// promise retornando o array após 3 segundos
const europePopulation = new Promise((resolve, rejected) => {
    setTimeout(() => {
        resolve([
            { capital: ["Dublin"], population: 4994724 },
            { capital: ["Nicosia"], population: 1207361 },
            { capital: ["Madrid"], population: 47351567 },
        ]);
    }, 3000);
});

const Questao04 = () => {
    const [populacaoEuropa, setPopulacaoEuropa] = useState([]);

    // useEffect sem dependências para realizar a requisição apenas uma vez a cada renderização do componente
    useEffect(() => {
        const obterPopulacaoEuropa = async () => {
            const populacao = await europePopulation;
            setPopulacaoEuropa(populacao);
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

export default Questao04;
