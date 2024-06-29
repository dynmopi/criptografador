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

    let idResultado = function(idResultado){
        const resultado = document.getElementById('idResultado');
        
        return resultado;
    }

    let pegarElementoId = function(area, botao1, botao2){
    let texto = document.getElementById(area);
    // const resultado = document.getElementById(id);
    // console.log(texto.value)
    console.log(botao1)
    console.log(botao2)
    console.log(idResultado.value)

    

    if (botao1 !== undefined){
        let criptografar = criptografador(texto.value, conversor);
        idResultado.innerHTML = criptografar;
        console.log(criptografar)

    } else {
        console.log(id);
        let descriptografar = descriptografia(texto.value, conversor);
        idResultado.innerHTML = descriptografar;
    }
    texto.value = "";
    
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






