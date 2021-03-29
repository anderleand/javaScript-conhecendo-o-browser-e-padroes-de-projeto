class NegociacoesView {

    constructor(elemento){
        this._elemento = elemento;
    }

    _template(modelo) {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>
            <tbody>
            ${modelo.negociacoes.map(n => `

                <tr>
                    <td>${DateHelper.dataParaTexto(n.data)}</td>
                    <td>${n.quantidade}</td>
                    <td>${n.valor}</td>
                    <td>${n.volume}</td>
                </tr>

            `).join('')}
            </tbody>
            <tfoot>
            <td colspan="3"><b>Total</b></td>
            <td>${
                (function(){
                    let total = 0
                    modelo.negociacoes.forEach(n => total += n.volume);
                    return total;
                })()
            }</td>
            </tfoot>
        </table>
        `;
    }

    update(modelo){
        this._elemento.innerHTML = this._template(modelo)
    }
}