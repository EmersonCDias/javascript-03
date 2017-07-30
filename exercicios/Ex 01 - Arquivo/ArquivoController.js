class ArquivoController{

    constructor(){

        this._inputDados = document.querySelector(".dados-arquivo");
    }

    _envia(){
        let objArquivo = ArquivoHelper._quebraArquivo(this._inputDados.value);
        console.log(`Nome: ${objArquivo.nome} Tamanho: ${objArquivo.tamanho} Tipo: ${objArquivo.tipo}`);
        this._limpaFormulario();
    }

    _limpaFormulario(){
        this._inputDados.value = "";
        this._inputDados.focus();
    }
}