function validaCPF(){
    const cpf = document.getElementById("cpf").value;

    if (cpf.length != 11){
        alert("O CPF deve conter 11 dígitos");
        return false;
    }

    if (verificarDigitosRepetidos(cpf)){
        mostraResultado("O CPF não pode conter repetição de digitos","red");
    }

    const digito1 = calcularDigitoVerificador(cpf,1);
    const digito2 = calcularDigitoVerificador(cpf,2);

    if(digito1 && digito2){
        mostraResultado(`O CPF ${cpf} é válido`,"green");
        alert("O CPF é válido");
    } else {
        mostraResultado(`O CPF ${cpf} é inválido`,"red");
        alert("O CPF é inválido");
    }
}

function mostraResultado(text,color){
    const span = document.getElementById("result");

    span.innerHTML = text;
    span.style.color = color;
}

function verificarDigitosRepetidos(cpf){
    return cpf.split('').every(d => d === cpf[0]);
}

function calcularDigitoVerificador(cpf,posicao){
    const sequencia = cpf.slice(0, 8 + posicao).split('');

    let soma = 0;
    let multiplicador = 9 + posicao;

    for(const numero of sequencia){
        soma += multiplicador * Number(numero);
        multiplicador--;
    }

    const restoDivisao = (soma * 10) % 11;
    const digito = cpf.slice(8 + posicao, 9 + posicao);

    return restoDivisao == digito;
}
