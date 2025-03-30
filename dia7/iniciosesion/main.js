function log(){
    window.location.replace('../pagina/inicio.html')
    var user = document.getElementById('user').value;
    var password = document.getElementById('password').value;
    if(user === 'abraham_ctm' && password === '1234'){
        alert("Vienvenido "+user)
        window.location.replace('../pagina/inicio.html')
    }else{
        alert("Datos Incorrectos")
    }
}
function register(){
    var user = document.getElementById('user').value;
    var password = document.getElementById('password').value;
    var confirmar = document.getElementById('confirmar').value;
    if(password === ""){
        alert("Contraseña vacia")
    }
    else if(user === ""){
        alert("Usuario vacio")
    }
    else if(password === confirmar){
        alert("Vienvenido "+user)
        window.location.replace('../pagina/inicio.html')

    }else{
        alert("Contraseñas no coinciden")
    }
}
function unset(codigo){
    var valor = document.getElementById('d'+codigo).value
    if(valor === 'true'){
        document.getElementById('c'+codigo).innerHTML = "Inscribirse";
        document.getElementById('d'+codigo).value = 'false';
        alert("Has cancelado tu suscripcion:<!!")
    }
    else if(valor === 'false'){
        document.getElementById('c'+codigo).innerHTML = "Cancelar Suscripcion";
        document.getElementById('d'+codigo).value = 'true';
        window.location.replace("formbuy.html")
    }
}
function enviarWhatsApp(){
    var asunto = document.getElementById("asunto").value;
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var correo = document.getElementById("correo").value;
    var checar = document.getElementById("check");
    var texto = document.getElementById("textogrande");

    var valor = texto.value;
    if(asunto === ""){
        alert("Asunto incompleto")
    }else if(nombre === ""){
        alert("Nombre incompleto")
    }else if(apellido === ""){
        alert("Apellido incompleto")
    }else if(correo === ""){
        alert("correo incompleto")
    }else if(valor === ""){
        alert("texto incompleto")
    }else if(checar.checked){
        var msj = encodeURIComponent(
            "Asunto: " + asunto + "\n" +
            "Nombre: " + nombre + "\n" +
            "Apellido: " +apellido + "\n" +
            "Correo: " + correo + "\nMensaje: " + "\n" +
            valor
            );
            window.open("https://wa.me/5563359894?text=" + msj, "_blank");
    
    }else{
        alert("Debes aceptar terminos y condiciones para continuar")
    }

}

function primerPaso(){
    let objeto_JS = document.forms["comprando"]
    let nombre = objeto_JS.nombreform.value
    let apellido = objeto_JS.apellidoform.value;
    let direccion = objeto_JS.direccionform.value;
    let telefono = objeto_JS.telefonoform.value;
    if(nombre == "" || apellido == "" || direccion == "" || telefono == ""){
        alert('faltan datos')
    }else{
        prod('producto','datos')
    }
}

function prod(pagina,cambio){
    document.getElementById(pagina).style.display = "block";
    document.getElementById(cambio).style.display = "none"

}
function confirmar(){
    let objeto_JS = document.forms["comprando"]

    let nombre = objeto_JS.nombreform.value
    let apellido = objeto_JS.apellidoform.value;
    let direccion = objeto_JS.direccionform.value;
    let telefono = objeto_JS.telefonoform.value;
    let tarjeta = objeto_JS.target.value;
    let cv = objeto_JS.cv.value;
    
    var deps = "1234 5647 2108 2254";

    const pais = objeto_JS.pais;
    const paisSeleccionado = pais.value;

    const radios = document.querySelectorAll('input[type="radio"]');
    let seleccionado = '';
    radios.forEach(radio => {
        if (radio.checked) {
            seleccionado = radio.value;
        }
    });
    
    let nombreter = objeto_JS.nombreterm;
    let direccionterm = objeto_JS.direccionterm
    let paister = objeto_JS.paisterm
    let curso = objeto_JS.cursoterm
    let tel = objeto_JS.telefonoterm
    let t = objeto_JS.tarj
    let c = objeto_JS.cvterm
    
    nombreter.value = nombre + " " + apellido
    direccionterm.value = direccion;
    tel.value = telefono
    paister.value = paisSeleccionado
    
    curso.value = "Curso De: " + seleccionado

    if (tarjeta === "") {
        t.value = deps;
        c.value = 0;
    } else {
        t.value = tarjeta;
        c.value = cv;
    }
    let precio = 0
    if(seleccionado == "HTML"){
        precio = 1000
    }else if(seleccionado == "CSS"){
        precio = 1500
    }else if(seleccionado == "JAVASCRIPT"){
        precio = 5000
    }else if(seleccionado == "JAVA"){
        precio = 3000
    }else if(seleccionado == "PYTHON"){
        precio = 10000
    }else if(seleccionado == "C"){
        precio = 6700
    }
    else{
        precio = 100000
    }
    document.getElementById('precio').innerHTML = "Precio del curso: $" + precio;

    let curso_comprado = "Nombre: " + nombre + " " + apellido + "\n" 
    + "Direccion: " + direccion + "\n" 
    + "Telefono: " + telefono + "\n" 
    + "Pais: " + paisSeleccionado + "\n"
    + "Curso: " + seleccionado + "\n"
    + "Precio: " + precio + "\n"
    + "Tarjeta: " + t.value
    console.log(curso_comprado)
}
function comprado(){
    document.getElementById('header').style.display = "none";
    document.getElementById('cancelar').style.display = "none"
    document.getElementById('anterior').style.display = "none"
    document.getElementById('comprandoboton').style.display = "none"
    document.getElementById('h').style.display = "block"
    document.getElementById('titule').innerHTML = "Ya es tuyo!!"
    document.getElementById('confirmarsi').innerHTML = "Has confirmado tu información"
    let cantidad = 7
    for (let i = 0; i < cantidad; i++) {
        let numero = Math.floor(1000 + Math.random() * 9000);
        document.getElementById('compra').innerHTML = "Tu compra es la numero: " + numero
      }

    window.print()
    alert("Acabas de comprar un curso!! \n Redireccionando...");
    window.location.replace('inicio.html');
}