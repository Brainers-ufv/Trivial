//Arreglo que contiene las preguntas
const preguntas = [
    {
        id:1,
        categoria:"general",
        titulo:"¿Cuál es el planeta más grande de nuestro sistema solar?",
        opcionA:"Tierra",
        opcionB:"Marte",
        opcionC:"Jupiter",
        opcionD:"Saturno",
        correcta:"c"
    },
    {
        id:2,
        categoria:"general",
        titulo:"¿Quién escribió 'Cien años de soledad'?",
        opcionA:"Gabriel García Márquez",
        opcionB:"Julio Cortázar",
        opcionC:"Isabel Allende",
        opcionD:"Mario Vargas Llosa",
        correcta:"a"
    },
    {
        id:3,
        categoria:"general",
        titulo:"¿Cuál es el río más largo del mundo?",
        opcionA:"Amazonas",
        opcionB:"Nilo",
        opcionC:"Danubio",
        opcionD:"Misisipi",
        correcta:"a"
    },
    {
        id:4,
        categoria:"general",
        titulo:"¿Cuál es el componente principal del aire que respiramos?",
        opcionA:"Nitrogeno",
        opcionB:"Oxígeno",
        opcionC:"Dióxido de carbono",
        opcionD:"Hidrógeno",
        correcta:"a"
    },
    {
        id:4,
        categoria:"general",
        titulo:"¿La raíz cuadrada de 169 es...?",
        opcionA:"12",
        opcionB:"13",
        opcionC:"14",
        opcionD:"15",
        correcta:"b"
    },
    {
        id: 6,
        categoria: "general",
        titulo: "¿En cuál de las siguientes islas habitan humanos que sigue sin tener contacto con la civilización?",
        opcionA: "Ilha de Queimada Grande",
        opcionB: "Sentinel del Norte",
        opcionC: "Islas Fiji",
        opcionD: "Santo Tomé y Príncipe",
        correcta: "b"
    },
    {
        id: 7,
        categoria: "general",
        titulo: "¿Cuál es el género musical más popular en todo el mundo?",
        opcionA: "Rock",
        opcionB: "Electrónica",
        opcionC: "Rap",
        opcionD: "Pop",
        correcta: "d"
    },
    {
        id: 8,
        categoria: "general",
        titulo: "¿En qué año se inauguró la universidad Francisco de Vitoria?",
        opcionA: "2000",
        opcionB: "1999",
        opcionC: "1993",
        opcionD: "1995",
        correcta: "c"
    },
    {
        id: 9,
        categoria: "general",
        titulo: "A.m es una abreviación que se sitúa detrás de una hora ¿Qué significa?",
        opcionA: "Antes de morirme",
        opcionB: "Antes de mimir",
        opcionC: "Antes del meridiano",
        opcionD: "Ahora debo merendar",
        correcta: "c"
    },
    {
        id: 10,
        categoria: "entretenimiento",
        titulo: "¿Cuál es el instrumento principal en una orquesta sinfónica?",
        opcionA: "Guitarra",
        opcionB: "Piano",
        opcionC: "Violín",
        opcionD: "Flauta",
        correcta: "c"
    },
    {
        id: 11,
        categoria: "entretenimiento",
        titulo: "¿En qué deporte se utiliza una pelota de baloncesto?",
        opcionA: "Fútbol",
        opcionB: "Baloncesto",
        opcionC: "Golf",
        opcionD: "Tenis",
        correcta: "b"
    },
    {
        id: 12,
        categoria: "entretenimiento",
        titulo: "¿Cuál es el país de origen de la artista del tenis Serena Williams?",
        opcionA: "Estados Unidos",
        opcionB: "Francia",
        opcionC: "Canadá",
        opcionD: "Australia",
        correcta: "a"
    },
    {
        id: 13,
        categoria: "entretenimiento",
        titulo: "¿Cuántos jugadores conforman un equipo de fútbol sala estándar en el campo durante un partido?",
        opcionA: "6",
        opcionB: "7",
        opcionC: "11",
        opcionD: "5",
        correcta: "d"
    },
    {
        id: 14,
        categoria: "entretenimiento",
        titulo: "¿Quién es considerado el mejor nadador de todos los tiempos?",
        opcionA: "Michael Phelps",
        opcionB: "Usain Bolt",
        opcionC: "Simone Biles",
        opcionD: "Roger Federer",
        correcta: "a"
    },
    {
        id: 15,
        categoria: "entretenimiento",
        titulo: "¿En qué deporte se compite por la Copa Davis?",
        opcionA: "Fútbol",
        opcionB: "Tenis",
        opcionC: "Golf",
        opcionD: "Balonmano",
        correcta: "b"
    },
    {
        id: 16,
        categoria: "entretenimiento",
        titulo: "¿Qué ciudad es conocida como la 'Capital Mundial del Entretenimiento'?",
        opcionA: "Nueva York",
        opcionB: "París",
        opcionC: "Los Ángeles",
        opcionD: "Londres",
        correcta: "c"
    },
    {
        id: 17,
        categoria: "entretenimiento",
        titulo: "¿En qué año se estrenó la serie de televisión 'Friends'?",
        opcionA: "1992",
        opcionB: "1999",
        opcionC: "1994",
        opcionD: "2002",
        correcta: "c"
    },    
    {
        id: 18,
        categoria: "tecnologia",
        titulo: "¿Cuál es el propósito principal de CSS en desarrollo web?",
        opcionA: "Manejar la lógica del lado del servidor",
        opcionB: "Estilizar la presentación de las páginas web",
        opcionC: "Gestionar la interactividad del usuario",
        opcionD: "Definir las rutas de la aplicación",
        correcta: "b"
    },
    {
        id: 19,
        categoria: "tecnologia",
        titulo: "¿Qué es un bucle 'for' en la programación?",
        opcionA: "Un tipo de dato",
        opcionB: "Una estructura condicional",
        opcionC: "Una función",
        opcionD: "Una estructura de control de flujo que se repite",
        correcta: "d"
    },
    {
        id: 20,
        categoria: "tecnologia",
        titulo: "¿Qué significa HTML en el contexto de desarrollo web?",
        opcionA: "HyperText Markup Language",
        opcionB: "High-Level Text Management Language",
        opcionC: "HyperTransfer Markup Language",
        opcionD: "High-Level Transfer Management Language",
        correcta: "a"
    },    
    {
        id: 21,
        categoria: "tecnologia",
        titulo: "¿?",
        opcionA: "",
        opcionB: "",
        opcionC: "",
        opcionD: "",
        correcta: "c"
    },
    {
        id: 22,
        categoria: "tecnologia",
        titulo: "",
        opcionA: "",
        opcionB: "",
        opcionC: "",
        opcionD: "",
        correcta: ""
    },
    {
        id: 23,
        categoria: "tecnologia",
        titulo: "¿Cuál es la empresa creadora de la consola PlayStation?",
        opcionA: "Microsoft",
        opcionB: "Sony",
        opcionC: "Nintendo",
        opcionD: "Sega",
        correcta: "b"
    },
    {
        id: 24,
        categoria: "tecnologia",
        titulo: "¿Quién es el protagonista del videojuego 'Assasins Creed II'?",
        opcionA: "Geralt of Rivia",
        opcionB: "Ezio Auditore",
        opcionC: "Aloy",
        opcionD: "Joel",
        correcta: "b"
    },
    {
        id: 25,
        categoria: "tecnologia",
        titulo: "¿Cuál es el juego más vendido de todos los tiempos?",
        opcionA: "Minecraft",
        opcionB: "Tetris",
        opcionC: "Grand Theft Auto V",
        opcionD: "Super Mario Bros.",
        correcta: "b"
    },
    {
        id: 26,
        categoria: "tecnologia",
        titulo: "¿Cuál de estas opciones sería considerada como web segura?",
        opcionA: "http://as.com",
        opcionB: "ibarcia.corp",
        opcionC: "https://abc.es",
        opcionD: "html://proyecto.mkv",
        correcta: "c"
    },
    {
        id: 27,
        categoria: "tecnologia",
        titulo: "¿?",
        opcionA: "",
        opcionB: "",
        opcionC: "",
        opcionD: "",
        correcta: "b"
    },
    {
        id: 28,
        categoria: "geografia",
        titulo: "¿En qué continente se encuentran Los Andes?",
        opcionA: "Europa",
        opcionB: "Asia",
        opcionC: "América",
        opcionD: "África",
        correcta: "c"
    },
    {
        id: 29,
        categoria: "geografia",
        titulo: "¿Cuál es el desierto más extenso del mundo?",
        opcionA: "Sahara",
        opcionB: "Atacama",
        opcionC: "Gobi",
        opcionD: "Kalahari",
        correcta: "a"
    },
    {
        id: 30,
        categoria: "geografia",
        titulo: "¿?",
        opcionA: "Inside Out",
        opcionB: "Finding Nemo",
        opcionC: "Up",
        opcionD: "Ratatouille",
        correcta: "a"
    },
    {
        id: 31,
        categoria: "geografia",
        titulo: "¿Cuál es la capital de Francia?",
        opcionA: "Burdeos",
        opcionB: "Londres",
        opcionC: "París",
        opcionD: "Normandía",
        correcta: "c"
    },
    {
        id: 32,
        categoria: "geografia",
        titulo: "¿En qué país se encuentra el Monte Kilimanjaro?",
        opcionA: "Nepal",
        opcionB: "Italia",
        opcionC: "Tanzania",
        opcionD: "Perú",
        correcta: "c"
    },
    {
        id: 33,
        categoria: "geografia",
        titulo: "¿Cuál es el país con más población del mundo?",
        opcionA: "India",
        opcionB: "Brasil",
        opcionC: "China",
        opcionD: "EEUU",
        correcta: "a"
    },
    {
        id: 34,
        categoria: "geografia",
        titulo: "¿Cómo se conoce al espacio por el que los ciudadanos de paises de la Unión Europea pueden circular libremente?",
        opcionA: "Espacio libre",
        opcionB: "Espacio Europeo",
        opcionC: "Espacio Freeland",
        opcionD: "Espacio Schengen",
        correcta: ""
    },
    {
        id: 35,
        categoria: "geografia",
        titulo: "En términos de superficie, ¿cuál es el país más grande del mundo?",
        opcionA: "Canadá",
        opcionB: "Rusia",
        opcionC: "EEUU",
        opcionD: "China",
        correcta: "b"
    },
    {
        id: 36,
        categoria: "geografia",
        titulo: "¿De estos países cuál tiene mayor cantidad de islas?",
        opcionA: "Japón",
        opcionB: "Filipinas",
        opcionC: "Maldivas",
        opcionD: "Indonesia",
        correcta: "d"
    },
    {
        id: 37,
        categoria: "historia",
        titulo: "¿Cuál fue la última batalla de Napoleón Bonaparte antes de su exilio final a la isla de Santa Elena?",
        opcionA: "Batalla de Trafalgar",
        opcionB: "Batalla de Austerlitz",
        opcionC: "Batalla de Borodino",
        opcionD: "Batalla de Waterloo",
        correcta: "c"
    },
    {
        id: 38,
        categoria: "historia",
        titulo: "¿Quién fue el principal líder de la Revolución Cubana?",
        opcionA: "Fidel Castro",
        opcionB: "Raúl Castro",
        opcionC: "Ernesto 'Che' Guevara",
        opcionD: "Fulgencio Batista",
        correcta: "a"
    },
    {
        id: 39,
        categoria: "historia",
        titulo: "¿Cuál fue la capital del Imperio Romano de Occidente?",
        opcionA: "Milán",
        opcionB: "Roma",
        opcionC: "Atenas",
        opcionD: "Constantinopla",
        correcta: "b"
    },
    {
        id: 40,
        categoria: "historia",
        titulo: "¿Quién es conocido por sus esculturas de mármol, incluyendo 'David' y 'La Piedad'?",
        opcionA: "Pablo Picasso",
        opcionB: "Donatello",
        opcionC: "Auguste Rodin",
        opcionD: "Michelangelo",
        correcta: "d"
    },
    {
        id: 41,
        categoria: "historia",
        titulo: "¿Qué movimiento artístico se caracteriza por usar colores brillantes y formas geométricas?",
        opcionA: "Barroco",
        opcionB: "Impresionismo",
        opcionC: "Cubismo",
        opcionD: "Renacimiento",
        correcta: "c"
    },
    {
        id: 42,
        categoria: "historia",
        titulo: "¿Quién fue el lider de la Revolución Rusa de 1917?",
        opcionA: "Rasputín",
        opcionB: "Joseph Stalin",
        opcionC: "Vladimir Lenin",
        opcionD: "Volodimir Kruchev",
        correcta: "c"
    },
    {
        id: 43,
        categoria: "historia",
        titulo: "¿Cuál de estos eventos históricos ocurrió primero?",
        opcionA: "Revolución Industrial",
        opcionB: "Caída del Imperio Romano",
        opcionC: "La llegada de Cristóbal Colón a América",
        opcionD: "la construcción de las pirámides de Egipto",
        correcta: "d"
    },

    {
        id: 44,
        categoria: "historia",
        titulo: "¿Quién fue el primer presidente de EEUU?",
        opcionA: "Abraham Lincoln",
        opcionB: "Thomas Jefferson",
        opcionC: "George Washington",
        opcionD: "Benjamin Franklin",
        correcta: "c"
    },
    {
    id: 45,
        categoria: "historia",
        titulo: "¿En qué año ocurrió la Revolución Francesa?",
        opcionA: "1901",
        opcionB: "1789",
        opcionC: "1776",
        opcionD: "1812",
        correcta: "b"
    },
    {
        id: 46,
        categoria: "ciencias",
        titulo: "¿En qué año publicó Copérnico su obra sobre las esferas celestes ?",
        opcionA: "1543",
        opcionB: "1555",
        opcionC: "1602",
        opcionD: "1540",
        correcta: "a"
    },
    {
        id: 47,
        categoria: "ciencias",
        titulo: "¿Qué filósofo empleaba el término 'superhombre'?",
        opcionA: "Jean-Paul Sartre",
        opcionB: "Aristóteles",
        opcionC: "Sigmund Freud",
        opcionD: "Friedrich Nietzsche",
        correcta: "d"
    },
    {
        id: 48,
        categoria: "ciencias",
        titulo: "¿Cuál es el segundo paso del método científico?",
        opcionA: "Experimento",
        opcionB: "Detección de problemas",
        opcionC: "Teoría",
        opcionD: "Hipótesis",
        correcta: "d"
    },
    {
        id: 49,
        categoria: "ciencias",
        titulo: "¿Cuál es el simbólo químico del Litio?",
        opcionA: "LT",
        opcionB: "LI",
        opcionC: "L",
        opcionD: "LO",
        correcta: "b"
    },
    {
        id: 50,
        categoria: "ciencias",
        titulo: "¿Aproximadamente, cuál es el valor de la gravedad en la Tierra?",
        opcionA: "9.81 m/s^2",
        opcionB: "8.91 m/s^2",
        opcionC: "9.91 m/s^2",
        opcionD: "4.81 m/s^2",
        correcta: "a"
    },
    {
        id: 51,
        categoria: "ciencias",
        titulo: "¿Cuál de estos huesos se encuentra en la pierna?",
        opcionA: "Cúbito",
        opcionB: "Húmero",
        opcionC: "Rótula",
        opcionD: "Clavícula",
        correcta: "c"
    },
    {
        id: 52,
        categoria: "ciencias",
        titulo: "¿Cómo se llaman a la partícula subatómica que tiene carga positiva?",
        opcionA: "Electrones",
        opcionB: "Neutrones",
        opcionC: "Protones",
        opcionD: "Quark",
        correcta: "c"
    },  
    {
        id: 53,
        categoria: "ciencias",
        titulo: "¿Cuál es la composición química del agua?",
        opcionA: "H2",
        opcionB: "C02",
        opcionC: "02",
        opcionD: "H20",
        correcta: "d"
    },
    {
        id: 54,
        categoria: "ciencias",
        titulo: "¿De qué elemento químico está compuesto el diamante? en su totalidad",
        opcionA: "Oro",
        opcionB: "Carbono",
        opcionC: "Argón",
        opcionD: "Silicio",
        correcta: "b"
    },

    {
        id: 55,
        categoria: "ciencias",
        titulo: "¿Cuál es el proceso mediante el cual las estrellas librean energía?",
        opcionA: "Fusión nuclear",
        opcionB: "Radiación electromagnética",
        opcionC: "Fisión nuclear",
        opcionD: "Combustión química",
        correcta: "a"
    },
    {
        id: 56,
        categoria: "geografia",
        titulo: "¿Cuál es la cuidad más poblada del mundo?",
        opcionA: "Ciudad de México",
        opcionB: "Shanghái",
        opcionC: "Pekín",
        opcionD: "Tokyo",
        correcta: "d"
    },
    {
        id: 57,
        categoria: "historia",
        titulo: "¿Qué moneda se usaba en España antes del Euro?",
        opcionA: "Libra",
        opcionB: "Dólar",
        opcionC: "Peseta",
        opcionD: "Corona española",
        correcta: "c"
    },
    {
        id: 58,
        categoria: "entretenimiento",
        titulo: "En el videojuego 'Brawl Stars' ¿qué personaje tiene una habilidad que le permite volar con un paraguas?",
        opcionA: "Merry Poppins",
        opcionB: "Piper",
        opcionC: "Crow",
        opcionD: "Sandy",
        correcta: "b"
    },
    {
        id: 59,
        categoria: "entretenimiento",
        titulo: "De los siguientes futbolistas ¿cuál tiene más balones de Oro?",
        opcionA: "Ribery",
        opcionB: "Andrés Iniesta",
        opcionC: "Neymar JR",
        opcionD: "Luis Figo",
        correcta: "d"
    },
    {
        id: 60,
        categoria: "general",
        titulo: "¿Por qué las puertas de salida de los edificios se abren hacia fuera?",
        opcionA: "Por la convención IEEE",
        opcionB: "Para optimizar el tránsito de personas",
        opcionC: "Porque si no, en caso de incendio, moriríamos todos",
        opcionD: "Porque así lo dice la ley",
        correcta: "c"
    },





    //añadimos preguntas con este formato
];  


