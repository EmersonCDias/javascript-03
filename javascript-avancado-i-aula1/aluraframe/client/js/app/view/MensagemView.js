class MensagemView extends View{

    constructor(elemento) {

        super(elemento);
    }

    template(model) {
        // IF ternario
        // Em JavaScript, texto em branco, 0 ou nulo é tratado como FALSE
        // Lê-se "? Se texto for diferente de branco, 0 ou nulo, mostre notificação, se não, não dê msg alguma"
        return model.texto ? `<p class="alert alert-info"> ${model.texto} </p>` : `<p></p>`;
    }
}