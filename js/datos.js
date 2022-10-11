//Ejercicio 1
//Variables
let color = "";
let coloAma = 0;
let coloRoS = 0;
let coloRoJ = 0;
let coloVer = 0;
let coloAzu = 0;

//Determinar el color de la placa con el ultimo numero
function ColorPla(e) {
    e.preventDefault();
    const numpla = document.getElementById("N_placa");
    const rspt1 = document.getElementById("rspt1");
    if (parseInt(numpla.value) == 1 || parseInt(numpla.value) == 2) {
        color = "Amarillo";
        coloAma++;
        rspt1.textContent = `El color es ${color} y hay ${coloAma}`;
    } else if (parseInt(numpla.value) == 3 || parseInt(numpla.value) == 4) {
        color = "Rosa";
        coloRoS++;
        rspt1.textContent = `El color es ${color} y hay ${coloRoS}`;
    } else if (parseInt(numpla.value) == 5 || parseInt(numpla.value) == 6) {
        color = "Rojo";
        coloRoJ++;
        rspt1.textContent = `El color es ${color} y hay ${coloRoJ}`;
    } else if (parseInt(numpla.value) == 7 || parseInt(numpla.value) == 8) {
        color = "Verde";
        coloVer++;
        rspt1.textContent = `El color es ${color} y hay ${coloVer}`;
    } else if (parseInt(numpla.value) == 9 || parseInt(numpla.value) == 0) {
        color = "Azul";
        coloAzu++;
        rspt1.textContent = `El color es ${color} y hay ${coloAzu}`;
    }
}

