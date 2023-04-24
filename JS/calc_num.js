const signos_aritmeticos = "+-*/"

export const Ex_reg_dec = /^\d+(?:\.\d+)?([+\-*\/])\d+(?:\.\d+)?$/;
export const Ex_reg_bin = /^([01]+)+(\.([01]+)+)?([+\-*/])([01]+)+(\.([01]+)+)?$/;
export const Ex_reg_hex = /^[0-9a-fA-F]+(\.[0-9a-fA-F]+)?([+\-*/])[0-9a-fA-F]+(\.[0-9a-fA-F]+)?$/;

function find_sign (operacion){
    for(let signo of signos_aritmeticos){
        let indice_signo = operacion.indexOf(signo)
        if(indice_signo !== -1){
            return indice_signo
        }
    }
}
function lista_operacion(operacion){
    let indice_signo = find_sign(operacion)
    return [operacion.substring(0,indice_signo), operacion[indice_signo], operacion.substring(indice_signo+1)]
}



function binaryToDecimal(binary){
    if (binary.indexOf(".") !== -1){
        const [intPart, decPart] = binary.toString().split('.');
        const intDecimal = parseInt(intPart, 2);
        
        let decDecimal = 0;
        for (let i = 0; i < decPart.length; i++) {
            decDecimal += parseInt(decPart[i], 2) * Math.pow(2, -(i + 1));
        }
        
        const decimal = intDecimal + decDecimal;
        return decimal;        
    }else{
        return parseInt(binary, 2)
    }
}
function hexToDecimal(hexadecimal){
    if (hexadecimal.indexOf(".") !== -1){
        const [intPart, decPart] = hexadecimal.toString().split('.');
        const intDecimal = parseInt(intPart, 16);
        
        let decDecimal = 0;
        for (let i = 0; i < decPart.length; i++) {
            decDecimal += parseInt(decPart[i], 16) * Math.pow(16, -(i + 1));
        }
        
        const decimal = intDecimal + decDecimal;
        return decimal;        
    }else{
        return parseInt(hexadecimal, 16)
    }
}

function decimalToBinary(decimal, precision = 8){
    if (decimal.toString().indexOf(".") !== -1){
        const intPart = Math.floor(decimal);
        const decPart = decimal - intPart;
      
        let binaryInt = intPart.toString(2);

        let binaryDec = '';
        let current = decPart;
        while (current !== 0 && binaryDec.length < precision){
            current *= 2;
            if (current >= 1){
                    binaryDec += '1';
                    current -= 1;
            }else{
                binaryDec += '0';
            }
        }
        return binaryInt + '.' + binaryDec;    
    }else{
        return Number(decimal).toString(2)
    }
}
function decimalToHexa(decimal, precision = 8){
    if (decimal.toString().indexOf(".") !== -1){
        const intPart = Math.floor(decimal);
        const decPart = decimal - intPart;
      
        let hexaInt = intPart.toString(16);

        let hexaDec = '';
        let current = decPart;
        while (current !== 0 && hexaDec.length < precision){
            current *= 16;
            let hexaDigit = Math.floor(current);
            hexaDec += hexaDigit.toString(16);
            current -= hexaDigit;
        }
        return hexaInt + '.' + hexaDec;    
    }else{
        return decimal.toString(16);
    }
}




export function calcularDec(operacion){
    return Number(eval(operacion).toFixed(3)) ;
}
export function calcularBin(operacion){
    let listaOperacion = lista_operacion(operacion)
    let opetacion = listaOperacion[1]
    let n1 = binaryToDecimal(listaOperacion[0])
    let n2 = binaryToDecimal(listaOperacion[2])
    return decimalToBinary(calcularDec(`${n1}${opetacion}${n2}`))
}
export function calcularHex(operacion){
    let listaOperacion = lista_operacion(operacion)
    let opetacion = listaOperacion[1]
    let n1 = hexToDecimal(listaOperacion[0])
    let n2 = hexToDecimal(listaOperacion[2])
    return decimalToHexa(calcularDec(`${n1}${opetacion}${n2}`))
}










