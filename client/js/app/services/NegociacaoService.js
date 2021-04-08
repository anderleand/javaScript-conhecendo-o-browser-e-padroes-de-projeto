class NegociacaoService {

  constructor() {

    this._http = new HttpService();
  }

  obterNegociacoesDaSemana() {
    console.log('obterNegociacoesDaSemana');
    return this._http
      .get('negociacoes/semana')
      .then(negociacoes => {
        return negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor));

      })
      .catch(erro => {
        console.log(erro);
        throw new Error('Não foi possível obter as negocições da semana');
      });

  }

  obterNegociacoesDaSemanaAnterior() {
    console.log('obterNegociacoesDaSemanaAnterior');
    return this._http
      .get('negociacoes/anterior')
      .then(negociacoes => {
        return negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor));

      })
      .catch(erro => {
        console.log(erro);
        throw new Error('Não foi possível obter as negocições da semana anterior');
      });

  }
  obterNegociacoesDaSemanaRetrasada() {
    console.log('obterNegociacoesDaSemanaRetrasada');
    return this._http
      .get('negociacoes/retrasada')
      .then(negociacoes => {
        return negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor));

      })
      .catch(erro => {
        console.log(erro);
        throw new Error('Não foi possível obter as negocições da semana retrasada');
      });
  }

}