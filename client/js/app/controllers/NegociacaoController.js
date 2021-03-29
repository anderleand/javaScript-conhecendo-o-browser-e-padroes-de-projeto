class NegociacaoController {

    constructor() {
        let $ = document.querySelector.bind(document);

        this._inputData = $('[data-tipo="data"]');
        this._inputQuantidade = $('[data-tipo="quantidade"]');
        this._inputValor = $('[data-tipo="valor"]');
        this._listaNegociacoes = new ListaNegociacoes();
        this._negociacoesView= new NegociacoesView($('[data-tipo="negociacoesView'));
        this._negociacoesView.update(this._listaNegociacoes)

    }

    adiciona(event) {
        event.preventDefault();

        //let data = new Date(this._inputData.value.replace(/-/g, ','));
        // let helper = new DateHelper()
        // helper.textoParaData(this._inputData.value);

        this._listaNegociacoes.adiciona(this._criaNegociacao())
        this._negociacoesView.update(this._listaNegociacoes)
        this._limpaFormulario()

        console.log(this._listaNegociacoes.negociacoes)
        // console.log(this._inputData.value);
        // console.log(this._inputQuantidade.value);
        // console.log(this._inputValor.value);
        // console.log(negociacao);
        // console.log(DateHelper.dataParaTexto(negociacao.data));

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