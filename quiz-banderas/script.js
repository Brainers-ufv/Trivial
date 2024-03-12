//cargo en un array las imganes de las banderas. Este sera el orden que se mostrarán
let banderas = ["esp.png", "tai.png", "gre.png", "col.png", "hun.png", "mal.png", "gua.png", "lib.png", "bra.png", "nor.png", "irl.png" , "alb.png" , "sua.png", "pa.svg", "bo.svg", "ad.svg", "gb.svg", "na.svg", "mong.jpg", "chip.jpg", "fiji.jpg", "butan.jpg","guinea.jpg", "serb.jpg", "Uzb.jpg", "let.jpg","aus.jpg", "sri.jpg", "ug.jpg", "mali.jpg"];

//array que guardara la opcion correcta
let correcta = [2, 2, 0, 2, 0, 1, 0, 1, 2, 2, 0, 1,1, 2,2,1,1,0,1,0,2,0, 2, 1, 0, 0, 1, 1,0, 2];

//array que guardara los paises a mostrar en cada jugada
let opciones = [];
//cargo en el arreglo opciones las opciones a mostrar en cada jugada
opciones.push(["SUIZA", "BÉLGICA", "ESPAÑA"]);
opciones.push(["ISLAS FILIPINAS", "VIETNAM", "TAIWAN"]);
opciones.push(["GRECIA", "TURQUÍA", "COREA DEL NORTE"]);
opciones.push(["MÉXICO", "INDIA", "COLOMBIA"]);
opciones.push(["HUNGRÍA", "BULGARIA", "LITUANIA"]);
opciones.push(["PORTUGAL", "MALTA", "MARRUECOS"]);
opciones.push(["GUATEMALA", "HAITÍ", "EL SALVADOR"]);
opciones.push(["MOLDAVIA", "LÍBANO", "KENIA"]);
opciones.push(["CHILE", "ARGENTINA", "BRASIL"]);
opciones.push(["SUECIA", "DINAMARCA", "NORUEGA"]);
opciones.push(["IRLANDA DEL NORTE", "CROACIA", "ESCOCIA"]);
opciones.push(["MONTENEGRO", "ALBANIA", "BOSNIA Y HERZEGOVINA"]);
opciones.push(["SOMALIA", "SUAZILANDIA", "SIRIA"]);

opciones.push(["SUDAFRICA", "SINGAPUR", "PANAMA"]);
opciones.push(["PERU", "ITALIA", "BOLIVIA"]);
opciones.push(["TUNEZ", "ANDORRA", "ANTIGUA Y BARBUDA"]);
opciones.push(["UCRANIA", "REINO UNIDO", "MADAGASCAR"]);
opciones.push(["NAMIBIA", "OMAN", "ETIOPIA"]);
opciones.push(["RP DE CHINA", "MONGOLIA", "MALASIA"]);
opciones.push(["CHIPRE", "ARMENIA", "NICOSIA"]);
opciones.push(["BELICE", "ISLAS MARSHALL", "ISLAS FIYI"]);
opciones.push(["BUTÁN", "BRUNEI", "HONG KONG"]);
opciones.push(["HAWAII", "ARIZONA", "GUINEA"]);
opciones.push(["MACEDONIA", "SERBIA", "BELGRADO"]);
opciones.push(["UZBEKISTAN", "KAZAJISTAN", "KIRGUISTÁN"]);
opciones.push(["LETONIA", "RUSIA", "BIELORRUSIA"]);
opciones.push(["BÉLGICA", "AUSTRIA", "ALEMANIA"]);
opciones.push(["GALES", "SRI LANKA", "ETIOPÍA"]);
opciones.push(["UGANDA", "PALAOS", "KIRIBATI"]);
opciones.push(["DUBAI", "CAMERÚN", "MALI"]);

//variable que guarda la posicion actual
let posActual = 0;
//variable que guarda la cantidad acertadas hasta el moemento
let cantidadAcertadas = 0;

function comenzarJuego(){
    //reseteamos las variables
    posActual = 0;
    cantidadAcertadas = 0;
    //activamos las pantallas necesarias
    document.getElementById("pantalla-inicial").style.display = "none";
    document.getElementById("pantalla-juego").style.display = "block";
    cargarBandera();

}

//funcion que carga la siguiente bandera y sus opciones
function cargarBandera(){
    //controlo sis se acabaron las banderas
    if(banderas.length <= posActual){
        terminarJuego();
    }
    else{//cargo las opciones
        //limpiamos las clases que se asignaron
        limpiarOpciones();

        document.getElementById("imgBandera").src = "img/" + banderas[posActual];
        document.getElementById("n0").innerHTML = opciones[posActual][0];
        document.getElementById("n1").innerHTML = opciones[posActual][1];
        document.getElementById("n2").innerHTML = opciones[posActual][2];
    }
}

function limpiarOpciones(){
    document.getElementById("n0").className = "nombre";
    document.getElementById("n1").className = "nombre";
    document.getElementById("n2").className = "nombre";

    document.getElementById("l0").className = "letra";
    document.getElementById("l1").className = "letra";
    document.getElementById("l2").className = "letra";
}

function comprobarRespuesta(opElegida){
    if(opElegida==correcta[posActual]){//acertó
        //agregamos las clases para colocar el color verde a la opcion elegida
        document.getElementById("n" + opElegida).className = "nombre nombreAcertada";
        document.getElementById("l" + opElegida).className = "letra letraAcertada";
        cantidadAcertadas++;
    }else{//no acerto
        //agramos las clases para colocar en rojo la opcion elegida
        document.getElementById("n" + opElegida).className = "nombre nombreNoAcertada";
        document.getElementById("l" + opElegida).className = "letra letraNoAcertada";

        //opcion que era correcta
        document.getElementById("n" + correcta[posActual]).className = "nombre nombreAcertada";
        document.getElementById("l" + correcta[posActual]).className = "letra letraAcertada";
    }
    posActual++;
    //Esperamos 1 segundo y pasamos mostrar la siguiente bandera y sus opciones
    setTimeout(cargarBandera,1000);
}
function terminarJuego(){
    //ocultamos las pantallas y mostramos la pantalla final
    document.getElementById("pantalla-juego").style.display = "none";
    document.getElementById("pantalla-final").style.display = "block";
    //agreamos los resultados
    document.getElementById("numCorrectas").innerHTML = cantidadAcertadas;
    document.getElementById("numIncorrectas").innerHTML = banderas.length - cantidadAcertadas;
}

function volverAlInicio(){
    //ocultamos las pantallas y activamos la inicial
    document.getElementById("pantalla-final").style.display = "none";
    document.getElementById("pantalla-inicial").style.display = "block";
    document.getElementById("pantalla-juego").style.display = "none";
}