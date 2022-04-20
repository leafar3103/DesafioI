var cripto = document.querySelector(".botaoAzul"); //Identifica o Botão Azul
cripto.addEventListener("click",criptografar);
var descripto = document.querySelector(".botaoCinza"); //Identifica o Botão Cinza
descripto.addEventListener("click",descriptografar);



let texto = document.querySelector(".textoInsert"); //Pega o campo do input
let criptografia = texto.texto.value // Essa váriavel pega o valor do name no iput do form
let msg = document.querySelector(".resultadoMsg");
let resultadoMsg = "";
let msgDiv = document.createElement("p");
// let mensagem = document.querySelector(".mensagem")
// let resultadoMsg = mensagem.resultado.value

function criptografar(){
    event.preventDefault();
    criptografia = texto.texto.value; // Essa váriavel pega o valor do name no iput do form
   
    let result=criptografia.replace(/e/gi,"enter")
                            .replace(/i/gi, "imes")
                            .replace(/a/gi, "ai")
                            .replace(/o/gi, "ober")
                            .replace(/u/gi, "ufat");
    criptografia = result;
    console.log(criptografia);
    resultadoMsg = criptografia;
    resultado();
    
    // alert(criptografia);
}

function descriptografar(){
    event.preventDefault()
    criptografia = texto.texto.value;// Essa váriavel pega o valor do name no iput do form
    let result=criptografia.replace(/enter/gi,"e")
                            .replace(/imes/gi, "i")
                            .replace(/ai/gi, "a")
                            .replace(/ober/gi, "o")
                            .replace(/ufat/gi, "u");
    criptografia = result;
    console.log(criptografia); 
    resultadoMsg = criptografia;
    resultado();                     
}

function resultado(){
    
    criptografia = texto.texto.value; // Essa váriavel pega o valor do name no iput do form
    msgDiv.textContent = resultadoMsg;
    msgDiv.classList.add("textoMsg");
    msg.innerHTML=""
    msg.appendChild(msgDiv);
    texto.reset();
    criaBotao();     
}

function criaBotao(){
    event.preventDefault();
    console.log(resultadoMsg + "Botao Criado");
    let copia = document.createElement("button");
    copia.textContent = "Copia";
    copia.classList.add("botaoCopia");
    msg.appendChild(copia);
    var botaoCopia = document.querySelector(".botaoCopia"); //Identifica o Botão Copia
    botaoCopia.addEventListener("click",copiaMsg);
    
}
