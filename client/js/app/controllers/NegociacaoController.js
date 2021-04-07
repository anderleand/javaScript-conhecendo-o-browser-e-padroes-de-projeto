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
        //alert("Importando Negociações")
        let xhr = new XMLHttpRequest();

        xhr.open('GET', 'negociacoes/xsemana');
        xhr.onreadystatechange = () => {
            /*
            0: requisição ainda não iniciada
            1: conexão com o servidor estabelecida
            2: requisição recebida
            3: processando requisição
            4: requisição está concluída e a resposta está pronta
            */
            if (xhr.readyState == 4) {

                if (xhr.status == 200) {
                    console.log('Obtendo as negociações do servidor.');

                    JSON.parse(xhr.responseText)
                    .map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor))
                    .forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
                    this._mensagem.texto = 'Negociações importadas com sucesso.'

                } else {
                    console.log(xhr.responseText);
                    this._mensagem.texto = 'Não foi possível obter as negociações da semana'; 

                }
            }
        }
        xhr.send();
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