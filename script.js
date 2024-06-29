// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

// "gato" => "gaitober"
// gaitober" => "gato"

const conversor = new Map(); //objeto Map
conversor.set("a", "ai");
conversor.set("e", "enter");
conversor.set("i", "imes");
conversor.set("o", "ober");
conversor.set("u", "ufat");

// a -> ai
let criptografador = function(texto, conversor){
    let textoCriptografado = "";
    
    for (let i = 0; i < texto.length; i++) {
        if (conversor.get(texto[i]) === undefined){
            textoCriptografado = textoCriptografado . concat((texto[i]));
        } else {
            textoCriptografado = textoCriptografado . concat(conversor.get(texto[i]))
        }
        
    }
    
    return textoCriptografado;
}

// ai -> a
    let descriptografia = function(textoCriptografado, conversor){ //pega a referência da função criptografador
    let conversorInverso = "";
    conversor.forEach((valor, chave) => {
        conversorInverso = conversorInverso.replace(valor, chave);
    });

    return conversorInverso;
}
//  console.log(java);

    let pegarElementoId = function(id, idResultado){
    let texto = document.getElementById(id);
    let resultado = document.getElementById(idResultado);
    console.log(texto.value)

    if(id === 'botao-1'){
        let criptografar = criptografador(texto.value, conversor);
        resultado.innerHTML = criptografar;

        console.log(id);    
    } else {
        console.log(id);
        let descriptografar = descriptografia(texto.value, conversor);
        resultado.innerHTML = descriptografar;
    }
    
    
 }


// pegarElementoId('botao-1')



// teste do algoritmo
const palavraOriginal = "gato";
const palavraCriptografada1 = "gaitober";

function testeCriptografar(){
    criptografador("gato", conversor)

    if (palavraCriptografada1 === criptografador("gato", conversor)){
        console.log("deu certo");
    } else {
        console.log("deu errado");
    }
}


function testeDescriptografar(){

let testeDoManoJava = descriptografia(palavraCriptografada1, conversor); 
    if (testeDoManoJava === palavraOriginal){
        console.log("deu errado");
    } else {
        console.log("deu certo");
    }
}

testeCriptografar();
testeDescriptografar();






