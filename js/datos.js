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
    const rspt1 = document.getElementById("rspt1")
    if (parseInt(numpla.value) == 1 || parseInt(numpla.value) == 2) {
        color = "Amarillo";
        coloAma++;
        rspt1.textContent = `El color es ${color} y hay ${coloAma}`
    } else if (parseInt(numpla.value) == 3 || parseInt(numpla.value) == 4) {
        color = "Rosa";
        coloRoS++;
        rspt1.textContent = `El color es ${color} y hay ${coloRoS}`
    } else if (parseInt(numpla.value) == 5 || parseInt(numpla.value) == 6) {
        color = "Rojo";
        coloRoJ++;
        rspt1.textContent = `El color es ${color} y hay ${coloRoJ}`
    } else if (parseInt(numpla.value) == 7 || parseInt(numpla.value) == 8) {
        color = "Verde";
        coloVer++;
        rspt1.textContent = `El color es ${color} y hay ${coloVer}`
    } else if (parseInt(numpla.value) == 9 || parseInt(numpla.value) == 0) {
        color = "Azul";
        coloAzu++;
        rspt1.textContent = `El color es ${color} y hay ${coloAzu}`
    }
}

function reincio(e) {
    e.preventDefault();
    const rspt1 = document.getElementById("rspt1")
    coloAma = 0;
    coloRoS = 0;
    coloRoJ = 0;
    coloVer = 0;
    coloAzu = 0;
    rspt1.textContent = "";
}


//Ejercicio 2
let ta = 0;
let a1 = 0;
let a2 = 0;
let a3 = 0;
function CalcPEdad(e){
    e.preventDefault();
    const ed = document.getElementById("E_Animal");
    const rspt2 = document.getElementById("rspt2")
    if (parseInt(ed.value) <= 1){
        a1++;
        ta++;
        rspt2.textContent = "Guardado con exito en Jovenes"
    }else if (parseInt(ed.value) > 1 && parseInt(ed.value) <= 3){
        a2++;
        ta++;
        rspt2.textContent = "Guardado con exito en Adultos"
    } else if (parseInt(ed.value) > 3){
        a3++;
        ta++;
        rspt2.textContent = "Guardado con exito en ancianos"
    }else{
        rsp.textContent = "porfavor ingrese una edad"
    }
}
let p1 = 0;
let p2 = 0;
let p3 = 0;
function Porcentages(e) {
    e.preventDefault();
    const rspt2 = document.getElementById("rspt2")
    p1 = (a1/ta)*100;
    p2 = (a2/ta)*100;
    p3 = (a3/ta)*100;
    rspt2.textContent = `Los porcentajes de animales por edad son:
    ${p1.toFixed(2)}% para los jovenes,
    ${p2.toFixed(2)}% para los adultos,
    ${p3.toFixed(2)}% para los ancianos.`;
}

function reincio2(e) {
    e.preventDefault();
    const rspt2 = document.getElementById("rspt2")
    p1 = 0;
    p2 = 0;
    p3 = 0;
    rspt2.textContent = "";
}

//Ejercicio 3
let sa = 0;
function salario(e) {
    e.preventDefault();
    const rspt3 = document.getElementById("rspt3")
    const ht = document.getElementById("H_traba")
    if (parseInt(ht.value) <= 40) {
        sa = ht.value * 20;
        rspt3.textContent = `El salario de esta semana es ${sa}`;
    }else{
        sa = 800 + ( (ht.value - 40) * 25);
        rspt3.textContent = `El salario de esta semana es ${sa}`;
    }
}
function reincio3(e) {
    e.preventDefault();
    const rspt3 = document.getElementById("rspt3")
    sa = 0;
    rspt3.textContent = "";
}


//Ejercicio 4
let edm = 0;
let edf = 0;
let edt = 0;
let nh = 0;
let nm = 0;
let nt = 0;
let eph = 0;
let epm = 0;
let epg = 0;
function Guard_edades(e) {
    e.preventDefault();
    const rspt4 = document.getElementById("rspt4")
    const gender = document.getElementById("Gender")
    const edad = document.getElementById("Edad")
    if ( gender.value == "Male" ){
        edm = parseInt(edad.value);
        edt = parseInt(edad.value);
        nh++;
        nt++;
        rspt4.textContent = "Guardado con exito M"
    }else if ( gender.value == "Female"){
        edf = parseInt(edad.value);
        edt = parseInt(edad.value);
        nm++;
        nt++;
        rspt4.textContent = "Guardado con exito F"
    }else {
        rspt4.textContent = "Por favor Elija el genero"
    }
}

function Promedio(e) {
    e.preventDefault();
    const rspt4 = document.getElementById("rspt4")
    eph = edm / nh ;
    epm = edf / nm ;
    epg = edt / nt ;
    rspt4.textContent = `Las Edades Promedio son: 
    ${eph} Para los hombres 
    ${epm} Para Las mujeres
    ${epg} Para el grupo`
}

function reincio4(e) {
    e.preventDefault();
    const rspt4 = document.getElementById("rspt4")
    edm = 0;
    edf = 0;
    edp = 0;
    eph = 0;
    epm = 0;
    rspt4.textContent = ""
} 
