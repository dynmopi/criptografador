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


function copiarTexto(){
    let botaoCopiar = document.getElementById('botao3');
    let texto = document.getElementById('idResultado');
    console.log(botaoCopiar);

    if(texto.value === ''){
        alert(`[ERRO] Digite seu texto e depois faça o processo.`)
    } else {
        texto.select();
        texto.setSelectionRange(0, 99999);

        //api que substituiu o document.execCommand
        navigator.clipboard.writeText(texto.value).then(function() {
            // alert(`Texto copiado ${texto.value}`);
        }).catch(function(error) {
            console.log('Erro ao copiar');
        })
    
    }
    }


// a -> ai
function criptografador(texto, conversor){
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

    let descriptografia = function(textoCriptografado){ //pega a referência da função criptografador
    const inversoConversor = new Map();
        for (let [chave, valor] of conversor.entries()){
            inversoConversor.set(valor, chave);
        }

    let conversorInverso = textoCriptografado;

    for(let [chave, valor] of inversoConversor.entries()){
        const regex = new RegExp(chave, 'g');
        conversorInverso = conversorInverso.replace(regex, valor);
    }

    return conversorInverso;
}   
//  console.log(java);

    let mostrarNaTela = function(area, botao){
        
    //regex para validar o texto, isso não está funcionando, sempre tá dando true. 
    const validarTexto = (area) => { 
        return /^[a-z]+$/.test(area); 
      };
    
    console.log(Boolean(validarTexto));

    let texto = document.getElementById(area);
    const resultado = document.getElementById('idResultado');
    
    //testes para verificar os botões selecionados
    console.log(botao)
    console.log(idResultado.value)

    let criptografar = criptografador(texto.value, conversor);
    //isso porque a função descriptografia() precisa do textoCriptografado

    if(validarTexto === true && botao == 'botao1'){
        resultado.innerHTML = criptografar;
        console.log(criptografar);

    } else if (validarTexto === true && botao == 'botao2') {
        resultado.innerHTML = descriptografia(texto.value)
        console.log(descriptografia(texto.value, conversor));
    } 
        texto.value = "";
    
    }

    
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
criptografador(palavraOriginal, conversor)
let testeDoManoJava = descriptografia(palavraCriptografada1);

// console.log(testeDoManoJava); 

    if (testeDoManoJava === palavraOriginal){
        console.log("deu certo");
    } else {
        console.log("deu errado");
    }
}

testeCriptografar();
testeDescriptografar();






