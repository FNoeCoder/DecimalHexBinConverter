var inputDec = document.getElementById("dec")
var inputBin = document.getElementById("bin")
var inputHex = document.getElementById("hex")
var textBin = document.getElementById("binario")

var valorAnteriorDec = inputDec.value
var valorAnteriorBin = inputBin.value
var valorAnteriorHex = inputHex.value




inputDec.addEventListener("input",function(){
    if (/^[0-9]+$/.test(inputDec.value)){
        let numero = parseInt(inputDec.value,10)
        inputBin.value = (numero).toString(2)
        inputHex.value = (numero).toString(16).toUpperCase()

        textBin.innerHTML=CuartetosBinario(inputBin.value)

        valorAnteriorDec = inputDec.value
        valorAnteriorBin = inputBin.value
        valorAnteriorHex = inputHex.value
    }
    else if (inputDec.value == ""){
        inputBin.value = ""
        inputHex.value = ""

        textBin.innerHTML=""
    }
    else{
        inputDec.value = valorAnteriorDec
    }

})


inputBin.addEventListener("input",function(){
    if (/^[0-1]+$/.test(inputBin.value)){
        inputDec.value = parseInt(inputBin.value,2) 
        inputHex.value = parseInt(inputDec.value,10).toString(16).toUpperCase()

        textBin.innerHTML=CuartetosBinario(inputBin.value)

        valorAnteriorDec = inputDec.value
        valorAnteriorBin = inputBin.value
        valorAnteriorHex = inputHex.value
    }

    else if (inputBin.value == ""){
        inputDec.value = ""
        inputHex.value = ""
        textBin.innerHTML=""
    }
    else{
        inputBin.value = valorAnteriorBin
    }
})


inputHex.addEventListener("input",function(){
    if (/^[0-9A-F]+$/i.test(inputHex.value)){
        inputHex.value = (inputHex.value).toUpperCase()
        inputDec.value = parseInt(inputHex.value,16)
        inputBin.value = parseInt(inputDec.value,10).toString(2)

        textBin.innerHTML=CuartetosBinario(inputBin.value)

        valorAnteriorDec = inputDec.value
        valorAnteriorBin = inputBin.value
        valorAnteriorHex = inputHex.value
    }
    else if (inputHex.value == ""){
        inputDec.value = ""
        inputBin.value = ""

        textBin.innerHTML=""
    }
    else{
        inputHex.value = valorAnteriorHex
    }
})

function CuartetosBinario(BinarioString){
    let NCeros = 4-(BinarioString.length % 4)
    let ceros="";
    if (NCeros>0 && NCeros != 4){
        for (let i=0; i<NCeros;i++){
            ceros+= "0"
        }
    }

    let BinarioCompleto = ceros+BinarioString;
    let partesBinario = [];

    for (let i = 0; i < BinarioCompleto.length; i += 4) {
        partesBinario+= BinarioCompleto.substr(i, 4)+" ";
    }
    return partesBinario
    
}
function juntarBinario(BinarioString){
    return BinarioString.replace(/ /g,"");
}


