import {Ex_reg_bin, Ex_reg_dec, Ex_reg_hex, calcularBin, calcularDec, calcularHex} from "./calc_num.js";


var EDec = document.getElementById("Edec")
var EBin = document.getElementById("Ebi")
var EHex = document.getElementById("Ehex")

var RDec = document.getElementById("Rdec")
var RBin = document.getElementById("Rbi")
var RHex = document.getElementById("Rhex")



var valorAnteriorDec = EDec.value
var valorAnteriorBin = EBin.value
var valorAnteriorHex = EHex.value



EDec.addEventListener("input",function(){
    if (/^[-+/*.\d]+$/i.test(EDec.value)){
        valorAnteriorDec = EDec.value


        if(Ex_reg_dec.test(EDec.value)){
            RDec.value = calcularDec(EDec.value)
        }else{
            RDec.value = ""
        }
    }else if(EDec.value === ""){
        EDec.calue = ""
    }
    else{
        EDec.value = valorAnteriorDec
    }

})


EBin.addEventListener("input",function(){
    if (/^[-+/*.01]+$/i.test(EBin.value)){
        valorAnteriorBin = EBin.value
        if(Ex_reg_bin.test(EBin.value)){
            RBin.value = calcularBin(EBin.value)
        }else{
            RBin.value = ""
        }
    }else if(EBin.value === ""){
        EBin.calue = ""
    }
    else{
        EBin.value = valorAnteriorBin
    }
})


EHex.addEventListener("input",function(){
    if (/^[-+/*.\da-fA-F]+$/i.test(EHex.value)){
        EHex.value = (EHex.value).toUpperCase()
        valorAnteriorHex = EHex.value
        if(Ex_reg_hex.test(EHex.value)){
            RHex.value = calcularHex(EHex.value).toUpperCase()
        }else{
            RHex.value = ""
        }
    }else if(EHex.value === ""){
        EHex.calue = ""
    }

    else{
        EHex.value = valorAnteriorHex
    }
})