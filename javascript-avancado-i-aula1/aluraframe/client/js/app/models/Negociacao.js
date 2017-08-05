/* ANOTAÇÕES
============================================================================================================
============================================================================================================
MODEL: Abstração de algo do mundo real
Obs: Convenciona-se a criar a classes com letra maiúscula
============================================================================================================
============================================================================================================
*/

//Criando a classe Negociacao
class Negociacao {

    //Definindo atributos da classe
    constructor(data, quantidade, valor) {
        //Para mostrar que os atributos de uma classe não podem ser alterados, convenciona-se iniciar o nome dos atributos com "_";
        this._data = new Date(data.getTime());
        this._quantidade = quantidade;
        this._valor = valor;
        //Congela as propriedades do objeto e não permite alteração
        //Não congela Date() pois trata-se de um outro objeto que tem outras propriedades e características
        Object.freeze(this);
        
    }

    //Funções dentro de classes são chamados métodos
    calcVolume() {
        return this._quantidade * this._valor;
    }

    //Ao invés de usar "getData" pode-se usar "get data()"
    //Para acessar estes métodos basta chamar como se fosse uma propriedade = .data
    get data(){
        return new Date(this._data.getTime());
    }

    //Ao invés de usar "getData" pode-se usar "get quantidade()"
    //Para acessar estes métodos basta chamar como se fosse uma propriedade = .quantidade
    get quantidade(){
        return this._quantidade;
    }

    //Ao invés de usar "getData" pode-se usar "get valor()"
    //Para acessar estes métodos basta chamar como se fosse uma propriedade = .valor
    get valor(){
        return this._valor;
    }
}