function executarCalculo() {

    var operacao = document.getElementById("txtOperacao").value;
	
	var primeiroValor = document.getElementById("txtPrimeiroValor").value;
	var segundoValor = document.getElementById("txtSegundoValor").value;
	
	var resultado = 0;
	
	switch(operacao) {
		case "+":
			resultado = somar(primeiroValor, segundoValor);
			exibirResultado(resultado);
			break;
		case "-":
			resultado = subtrair(primeiroValor, segundoValor);
			exibirResultado(resultado);
			break;
		case "*":
			resultado = multiplicar(primeiroValor, segundoValor);
			exibirResultado(resultado);
			break;
		case "/":
            if(primeiroValor != 0 && segundoValor != 0) {
                resultado = dividir(primeiroValor, segundoValor);
                exibirResultado(resultado);
                break;
            }
            else {
                alert('Não é possível divisão por zero!');
            }
		default:
			alert('Operação inválida!');
			break;			
	}
}

function somar(a, b) {
	return parseInt(a) + parseInt(b);
}

function subtrair(a, b) {
	return a - b;
}

function dividir(a, b) {
	return a / b;
}

function multiplicar(a, b) {
	return a * b;
}

function exibirResultado(r) {
	alert("O resultado da operação é:" + r);
}
