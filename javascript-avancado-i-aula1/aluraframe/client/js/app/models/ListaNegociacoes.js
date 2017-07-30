class ListaNegociacoes{

    constructor(){

        this._negociacoes = []
    }

    get negociacoes(){
        
        //Retornará uma cópia do array original, não sendo possível alterá-lo
        return [].concat(this._negociacoes);
    }

    adiciona(negociacao){

        this._negociacoes.push(negociacao);
    }

    
}