//tomamos los elementos html
const txtPuntaje = document.querySelector("#puntos");
const nombre = document.querySelector("#nombre");

nombre.innerHTML = localStorage.getItem("nombre");
let numPreguntaActual = 0;

//Recupero el puntaje en caso de que ya este jugando
let puntajeTotal = 0;
if (!localStorage.getItem("puntaje-total")) {
    puntajeTotal = 0;
    txtPuntaje.innerHTML = puntajeTotal
} else {
    puntajeTotal = parseInt(localStorage.getItem("puntaje-total"));
    txtPuntaje.innerHTML = puntajeTotal;
}

//cargar las preguntas del tema que eligió
const categoriaActual = localStorage.getItem("categoria-actual");
const preguntasCategoria = preguntas.filter(pregunta => pregunta.categoria === categoriaActual);

function cargarSiguientePregunta() {
    if (numPreguntaActual < 10) { //aquí cambiamos el nº de preguntas
        // Seleccionar la próxima pregunta que no se haya utilizado
        let preguntaActual;
        do {
            preguntaActual = preguntasCategoria.find(pregunta => !pregunta.utilizada);
        } while (!preguntaActual);
        
        preguntaActual.utilizada = true;

        // Incrementar el número de pregunta después de seleccionarla
        numPreguntaActual++;

        //tomo los elementos donde se cargaran los datos de la pregunta
        const numPregunta = document.querySelector("#num-pregunta");
        const txtPregunta = document.querySelector("#txt-pregunta");
        const opcionA = document.querySelector("#a");
        const opcionB = document.querySelector("#b");
        const opcionC = document.querySelector("#c");
        const opcionD = document.querySelector("#d");

        numPregunta.innerHTML = numPreguntaActual;
        txtPregunta.innerHTML = preguntaActual.titulo;
        opcionA.innerHTML = preguntaActual.opcionA;
        opcionB.innerHTML = preguntaActual.opcionB;
        opcionC.innerHTML = preguntaActual.opcionC;
        opcionD.innerHTML = preguntaActual.opcionD;

        // Reiniciar clases y eventos de los botones de respuesta
        const botonesRespuesta = document.querySelectorAll(".opcion");
        botonesRespuesta.forEach(opcion => {
            opcion.classList.remove("correcta", "incorrecta", "no-events");
            opcion.addEventListener("click", agregarEventListenerBoton);
        });

        txtPuntaje.classList.remove("efecto");
    } else {
        // Redirigir al usuario a la pantalla final o al menú dependiendo de las categorías jugadas
        const categoriasJugadasLS = JSON.parse(localStorage.getItem("categorias-jugadas"));
        if (categoriasJugadasLS.length < 6) {
            location.href = "menu.html";
        } else {
            location.href = "final.html";
        }
    }
}

function agregarEventListenerBoton(e) {
    const preguntaActual = preguntasCategoria[numPreguntaActual - 1]; // Ajustar el índice para acceder a la pregunta actual
    
    //Controlo si la respuesta es correcta
    if(e.currentTarget.id === preguntaActual.correcta){
        e.currentTarget.classList.add("correcta");
        puntajeTotal = puntajeTotal + 100;
        txtPuntaje.innerHTML = puntajeTotal;
        localStorage.setItem("puntaje-total", puntajeTotal);
        txtPuntaje.classList.add("efecto");
    } else {
        e.currentTarget.classList.add("incorrecta");
        const correcta = document.querySelector("#"+preguntaActual.correcta);
        correcta.classList.add("correcta");
    }
    
    // Después de responder, desactivar los clics en los botones de respuesta
    const botonesRespuesta = document.querySelectorAll(".opcion");
    botonesRespuesta.forEach(opcion => {
        opcion.classList.add("no-events");
    });
}

cargarSiguientePregunta();

//tomo el boton siguiente
const btnSiguiente = document.querySelector("#siguiente")
btnSiguiente.addEventListener("click", cargarSiguientePregunta);

