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

//Ejercicio 9
let com = 0;

//funcion ejercicio 9
function Calcu_Com(e) {
    e.preventDefault();
    const rspt9 = document.getElementById("rspt9");
    const vv = document.getElementById("VV");
    if (parseInt(vv.value) <= 20 ) {
        com = ((parseInt(vv.value)*10)/100);
    }else if (parseInt(vv.value) > 20 && parseInt(vv.value) < 40){
        com = ((parseInt(vv.value)*15)/100);
    }else if (parseInt(vv.value) >= 40 && parseInt(vv.value) < 80 ){
        com = ((parseInt(vv.value)*20)/100);
    }else if (parseInt(vv.value) >= 80 && parseInt(vv.value) < 160){
        com = ((parseInt(vv.value)*25)/100);
    }else{
        com = ((parseInt(vv.value)*30)/100);
    }
    rspt9.textContent = `La comision es de:${com} millon`;
}

//Limpiar Lista 9
function reinicio9(e) {
    e.preventDefault();
    const rspt9 = document.getElementById("rspt9");
    com = 0;
    rspt9.textContent="";
}

//Ejercicio 10

let vc1 = 0;
let vc2 = 0;
let vc3 = 0;

function guardaV(e) {
    e.preventDefault();
    const rspt10 = document.getElementById("rspt10");
    const votos = document.getElementById("Voto");
    const candidat = document.getElementById("Candidat");
    if ( candidat.value == "1" ) {
        vc1 += parseInt(votos.value);
        rspt10.textContent= "Guardado para candidato 1";
    }else if (candidat.value == "2") {
        vc2 += parseInt(votos.value);
        rspt10.textContent= "Guardado para candidato 2";
    }else if (candidat.value == "3") {
        vc3 += parseInt(votos.value);
        rspt10.textContent= "Guardado para candidato 3";
    }
}


function CompVot(e) {
    e.preventDefault();
    const rspt10 = document.getElementById("rspt10");
    if (vc1 > vc2 && vc1>vc3) {
        rspt10.textContent= "El candidato 1 gano";
    }else if( vc2 > vc1 && vc2 > vc3) {
        rspt10.textContent= "El candidato 2 gano";
    }else if (vc3 > vc1 && vc3 > vc2) {
        rspt10.textContent= "El candidato 3 gano";
    }else{
        rspt10.textContent= "empate";
    }
}

function Reinicio10(e) {
    e.preventDefault();
    const rspt10 = document.getElementById("rspt10");
    vc1 = 0;
    vc2 = 0;
    vc3 = 0;
    rspt10.textContent="";
}
//Ejercicio 11

let sumato = 0;
let productoria = 1;
let prom = 0;
let prim = [];
let con = 0;



function Resultados_op(e){
    e.preventDefault();
    const rspt11 = document.getElementById("rspt11");
    const numi = document.getElementById("NumI");
    const Numf = document.getElementById("NumF");
    for (let i= parseInt(numi.value); i < parseInt(Numf.value); i++){
        isPrime(i);
        if (isPrime(i) == true) {
            prim.push(i);
            con++;
        }
    }
    for (let i = 0; i < prim.length; i++) {
        sumato += prim[i];
        productoria *= prim[i];
    }
    prom = (prim.length*con);
    rspt11.textContent= `La sumatoria es: ${sumato} , La productoria es: ${productoria} y el promedio es: ${prom}`;
}

function isPrime(n) {
    if (n === 0) return false;
    var limit = Math.round(Math.sqrt(n));
    for (var i = 2; i <= limit; i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function reinicio11(e) {
    e.preventDefault();
    const rspt11 = document.getElementById("rspt11");
    sumato = 0;
    productoria = 1;
    prom = 0;
    prim = [];
    con = 0;
    rspt11.textContent= "";
}

//Ejercicio 12

let smn = 0;
let prn = 1;
let pron = 0;

//funcion Numeros
function PropNum(e) {
    e.preventDefault();
    const rspt12 = document.getElementById("rspt12");
    const nuP = document.getElementById("NumPE");
    for (let i = 0 ; i < (nuP.value).length; i++) {
        smn += parseInt(nuP.value[i]);
        prn *= parseInt(nuP.value[i]);
    }
    pron = smn / (nuP.value).length;
    rspt12.textContent = `La longitud de ${parseInt(nuP.value)} es:${(nuP.value).length}, su sumatoria es:${smn}, productoria de:${prn} y su promedio es:${pron}`;
}


function reinicio12(e) {
    e.preventDefault();
    const rspt12 = document.getElementById("rspt12");
    smn = 0;
    prn = 1;
    pron = 0;
    rspt12.textContent = "";
}


//Ejercicio 13

let secf = [];
secf[0] = 0;
secf[1] = 1;
let parf = 0;
let imparf = 0;
let c = 0;
function tipoNF(e) {
    e.preventDefault();
    const rspt13 = document.getElementById("rspt13");
    const Lsf = document.getElementById("Lsf");
    for (let i = 2; i < Lsf.value; i++) {
        secf[i] = secf[i - 2] + secf[i - 1];
    }
    for (let i = 0; i < secf.length; i++) {
        if(secf[i] == 0){
            c++
        }else if (secf[i] % 2 == 0) {
            parf++;
        }else{
            imparf++;
        }
    }
    rspt13.textContent = `La secuencia de longitud ${secf.length} tiene ${parf} pares, ${imparf} impares y ${c} ceros`;
}

function reinicio13(e) {
    e.preventDefault();
    const rspt13 = document.getElementById("rspt13");
    secf = [];
    secf[0] = 0;
    secf[1] = 1;
    parf = 0;
    imparf = 0;
    c = 0;
    rspt13.textContent = "";
}

//ejercicio 14

let nu1 = 0;
let nu2 = 0;
let tem = 0;
function mcd(e) {
    e.preventDefault();
    const rspt14 = document.getElementById("rspt14");
    const Pnum = document.getElementById("Pnum");
    const Snum = document.getElementById("Snum");
    nu1 = Math.abs(Pnum.value);
    nu2 = Math.abs(Snum.value);
    while (nu2 != 0) {
        tem = nu2;
        nu2 = nu1 % nu2 ;
        nu1 = tem;
    }
    rspt14.textContent = `El Maximo comun divisor de ${Pnum.value} y ${Snum.value} es: ${tem}`;
}

function reinicio14(e) {
    e.preventDefault();
    const rspt14 = document.getElementById("rspt14");
    nu1 = 0;
    nu2 = 0;
    tem = 0;
    rspt14.textContent = "";
}

//ejercicio 15

let pp1 = 25 ;
let c1 = 25 * 0.02;
let pp2 = 19.9;
let c2 = 19.9 * 0.03;
let fec = 1994;
function crecimiento(e) {
    e.preventDefault();
    const rspt15 = document.getElementById("rspt15");
    while(pp1 > pp2) {
        pp1 = pp1 + c1;
        pp2 = pp2 + c2;
        fec = fec +1;
    }
        rspt15.textContent = `al Pais B superara el pais A en poblacion en ${fec}`;
}

function reinicio15(e) {
    e.preventDefault();
    const rspt15 = document.getElementById("rspt15");
    pp1 = 25 ;
    pp2 = 19.9;
    fec = 1994;
    rspt15.textContent = "";
}