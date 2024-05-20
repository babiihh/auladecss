function decimal_binario(numero) {
    binario = "";
    if (numero == 0) {
        return "0";
    }
    while(numero > 0) {
        resto = numero % 2;
        binario = resto.toString()+binario;
        numero = Math.floor(numero/2)
    } 
    return binario;
    
}

function teste_decimal_to_binario() {
    console.log("Iniciando Teste");
resultado = decimal_binario(25);
if (resultado == 11001) {
    console.log("Passou no Teste");
}

else ("Não passou no teste")
}

if (resultado = "0") {
    console.log("Passou no teste do 0")
}
else {
    console.log("Não passou no testo do 0");
}

teste_decimal_to_binario();