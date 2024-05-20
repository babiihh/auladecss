function decimal_octal(numero) {
    octal = "";
    if (numero < 8) {
        return numero;
    }
    while(numero > 7) {
        resto = numero % 8;
        octal = resto.toString()+octal;
        numero = Math.floor(numero/8)
    } 
    return numero.toString() + octal;
}

function teste_decimal_to_octal() {
    console.log("Iniciando Teste");
resultado = decimal_octal(64);
if (resultado == 100) {
    console.log("Passou no teste do 64");
}

else ("Não passou no teste do 64")
}

if (resultado = "0") {
    console.log("Passou no teste do 0")
}
else {
    console.log("Não passou no testo do 0");
}

teste_decimal_to_octal();