// Limpiar funcion
function reincio(e) {
    e.preventDefault();
    const rspt1 = document.getElementById("rspt1");
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

// Separa a los animales por edad
function CalcPEdad(e){
    e.preventDefault();
    const ed = document.getElementById("E_Animal");
    const rspt2 = document.getElementById("rspt2");
    if (parseInt(ed.value) <= 1){
        a1++;
        ta++;
        rspt2.textContent = "Guardado con exito en Jovenes";
    }else if (parseInt(ed.value) > 1 && parseInt(ed.value) <= 3){
        a2++;
        ta++;
        rspt2.textContent = "Guardado con exito en Adultos";
    } else if (parseInt(ed.value) > 3){
        a3++;
        ta++;
        rspt2.textContent = "Guardado con exito en ancianos";
    }else{
        rsp.textContent = "porfavor ingrese una edad";
    }
}

//Variables para calcular
let p1 = 0;
let p2 = 0;
let p3 = 0;
//Calcular porcentajes de cada grupo
function Porcentajes(e) {
    e.preventDefault();
    const rspt2 = document.getElementById("rspt2");
    p1 = (a1/ta)*100;
    p2 = (a2/ta)*100;
    p3 = (a3/ta)*100;
    rspt2.textContent = `Los porcentajes de animales por edad son:
    ${p1.toFixed(2)}% para los jovenes,
    ${p2.toFixed(2)}% para los adultos,
    ${p3.toFixed(2)}% para los ancianos.`;
}

//limpiar lista 2

function reincio2(e) {
    e.preventDefault();
    const rspt2 = document.getElementById("rspt2");
    p1 = 0;
    p2 = 0;
    p3 = 0;
    rspt2.textContent = "";
}

//Ejercicio 3
//Variables
let sa = 0;
//Funcion calcular Salario
function salario(e) {
    e.preventDefault();
    const rspt3 = document.getElementById("rspt3");
    const ht = document.getElementById("H_traba");
    if (parseInt(ht.value) <= 40) {
        sa = ht.value * 20;
        rspt3.textContent = `El salario de esta semana es ${sa}`;
    }else{
        sa = 800 + ( (ht.value - 40) * 25);
        rspt3.textContent = `El salario de esta semana es ${sa}`;
    }
}

//Limpiar Lista 3
function reincio3(e) {
    e.preventDefault();
    const rspt3 = document.getElementById("rspt3");
    sa = 0;
    rspt3.textContent = "";
}


//Ejercicio 4
//Determinar Variables
let edm = 0;
let edf = 0;
let edt = 0;
let nh = 0;
let nm = 0;
let nt = 0;
let eph = 0;
let epm = 0;
let epg = 0;

// Funcion para guardar Edades
function Guard_edades(e) {
    e.preventDefault();
    const rspt4 = document.getElementById("rspt4");
    const gender = document.getElementById("Gender");
    const edad = document.getElementById("Edad");
    if ( gender.value == "Male" ){
        edm = parseInt(edad.value);
        edt = parseInt(edad.value);
        nh++;
        nt++;
        rspt4.textContent = "Guardado con exito M";
    }else if ( gender.value == "Female"){
        edf = parseInt(edad.value);
        edt = parseInt(edad.value);
        nm++;
        nt++;
        rspt4.textContent = "Guardado con exito F";
    }
    else {
        rspt4.textContent = "Por favor Elija el genero";
    }
}

// Funcion promadio de edades
function Promedio(e) {
    e.preventDefault();
    const rspt4 = document.getElementById("rspt4");
    eph = edm / nh ;
    epm = edf / nm ;
    epg = edt / nt ;
    rspt4.textContent = `Las Edades Promedio son: 
    ${eph} Para los hombres 
    ${epm} Para Las mujeres
    ${epg} Para el grupo`;
}

// Funcion Limpiar 4
function reincio4(e) {
    e.preventDefault();
    const rspt4 = document.getElementById("rspt4");
    edm = 0;
    edf = 0;
    edp = 0;
    eph = 0;
    epm = 0;
    rspt4.textContent = "";
} 

//Ejercicio 5
let num = [];
let n = 0;
//funcion Guardae numeros
function guardar(e) {
    e.preventDefault();
    const rspt5 = document.getElementById("rspt5");
    const nu = document.getElementById("Numero");
    num.push(parseInt(nu.value));
    rspt5.textContent = `Guardado con exito [${num}]`;
}

//Numero menor de los campos
function num_min(e) {
    e.preventDefault();
    const rspt5 = document.getElementById("rspt5");
    for (var i = 0; i < num.length ; i++) {
        if (num[i] < n) {
            n = num[i];
        }
    }
    rspt5.textContent = `El numero menor es:${n}`;
    
}
//Limpiar lista 5
function reincio5(e) {
    e.preventDefault();
    const rspt5 = document.getElementById("rspt5");
    num = [];
    n = 0;
    rspt5.textContent = "";
}

//Ejercicio 6
let pt = [];
let po = 0;
let pp = 0;
let sum = 0;
//funcon gurdar peso original
function g_po(e) {
    e.preventDefault();
    const rspt6 = document.getElementById("rspt6");
    const gpo = document.getElementById("OrgPes");
    po = parseInt(gpo.value);
    rspt6.textContent = `Guardado peso original`;
}

//funcion guardar pesos diferentes
function  gpp(e) {
    e.preventDefault();
    const rspt6 = document.getElementById("rspt6");
    const gpp = document.getElementById("Peso_V");
    pt.push(parseInt(gpp.value));
    pp++;
    rspt6.textContent = `Guardado con Exito ${pt}`;
}

//Comparar peso original y diferetes
let ppt=0;
function compp(e) {
    e.preventDefault();
    const rspt6 = document.getElementById("rspt6");
    for (let i = 0; i < pt.length; i++) {
        sum += pt[i];
    }
    ppt = sum /pp;
    if (ppt > po) {
        rspt6.textContent = `Subio de Peso ${ppt-po}`;
    }else if (ppt < po) {
        rspt6.textContent = `Bajo de Peso ${ppt-po}`;
    }else{
        rspt6.textContent = `No subio ni bajo`;
    }
}

//limpiar lista 6
function reinicio6(e) {
    e.preventDefault();
    const rspt6 = document.getElementById("rspt6");
    ppt = 0;
    pt = [];
    po = 0;
    pp = 0;
    sum = 0;
    rspt6.textContent = "";
}

//Ejercicio 7
let precios_s = [];
let itm = 0;
let preitm = 0;

//funcion guardar precios
function guardar_precio(e){
    e.preventDefault();
    const rspt7 = document.getElementById("rspt7");
    const pres_prod = document.getElementById("PresPro");
    const num_i = document.getElementById("Num_i");
    preitm = parseInt(pres_prod.value);
    itm = parseInt(num_i.value);
    precios_s.push((preitm*itm));
    rspt7.textContent = `Guardado ${preitm*itm}`;
}

//Funcion Sumar todo
let suma_c = 0;
let ptp = 0;
function suma_cost(e) {
    e.preventDefault();
    const rspt7 = document.getElementById("rspt7");
    for (let i = 0; i < precios_s.length; i++) {
        suma_c += precios_s[i];
    }
    ptp = suma_c;
    rspt7.textContent = `Total a pagar =${ptp}`;
}

//limpiar lista 7
function reinicio7(e) {
    e.preventDefault();
    const rspt7 = document.getElementById("rspt7");
    precios_s = [];
    itm = 0;
    preitm = 0;
    suma_c= 0;
    rspt7.textContent = "";
}


//ejercicio 8
let Ed_ = [];
let N_P = "";

//funcion ejercicio 8
function CalcuPers(e) {
    e.preventDefault();
    const rspt8 = document.getElementById("rspt8");
    const Ed = document.getElementById("Ed");
    if (parseInt(Ed.value) < 5 ) {
        rspt8.textContent = "No puede entrar al teatro";
    }else{
        Ed_.push(Ed.value);
        rspt8.textContent = "Guardado";
    }
}

//Funcion Calcukar Perdida
function CalPer(e) {
    e.preventDefault();
    const rspt8 = document.getElementById("rspt8");
    const Ed = document.getElementById("Ed");
    for (let i = 0; i < Ed_.length; i++) {
        if (parseInt(Ed.value) >= 5 && parseInt(Ed.value) <= 14) {
            N_P = "Perdidad del 35%";
        }else if (parseInt(Ed.value) >= 15 && parseInt(Ed.value) <= 19 ){
            N_P = "Perdidad del 25%";
        }else if (parseInt(Ed.value) >= 20 && parseInt(Ed.value) <= 45 ){
            N_P = "Perdidad del 10%";
        }else if (parseInt(Ed.value) >= 46 && parseInt(Ed.value) <= 65 ){
            N_P = "Perdidad del 25%";
        }else if (parseInt(Ed.value) >= 66) {
            N_P = "Perdidad del 35%";
        }
    }
    rspt8.textContent = `Perdida de ${N_P}`;
}

//limpiar lista 8
function reinicio8(e) {
    e.preventDefault();
    const rspt8 = document.getElementById("rspt8");
    Ed_ = [];
    N_P = "";
    rspt8.textContent = "";
}
