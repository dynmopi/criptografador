// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

let textArea = document.getElementById('input').value;

//objetos
let substituir = {
    'a':'ai',
    'e':'enter',
    'i':'imes',
    'o':'ober',
    'u':'ufat',
}

function criptografar(textArea, substituir){
    console.log(typeof(textArea))
    let resultado = '';
    let i = 0;
    while (i < textArea.length){
        let letra = textArea[i];
        if (substituir.hasOwnProperty(letra)){
            resultado += substituir[letra];
        } else {
            resultado += letra;
        }
        i++
    }
    return resultado
}

//  let textoCriptografado = criptografar(textArea.toLowerCase(), substituir);
//  console.log(`criptografado ${textoCriptografado}`);

