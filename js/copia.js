// Copia a mensagem criptografada do clipboard
function copiaMsg(){
   
    console.log(resultadoMsg + "Clipeboard")
    navigator.clipboard.writeText(resultadoMsg);
    alert("Mensagem Copiada! " + resultadoMsg)
}