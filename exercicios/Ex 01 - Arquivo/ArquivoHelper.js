class ArquivoHelper{

    static _quebraArquivo(arquivo){
        return new Arquivo(...arquivo.split("/"));
    }
}