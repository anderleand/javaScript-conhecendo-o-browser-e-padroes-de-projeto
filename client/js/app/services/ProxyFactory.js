class ProxyFactory {
    static createProxy(objeto, props, acao) {

        new Proxy(new ListaNegociacoes(), {

            get(target, prop, receiver) {

                if (['adiciona', 'esvazia'].includes(prop) && typeof (target[prop]) == typeof (Function)) {

                    return function () {

                        console.log(`interceptando ${prop}`);
                        Reflect.apply(target[prop], target, arguments);
                        self._negociacoesView.update(target);
                    }
                }

                return Reflect.get(target, prop, receiver);
            }

        });
    }
}