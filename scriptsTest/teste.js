// algoritmo que troca a letra digitada, para outra letra pré-definida

// function cripto(frase){
//     let tradutor = "";
//     let c = 0;
//         while (c < frase.length){
//         tradutor = tradutor + frase[c];
//             if (tradutor == "A"){
//                 tradutor = "@"
//             }
//             c++
//         }
//         return tradutor;
// }
// console.log(cripto("A"));






// console.log(cripto("aasdasd"))

// chat gpt
// let str = "exemplo";
// for (let i = 0; i < str.length; i++) {
//   console.log(str[i]);
// }

// let algumaCoisa = "teste";
// let c = 0
// while (c < algumaCoisa.length){
//     console.log(algumaCoisa[c]);
//     c++
// }


// separador de strings usando arrays

// let texto = "danrley";

// console.log(texto[])







// a ideia do algoritmo, é pegar a frase do usuario para dividir letra por letra, e colocando no resultado final
function cripto(frase){
    let tradutor = "";
    let letra = "";
    let c = 0;
        //estrutura de repetição que verifica letra por letra
        while (c < frase.length){
        verificador = frase[c]; // frase[0] = a primeira letra, frase[1] = a segunda letra
            if (verificador == "A"){
                letra = "@";
            } else if (verificador == "B") {
                letra = "#";
            } else if (verificador == "C") {
                letra = "6"
            }
            //o tradutor seria uma nova palavra, ele recebeu uma string vazia, e foi somando com os resultados da estrutura de repetição.
            tradutor = tradutor + letra
            c++
        }
        return tradutor; // para retornar o resultado final da string que antes era vazia, agora tem novos caracteres.

}


// para criar um decodificador, basta inverter os caracteres.
function decodi(frase){
    let tradutor = "";
    let letra = "";
    let c = 0;

    while (c < frase.length){
        verificador = frase[c];
        if (verificador == "@"){
            letra = "A";
        } else if (verificador == "#"){
            letra = "B";
        } else if (verificador == "6"){
            letra = "C";
        }
        tradutor = tradutor + letra;
        c++
    }
    return tradutor;
}

console.log(cripto("A"));
console.log(decodi(""));