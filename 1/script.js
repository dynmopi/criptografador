
function criptografar(){
    // let resultado = document.getElementById('output')
    let frase = document.getElementById('input');
    let c = 0;
    let resultado = "";
    let tradutor;

while (c < frase.length){
let verificador = frase[c];
    if (verificador == "A" || verificador == "a" || verificador == "L" || verificador == "l" || verificador == "W"){
        letra = "@";
    } else if (verificador == "B" || verificador == "b" || verificador == "M" || verificador == "m" || verificador == "w"){
        letra = "#";
    } else if (verificador == "C" || verificador == "c" || verificador == "N" || verificador == "n" || verificador == "X"){
        letra = "$"
    } else if (verificador == "D" || verificador == "d" || verificador == "O" || verificador == "o" || verificador == "x"){
        letra = "%"
    } else if (verificador == "E" || verificador == "e" || verificador == "P" || verificador == "p" || verificador == "Y"){
        letra = "&"
    } else if (verificador == "F" || verificador == "f" || verificador == "Q" || verificador == "q" || verificador == "y"){
        letra = "*"
    } else if (verificador == "G" || verificador == "g" || verificador == "R" || verificador == "r" || verificador == "Z"){
        letra = "ç"
    } else if (verificador == "H" || verificador == "h" || verificador == "S" || verificador == "s" || verificador == "z"){
        letra = "8"
    } else if (verificador == "I" || verificador == "i" || verificador == "T" || verificador == "t"){
        letra = "n"
    } else if (verificador == "J" || verificador == "j" || verificador == "U" || verificador == "u"){
        letra = "l"
    } else if (verificador == "K" || verificador == "k" || verificador == "V" || verificador =="v"){
        letra = "!"
    } else {
        letra = "";
    }
        resultado = tradutor + letra;
        c++;
        console.log(resultado)
        
    }
    return tradutor;
}

criptografar()