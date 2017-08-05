class NegociacoesView extends View {

    constructor(elemento) {
        super(elemento);
    }

    template(model) {
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
                    <!--Qnd há apenas um retorno, não precisamos usar chaves e nem o "return"-->
                    ${model.negociacoes.map(n => `
                        <tr>
                            <td>${DataHelper.dataParaTexto(n.data)}</td>
                            <td>${n.quantidade}</td>
                            <td>${n.valor}</td>
                            <td>${n.calcVolume()}</td>
                        </tr>
                    `).join("")}
                </tbody>
            <tfoot>
                <tr>
                    <td colspan="3"></td>
                    <td>
                        ${model.negociacoes.reduce((total, num) => total + num.calcVolume(), 0.0)}
                    </td>
                </tr>
            </tfoot>
        </table>
        `;
    }
}

// Função que chama ela msm através do "()" (no final do códiigo) para somar o volume (outra opção).
// $ {
//     (function () {
//         let total = 0;
//         model.negociacoes.forEach(n => total += n.calcVolume());
//         return total;
//     })()
// }