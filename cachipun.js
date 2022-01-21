// veces que desea jugar
// que opcion elige


let opcion = prompt(`
Elija una opción:
1. Piedra
2. Papel
3. Tijera
`);

switch (opcion) {
    case "1":
        console.log("Piedra");
        break;
    case "2":
        console.log("Papel");
        break;
    case "3":
        console.log("Tijera");
        break;
}

// Math.floor(Math.random() * 3)