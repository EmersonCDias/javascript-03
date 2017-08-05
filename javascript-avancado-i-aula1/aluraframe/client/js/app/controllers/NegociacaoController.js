/* ANOTAÇÕES
============================================================================================================

CONTROLLER: Captura os dados informados pelo usuário e passa para o MODEL
Obs: Convenciona-se a criar a classes com letra maiúscula

============================================================================================================
*/

class NegociacaoController {

    constructor() {
        //O "bind" serve para fazer com que o getElementById mantenha a associação com "document" ao ser invocado
        //O bind, neste exemplo, serve para que o getElementById não saia do escopo do document
        let $docGEBI = document.getElementById.bind(document);
        this._inputData = $docGEBI("data");
        this._inputQuantidade = $docGEBI("quantidade");
        this._inputValor = $docGEBI("valor");

        this._listaNegociacoes = new ListaNegociacoes();

        this._negociacoesView = new NegociacoesView($docGEBI("negociacoesView"));
        this._negociacoesView.update(this._listaNegociacoes);
        
        this._msg = new Mensagem();
        this._msgView = new MensagemView($docGEBI("mensagemView"));
        this._msgView.update(this._msg);
    }

    adiciona(event) {

        event.preventDefault();

        this._listaNegociacoes.adiciona(this._criaNegociacao());
        this._negociacoesView.update(this._listaNegociacoes);

        this._msg.texto = "Negociação adicionada com sucesso!";
        this._msgView.update(this._msg);
        
        this._limpaFormulario();
    }

    _criaNegociacao() {
        return new Negociacao(
            DataHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value)
    }

    _limpaFormulario() {
        this._inputData.value = "";
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;
        this._inputData.focus();
    }

}