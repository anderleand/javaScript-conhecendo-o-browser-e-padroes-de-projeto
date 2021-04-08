class NegociacaoController {

  constructor() {
    let $ = document.querySelector.bind(document);

    this._inputData = $('[data-tipo="data"]');
    this._inputQuantidade = $('[data-tipo="quantidade"]');
    this._inputValor = $('[data-tipo="valor"]');

    // this._listaNegociacoes = new ListaNegociacoes(model => 
    //     this._negociacoesView.update(model));

    //this._negociacoesView = new NegociacoesView($('[data-tipo="negociacoesView'));
    this._listaNegociacoes = new Bind(
      new ListaNegociacoes(),
      new NegociacoesView($('[data-tipo="negociacoesView')),
      'adiciona', 'esvazia');

    // this._listaNegociacoes = ProxyFactory.create(
    //     new ListaNegociacoes(),
    //     ['adiciona', 'esvazia'], model=> 
    //     this._negociacoesView.update(model));

    //this._negociacoesView.update(this._listaNegociacoes);

    this._mensagemView = new MensagemView($('[data-tipo="mensagemView'));
    this._mensagem = new Bind(
      new Mensagem(),
      new MensagemView($('[data-tipo="mensagemView')),
      'texto');

    // this._mensagem = ProxyFactory.create(
    //     new Mensagem(),
    //     ['texto'], model=>
    //         this._mensagemView.update(model));

    //this._mensagemView.update(this._mensagem)
  }

  adiciona(event) {
    event.preventDefault();

    //let data = new Date(this._inputData.value.replace(/-/g, ','));
    // let helper = new DateHelper()
    // helper.textoParaData(this._inputData.value);

    this._listaNegociacoes.adiciona(this._criaNegociacao());
    this._mensagem.texto = 'Negociação adicionada com sucesso!';
    this._limpaFormulario();

    console.log('Lista de negociações criada.')
    //console.log(this._listaNegociacoes.negociacoes)
    // console.log(this._inputData.value);
    // console.log(this._inputQuantidade.value);
    // console.log(this._inputValor.value);
    // console.log(negociacao);
    // console.log(DateHelper.dataParaTexto(negociacao.data));
  }

  importaNegociacoes() {
    let service = new NegociacaoService();

    Promise.all([
      service.obterNegociacoesDaSemana(),
      service.obterNegociacoesDaSemanaAnterior(),
      service.obterNegociacoesDaSemanaRetrasada()]
    ).then(negociacoes => {
      negociacoes
        .reduce((ArrayAchatado, array) => ArrayAchatado.concat(array), [])
        .forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
      this._mensagem.texto = 'Negociações importadas com sucesso.'
    })
      .catch(erro => this._mensagem.texto = erro);


    /*
    service.obterNegociacoesDaSemana()
      .then(negociacoes => {
        negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao))
        this._mensagem.texto = 'Negociações da semana obtida com sucesso';
      })
      .catch(erro => this._mensagem.texto = erro);

    service.obterNegociacoesDaSemanaAnterior()
      .then(negociacoes => {
        negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao))
        this._mensagem.texto = 'Negociações da semana anterior obtida com sucesso';
      })
      .catch(erro => this._mensagem.texto = erro);

    service.obterNegociacoesDaSemanaRetrasada()
      .then(negociacoes => {
        negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao))
        this._mensagem.texto = 'Negociações da semana retrasada obtida com sucesso';
      })
      .catch(erro => this._mensagem.texto = erro);*/

    // service.obterNegociacoesDaSemana((erro, negociacoes)=>{

    //   if(erro){
    //     this._mensagem.texto = erro;
    //     return;
    //   }

    //   negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
    //   this._mensagem.texto = 'Negociações importadas com sucesso';
    // });

    // service.obterNegociacoesDaSemanaAnterior((erro, negociacoes)=>{

    //   if(erro){
    //     this._mensagem.texto = erro;
    //     return;
    //   }

    //   negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
    //   this._mensagem.texto = 'Negociações importadas com sucesso';
    // });
    // service.obterNegociacoesDaSemanaRetrasada((erro, negociacoes)=>{

    //   if(erro){
    //     this._mensagem.texto = erro;
    //     return;
    //   }

    //   negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
    //   this._mensagem.texto = 'Negociações importadas com sucesso';
    // });
  }

  apaga() {

    this._listaNegociacoes.esvazia();
    this._mensagem.texto = 'Lista de negociações apagadas.'

    console.log('Lista de negociações apagada.')
  }

  _criaNegociacao() {
    return new Negociacao(
      DateHelper.textoParaData(this._inputData.value),
      this._inputQuantidade.value,
      this._inputValor.value
    );
  }

  _limpaFormulario() {
    this._inputData.value = ''
    this._inputQuantidade.value = '1'
    this._inputValor.value = '0.0'
    this._inputData.focus()
  }



  // let data = new Date(...
  //     this._inputData.value
  //     .split('-')
  //     .map( function (item, indice){
  //         if(indice == 1){
  //             return item -1;
  //         }
  //         return item;
  //     })
  // );



  // constructor() {
  //   
  //         let inputs = document.querySelectorAll('input');
  //         console.log(inputs);
  //         inputs.forEach((input) => {
  //             let tipoDeInput = input.dataset.tipo

  //             if (tipoDeInput === 'data') {
  //                 this.inputData = input
  //             } else if (tipoDeInput === 'quantidade') {
  //                 this.inputQuantidade = input
  //             } else if (tipoDeInput === 'valor') {
  //                 this.inputValor = input
  //             }
  //         })
  //         console.log(this.inputData.value);
  //         console.log(this.inputQuantidade.value);
  //         console.log(this.inputValor.value);
  // }
}