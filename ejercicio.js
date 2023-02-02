const radioButtons = document.getElementsByName("opcion");
const empezar = document.getElementById("empezar")

var xd = document.getElementById("ejercicio").innerHTML
console.log(xd);

empezar.addEventListener("click", ()=>{
    for (let i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) {
            var valor_radio = radioButtons[i].value;
            // hacer algo con el valor seleccionado
            break;
        }
    }
    console.log(valor_radio);
})
