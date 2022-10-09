//Ejercicio 1
let color = "";
let coloAma = 0;
let coloRoS = 0;
let coloRoJ = 0;
let coloVer = 0;
let coloAzu = 0;
function ColorPla(e) {
    e.preventDefault();
    const numpla = document.getElementById("N_placa");
    const rta = document.getElementById("rsta")
    if (parseInt(numpla.value) == 1 || parseInt(numpla.value) == 2) {
        color = "Amarillo";
        coloAma++;
        rta.textContent = `El color es ${color} y hay ${coloAma}`
    } else if (parseInt(numpla.value) == 3 || parseInt(numpla.value) == 4) {
        color = "Rosa";
        coloRoS++;
        rta.textContent = `El color es ${color} y hay ${coloRoS}`
    } else if (parseInt(numpla.value) == 5 || parseInt(numpla.value) == 6) {
        color = "Rojo";
        coloRoJ++;
        rta.textContent = `El color es ${color} y hay ${coloRoJ}`
    } else if (parseInt(numpla.value) == 7 || parseInt(numpla.value) == 8) {
        color = "Verde";
        coloVer++;
        rta.textContent = `El color es ${color} y hay ${coloVer}`
    } else if (parseInt(numpla.value) == 9 || parseInt(numpla.value) == 0) {
        color = "Azul";
        coloAzu++;
        rta.textContent = `El color es ${color} y hay ${coloAzu}`
    }
}

function reincio(e) {
    e.preventDefault();
    const rta = document.getElementById("rsta")
    coloAma = 0;
    coloRoS = 0;
    coloRoJ = 0;
    coloVer = 0;
    coloAzu = 0;
    rta.textContent = "";
}

