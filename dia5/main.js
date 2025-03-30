// ABRAHAM SALAZAR GARRIDO PROYECTO "TIENDA SALAZAR"
function consultar() {
    var codigo = parseInt(document.getElementById('codigo').value);
    var productos = {
        1001: { nombre: "CHIPS", precio: 17 },
        1002: { nombre: "GALLETAS", precio: 14 },
        1003: { nombre: "COCACOLA", precio: 23 },
        1004: { nombre: "CHICLES", precio: 3 },
        1005: { nombre: "MARUCHAN", precio: 12 },
        1006: { nombre: "SERVILLETAS", precio: 30 },
        1007: { nombre: "CARGADORES", precio: 60 },
        1008: { nombre: "TEQUILA", precio: 130 },
        1009: { nombre: "DEL VALLE", precio: 19 },
        1010: { nombre: "AGUA", precio: 5 },
        1011: { nombre: "DULCE", precio: 2 },
        1012: { nombre: "CREMA 1/2", precio: 40 },
        1013: { nombre: "CHURRITOS", precio: 6 },
        1014: { nombre: "CHIPOTLES", precio: 17 },
        1015: { nombre: "MANTEQUILLA", precio: 21 },
        1016: { nombre: "CREMA 1/4", precio: 25 },
        1017: { nombre: "CREMA 1LT", precio: 63 },
        1018: { nombre: "YOGURTH", precio: 12 },
        1019: { nombre: "PALETA", precio: 4 },
        1020: { nombre: "PICA-FRESA", precio: 1 },

    };
    
    var productoInput = document.getElementById('producto');
    var precioInput = document.getElementById('precio');
    var ivaInput = document.getElementById('iva');
    var totalInput = document.getElementById('total');
    
    if (codigo in productos) {
        var producto = productos[codigo];
        var precio = producto.precio;

        // Cálculo del IVA
        var iva = precio <= 15 ? 0.10 * precio : (precio >= 20 ? 0.16 * precio : 0.14 * precio);

        productoInput.value = producto.nombre;
        precioInput.value = precio;
        ivaInput.value = iva.toFixed(2);
        totalInput.value = (precio + iva).toFixed(2);
    } else {
        alert("Producto no encontrado");
        productoInput.value = '';
        precioInput.value = '';
        ivaInput.value = '';
        totalInput.value = '';
    }
}
function beb(){
    document.getElementById('resultado1').innerHTML = "1003"
    document.getElementById('resultado2').innerHTML = "COCACOLA"
    document.getElementById('resultado3').innerHTML = "23$"

    document.getElementById('resultado21').innerHTML = "1008"
    document.getElementById('resultado22').innerHTML = "TEQUILA"
    document.getElementById('resultado23').innerHTML = "130$"
    
    document.getElementById('resultado31').innerHTML = "1009"
    document.getElementById('resultado32').innerHTML = "DEL VALLE"
    document.getElementById('resultado33').innerHTML = "19$"
    
    document.getElementById('resultado41').innerHTML = "1010"
    document.getElementById('resultado42').innerHTML = "AGUA"
    document.getElementById('resultado43').innerHTML = "5$"
}
function bot(){
    document.getElementById('resultado1').innerHTML = "1001"
    document.getElementById('resultado2').innerHTML = "CHIPS"
    document.getElementById('resultado3').innerHTML = "17$"

    document.getElementById('resultado21').innerHTML = "1002"
    document.getElementById('resultado22').innerHTML = "GALLETAS"
    document.getElementById('resultado23').innerHTML = "14$"
    
    document.getElementById('resultado31').innerHTML = "1005"
    document.getElementById('resultado32').innerHTML = "MARUCHAN"
    document.getElementById('resultado33').innerHTML = "12$"
    
    document.getElementById('resultado41').innerHTML = "1013"
    document.getElementById('resultado42').innerHTML = "CHURRITOS"
    document.getElementById('resultado43').innerHTML = "6$"
}
function aba(){
    document.getElementById('resultado1').innerHTML = "1006"
    document.getElementById('resultado2').innerHTML = "SERVILLETAS"
    document.getElementById('resultado3').innerHTML = "30$"

    document.getElementById('resultado21').innerHTML = "1007"
    document.getElementById('resultado22').innerHTML = "CARGADORES"
    document.getElementById('resultado23').innerHTML = "60$"
    
    document.getElementById('resultado31').innerHTML = "1014"
    document.getElementById('resultado32').innerHTML = "CHIPOTLES"
    document.getElementById('resultado33').innerHTML = "17$"
    
    document.getElementById('resultado41').innerHTML = "1015"
    document.getElementById('resultado42').innerHTML = "MANTEQUILLA"
    document.getElementById('resultado43').innerHTML = "21$"
}
function gol(){
    document.getElementById('resultado1').innerHTML = "1004"
    document.getElementById('resultado2').innerHTML = "CHICLES"
    document.getElementById('resultado3').innerHTML = "3$"

    document.getElementById('resultado21').innerHTML = "1011"
    document.getElementById('resultado22').innerHTML = "DULCE"
    document.getElementById('resultado23').innerHTML = "2$"
    
    document.getElementById('resultado31').innerHTML = "1019"
    document.getElementById('resultado32').innerHTML = "PALETA"
    document.getElementById('resultado33').innerHTML = "4$"
    
    document.getElementById('resultado41').innerHTML = "1020"
    document.getElementById('resultado42').innerHTML = "PICA-FRESA"
    document.getElementById('resultado43').innerHTML = "1$"
}
function crem(){
    document.getElementById('resultado1').innerHTML = "1012"
    document.getElementById('resultado2').innerHTML = "CREMA 1/2"
    document.getElementById('resultado3').innerHTML = "40$"

    document.getElementById('resultado21').innerHTML = "1016"
    document.getElementById('resultado22').innerHTML = "CREMA 1/4"
    document.getElementById('resultado23').innerHTML = "25$"
    
    document.getElementById('resultado31').innerHTML = "1017"
    document.getElementById('resultado32').innerHTML = "CREMA 1LT"
    document.getElementById('resultado33').innerHTML = "63$"
    
    document.getElementById('resultado41').innerHTML = "1018"
    document.getElementById('resultado42').innerHTML = "YOGURTH"
    document.getElementById('resultado43').innerHTML = "12$"
}