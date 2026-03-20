const permisos = [
    "Sin permisos",
    "Ejecución",
    "Escritura",
    "Escritura y ejecución",
    "Lectura",
    "Lectura y ejecución",
    "Lectura y escritura",
    "Todo"
];

// Obtener elementos
let user = document.getElementById("user");
let group = document.getElementById("group");
let others = document.getElementById("others");
let input = document.getElementById("permiso");

// Llenar los selects
for (let i = 0; i <= 7; i++) {
    user.innerHTML += `<option value="${i}">${i} - ${permisos[i]}</option>`;
    group.innerHTML += `<option value="${i}">${i} - ${permisos[i]}</option>`;
    others.innerHTML += `<option value="${i}">${i} - ${permisos[i]}</option>`;
}

input.addEventListener("input", function() {
    let valor = input.value;


    valor = valor.replace(/[^0-7]/g, "");
    valor = valor.slice(0, 3);

    input.value = valor;

    // Asignar a los selects
    user.value = valor[0] || "0";
    group.value = valor[1] || "0";
    others.value = valor[2] || "0";
});


function actualizar() {
    input.value = user.value + group.value + others.value;
}

user.addEventListener("change", actualizar);
group.addEventListener("change", actualizar);
others.addEventListener("change", actualizar);