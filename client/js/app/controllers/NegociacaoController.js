class NegociacaoController {

    constructor() {
        let $ = document.querySelector.bind(document);

        this._inputData = $('[data-tipo="data"]');
        this._inputQuantidade = $('[data-tipo="quantidade"]');
        this._inputValor = $('[data-tipo="valor"]');

    }

    adiciona(event) {
        event.preventDefault();

        console.log(this._inputData.value);
        console.log(this._inputQuantidade.value);
        console.log(this._inputValor.value);

        
        //let data = new Date(this._inputData.value.replace(/-/g, ','));
        let helper = new DateHelper()
        helper.textoParaData(this._inputData.value);

        let negociacao = new Negociacao(
        helper.textoParaData(this._inputData.value);
        ,
            this._inputQuantidade.value,
            this._inputValor.value
        );

        
        console.log(negociacao);
        console.log(helper.dataParaTexto(negociacao.data));
        
        this._inputData.value = ''
        this._inputQuantidade.value = '1'
        this._inputValor.value ='0.0'
        
        this._inputData.focus()
        
        //adicionar a negociacao em uma lista
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