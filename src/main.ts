//interfaz para los grupos
interface Grupos {
    nombreGrupo: string,
    añoFundacion: number,
    activo: boolean,
    genero: string,
};

//Definimos variable para cada género
const popRock = "🎵 Pop Rock";
const rock = "🎸 Rock";
const hardRock = "🤘 Hard Rock";
const clasica = " 🎼 Clásica";

//Estilo
const estiloTitulo = "font-weight: bold; font-size: 16px; background-color: green; color: white;";

//Crear lista de grupos
const grupo1: Grupos = { 
    nombreGrupo: "The Beatles", 
    añoFundacion: 1960, 
    activo: true, 
    genero: popRock,
};

const grupo2: Grupos = { 
    nombreGrupo: "Queen", 
    añoFundacion: 1970, 
    activo: false, 
    genero: rock,
};

const grupo3: Grupos = { 
    nombreGrupo: "AC DC", 
    añoFundacion: 1973, 
    activo: true, 
    genero: hardRock,
};

const grupo4: Grupos = { 
    nombreGrupo: "Ludwig van Beethoven", 
    añoFundacion: 1770, 
    activo: false, 
    genero: clasica,
};

const grupo5: Grupos = { 
    nombreGrupo: "The Rolling Stones", 
    añoFundacion: 1962, 
    activo: true, 
    genero: rock,
};

console.log(
    `%c${grupo1.nombreGrupo}`, estiloTitulo,
    `\nAño de fundación: ${grupo1.añoFundacion}`,
    `\nActivo: ${grupo1.activo ? "Sí" : "No"}`,
    `\nGenero: ${grupo1.genero}`,
)

console.log(
    `%c${grupo2.nombreGrupo}`, estiloTitulo,
    `\nAño de fundación: ${grupo2.añoFundacion}`,
    `\nActivo: ${grupo2.activo ? "Sí" : "No"}`,
    `\nGenero: ${grupo2.genero}`,
)
console.log(
    `%c${grupo3.nombreGrupo}`, estiloTitulo,
    `\nAño de fundación: ${grupo3.añoFundacion}`,
    `\nActivo: ${grupo3.activo ? "Sí" : "No"}`,
    `\nGenero: ${grupo3.genero}`,
)
console.log(
    `%c${grupo4.nombreGrupo}`, estiloTitulo,
    `\nAño de fundación: ${grupo4.añoFundacion}`,
    `\nActivo: ${grupo4.activo ? "Sí" : "No"}`,
    `\nGenero: ${grupo4.genero}`,
)

console.log(
    `%c${grupo5.nombreGrupo}`, estiloTitulo,
    `\nAño de fundación: ${grupo5.añoFundacion}`,
    `\nActivo: ${grupo5.activo ? "Sí" : "No"}`,
    `\nGenero: ${grupo5.genero}`,
)