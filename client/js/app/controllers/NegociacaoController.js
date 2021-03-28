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

        let data = new Date(...
            this._inputData.value
            .split('-')
            .map( function (item, indice){
                    return item - indice % 2;
            })
        );
        //let data = new Date(this._inputData.value.replace(/-/g, ','));

        // let negociacao = new Negociacao(
        //     this._inputData.value,
        //     this._inputQuantidade.value,
        //     this._inputValor.value
        // );
        console.log(data);
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



    // adiciona(event) {
    //     event.preventDefault();

    //         let inputs = document.querySelectorAll('input');
    //         console.log(inputs);
    //         inputs.forEach((input) => {
    //             let tipoDeInput = input.dataset.tipo

    //             if (tipoDeInput === 'data') {
    //                 this.inputData = input.value
    //             } else if (tipoDeInput === 'quantidade') {
    //                 this.inputQuantidade = input.value
    //             } else if (tipoDeInput === 'valor') {
    //                 this.inputValor = input.value
    //             }
    //         })
    //         console.log(this.inputData);
    //         console.log(this.inputQuantidade);
    //         console.log(this.inputValor);
    // }
}