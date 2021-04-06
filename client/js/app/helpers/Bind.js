class Bind {
	constructor(model, view, props) {

		let proxy = ProxyFactory.create(model, props, (model) =>
			view.update(model));

		view.update(model);

		return proxy;

		// this._listaNegociacoes = ProxyFactory.create(
		//     new ListaNegociacoes(),
		//     ['adiciona', 'esvazia'], model=> 
		//     this._negociacoesView.update(model));
	}
}