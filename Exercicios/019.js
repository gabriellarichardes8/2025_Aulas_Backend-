let serie = {
    titulo: "O verão que mudou minha vida",
    diretor: "Jenny Han",
    genero:["Românce", "Drama", "Suspense"],
    ano_lancamento: '2022',
    nr_temporadas: '3',
    episodios: [
        {temporada: '1', nr_episodio: '2', titulo1: "Vestido de verão", duracao: '50 minutos' },
        {temporada: '2', nr_episodio: '6', titulo1: "Escala de ódio", duracao: '55 minutos' },
        {temporada: '3', nr_episodio: '11', titulo1: "E por último", duracao: '1 hora e 25 minutos' },
    ]
}

console.log(serie.episodios[2].titulo1);
console.log(serie.episodios[2].duracao);
console.log(serie.episodios[2].temporada);

console.log(`O episódio "${serie.episodios[2].titulo1}" da temporada ${serie.episodios[2].temporada}, tem duração de ${serie.episodios[2].duracao}.`);

