class NegociacaoService {

  constructor() {

    this._http = new HttpService();
  }

  obterNegociacoesDaSemana() {
    console.log('obterNegociacoesDaSemana');
    return new Promise((resolve, reject) => {

      this._http
        .get('negociacoes/semana')
        .then(negociacoes => {
          resolve(negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));

        })
        .catch(erro => {
          console.log(erro);
          reject('Não foi possível obter as negocições da semana');
        });
    });
  }

  obterNegociacoesDaSemanaAnterior() {
    console.log('obterNegociacoesDaSemanaAnterior');
    return new Promise((resolve, reject) => {

      this._http
        .get('negociacoes/anterior')
        .then(negociacoes => {
          resolve(negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));

        })
        .catch(erro => {
          console.log(erro);
          reject('Não foi possível obter as negocições da semana anterior');
        });
    });

  }
  obterNegociacoesDaSemanaRetrasada() {
    console.log('obterNegociacoesDaSemanaRetrasada');
    return new Promise((resolve, reject) => {

      this._http
        .get('negociacoes/retrasada')
        .then(negociacoes => {
          resolve(negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));

        })
        .catch(erro => {
          console.log(erro);
          reject('Não foi possível obter as negocições da semana anterior');
        });
    });
  }

}