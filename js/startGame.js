const selectedColorsLocal = localStorage.getItem('selectedColor');
const selectedColors = selectedColorsLocal.split(",");
const status0 = document.getElementById("status0");
const status1 = document.getElementById("status1");
const status2 = document.getElementById("status2");
const status3 = document.getElementById("status3");

const colorSelect1 = document.getElementById('colorSelect1')
const palette1 = document.getElementById('palette1')
const colorSelect2 = document.getElementById('colorSelect2')
const palette2 = document.getElementById('palette2')
const colorSelect3 = document.getElementById('colorSelect3')
const palette3 = document.getElementById('palette3')
const colorSelect4 = document.getElementById('colorSelect4')
const palette4 = document.getElementById('palette4')
let selectedColor = [];

// PALETA DE COLORES
colorSelect1.addEventListener('input', () => {
    palette1.style.backgroundColor = colorSelect1.value;
    if (selectedColor[0] === undefined || selectedColor[0] === selectedColor[0]) {
        selectedColor.splice(0, 1, colorSelect1.value);
        comprobarEstado(0, colorSelect1.value)
    } else {
        selectedColor.splice(0, 1, colorSelect1.value);
        comprobarEstado(0, colorSelect1.value)
    }
})
colorSelect2.addEventListener('input', () => {
    palette2.style.backgroundColor = colorSelect2.value;
    if (selectedColor[1] === undefined || selectedColor[1] === selectedColor[0]) {
        selectedColor.splice(1, 1, colorSelect2.value);
        comprobarEstado(1, colorSelect2.value)
    } else {
        selectedColor.splice(1, 1, colorSelect2.value);
        comprobarEstado(1, colorSelect2.value)
    }
})
colorSelect3.addEventListener('input', () => {
    palette3.style.backgroundColor = colorSelect3.value;
    if (selectedColor[2] === undefined || selectedColor[2] === selectedColor[0]) {
        selectedColor.splice(2, 1, colorSelect3.value);
        comprobarEstado(2, colorSelect3.value)
    } else {
        selectedColor.splice(2, 1, colorSelect3.value);
        comprobarEstado(2, colorSelect3.value)
    }
})
colorSelect4.addEventListener('input', () => {
    palette4.style.backgroundColor = colorSelect4.value;
    if (selectedColor[3] === undefined || selectedColor[3] === selectedColor[0]) {
        selectedColor.splice(3, 1, colorSelect4.value);
        comprobarEstado(3, colorSelect3.value)
    } else {
        selectedColor.splice(3, 1, colorSelect4.value);
        comprobarEstado(3, colorSelect3.value)
    }
})
                                                      
function comprobarEstado(idColorSelect, colorAComprobar){ // con el idColorSelect hacemos referencia al id del input? y con coloraComprobar al que selecciona el jugador
console.log(idColorSelect); 
console.log(colorAComprobar);

if(selectedColors[idColorSelect] === colorAComprobar){
    // el estado de idColorSelect lo ponemos en verde
    switch(idColorSelect){
        case 0:
            status0.style.backgroundColor = "green"
        break; 
        case 1:
            status1.style.backgroundColor = "green"
        break; 
        case 2:
            status2.style.backgroundColor = "green"
        break; 
        case 3:
            status3.style.backgroundColor = "green"
        break;    
    }
} else {
    // el estado de idColorSelect lo ponemos en rojo
    switch(idColorSelect){
        case 0:
            status0.style.backgroundColor = "red"
        break; 
        case 1:
            status1.style.backgroundColor = "red"
        break; 
        case 2:
            status2.style.backgroundColor = "red"
        break; 
        case 3:
            status3.style.backgroundColor = "red"
        break;    
    }
}
};

//recordar poner el mensaje al final de los intentos, felicidades haz ganado
//revisar y poner los valores correspondiente
const winningMessage = document.getElementById('congrat');
winningMessage.innerHTML//debo traerme los datos del localStore key, valor?
localStorage.setItem('usuario', username.value);//modelo del boton reset
    window.location.href = "./selectcolor.html";//modelo del boton reset


