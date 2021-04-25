class NegociacaoDao {
    constructor(connection){
        this._connection = connection;
        this._store = 'negociacoes';
    }

    adiciona(){
        return new Promise((resolve, reject) => {
            let transaction = this._connection.transaction([this._store], 'readwrite');
            let store = this._store.objectStore(this._store);
            let request = this._store.add(this._store);

            request.onsuccess = e=>{
                resolve();
            }

            request.onerror = e=>{
                consile.log(e.target.error);
                reject('Não foi possivel adicionar a negociação.')
            }
        });
    }
}