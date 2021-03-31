class ListaNegociacoes {

    constructor(armadilha) {    //Recebe a 'armadilha' através de uma arrow function em MegociacaoController.js 
        this._negociacoes = [];
        this._armadilha = armadilha;

    }

    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
        this._armadilha(this);

    }

    get negociacoes() {
        return [].concat(this._negociacoes);
    }

    esvazia() {
        this._negociacoes = []
        this._armadilha(this);


    }
}