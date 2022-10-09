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


//Ejercicio 2
let ta = 0;
let a1 = 0;
let a2 = 0;
let a3 = 0;
function CalcPEdad(e){
    e.preventDefault();
    const ed = document.getElementById("E_Animal");
    const rsp = document.getElementById("rst")
    if (parseInt(ed.value) <= 1){
        a1++;
        ta++;
        rsp.textContent = "Guardado con exito en Jovenes"
    }else if (parseInt(ed.value) > 1 && parseInt(ed.value) <= 3){
        a2++;
        ta++;
        rsp.textContent = "Guardado con exito en Adultos"
    } else if (parseInt(ed.value) > 3){
        a3++;
        ta++;
        rsp.textContent = "Guardado con exito en ancianos"
    }else{
        rsp.textContent = "porfavor ingrese una edad"
    }
}
let p1 = 0;
let p2 = 0;
let p3 = 0;
function Porcentages(e) {
    e.preventDefault();
    const rsp = document.getElementById("rst")
    p1 = (a1/ta)*100;
    p2 = (a2/ta)*100;
    p3 = (a3/ta)*100;
    rsp.textContent = `Los porcentajes de animales por edad son:
    ${p1.toFixed(2)}% para los jovenes,
    ${p2.toFixed(2)}% para los adultos,
    ${p3.toFixed(2)}% para los ancianos.`;
}

function reincio2(e) {
    e.preventDefault();
    const rta = document.getElementById("rst")
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    rsp.textContent = "";
}

//Ejercicio 3
let sa = 0;
function salario(e) {
    e.preventDefault();
    const rs = document.getElementById("rsp")
    const ht = document.getElementById("H_traba")
    if (parseInt(ht.value) <= 40) {
        sa = ht.value * 20;
        rs.textContent = `El salario de esta semana es ${sa}`;
    }else{
        sa = 800 + ( (ht.value - 40) * 25);
        rs.textContent = `El salario de esta semana es ${sa}`;
    }
}
function reincio3(e) {
    e.preventDefault();
    const rs = document.getElementById("rsp")
    let sa = 0;
    rsp.textContent = "";
}
