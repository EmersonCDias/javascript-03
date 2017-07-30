/* ANOTAÇÕES
============================================================================================================

Classes que possuem funções específicas para executarem um certa resposabilidade

- O "..." é um recurso chamado "spread operator". Ele faz com que o primeiro item do array seja passado para o primeiro parâmetro construtor e assim por diante
- Da forma que está, se passarmos o mês 10, será imprimido como se fosse mê 11, pois é um array que começa em zero.
- Para resolver, usamos a função map que recebe um array, aplica um determinada lógica 

============================================================================================================
*/

class DataHelper{

    constructor(){

        throw new Error("Está classe não pode ser instanciada");
    }

    //Para não ficar instanciando a classe a todo momento, adiciona-se o "static" que faz com que o método da classe possa ser chamado sem precisar instanciar
    static textoParaData(texto){        

        //Validação do formato da data - FAIL FAST
        if(!/\d{4}-\d{2}-\d{2}/.test(texto)) throw new Error("Formato de data incorreto! Certifique-se que o formato siga a ordem AAAA-MM-DD.");
        return new Date(...texto.split("-").map((item, indice) => item - indice % 2));
    }

    //Para não ficar concatenando texto e variável com " + ", usa-se `${dado}` 
    static dataParaTexto(data){
        return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`;
    }
}