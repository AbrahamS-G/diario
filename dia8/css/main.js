function Crear(){
    
    document.getElementById('err').innerHTML = "";
    var no = document.getElementById('nominput').value;
    var ap = document.getElementById('apeinput').value;
    var co = document.getElementById('correo').value;
    var contra = document.getElementById('contra').value;
    var confirm = document.getElementById('confirm').value;

    if(contra !== confirm){
        const error = "Contraseñas No Coinciden"
        document.getElementById('err').innerHTML = error;
    }

    else if(co === ""){
        const error = "Correo Electronico faltante"
        document.getElementById('err').innerHTML = error;
    }

    else if ( no !== "" && ap !== ""){
        alert("Creado Correctamente");
        window.location.href = "login.html";
        document.getElementById("formulario").reset();
    }
}

function Ingresar(){
    var correo = document.getElementById('correo').value;
    var contra = document.getElementById('contra').value;
    if (correo === "abraham@gmail" || correo === "salva@gmail.com" || contra === "admin1234"){
        alert("Registro exitoso")
        window.location.href = "procesando.html";
    }
    else{
        alert("ERROR, CUENTA INVALIDA");
    }
}

function buy(){
    var no = document.getElementById('nominput').value;
    var ap = document.getElementById('apeinput').value;
    var nu = document.getElementById('numinput').value;
    var em = document.getElementById('emainput').value;
    var co = document.getElementById('codigo').value;
    var cu = document.getElementById('cupon').value;


    if(co.lenght < 5){
        const error = "Codigo Incorrecto";
        document.getElementById('err').innerHTML = error;
    }
    else if(no !== "" && ap !== "" && nu !== "" && em !== ""){
        alert("Completado, Le enviamos un correo de cofirmacion asu cuenta para verificar.");
        window.location.href = "procesando.html";
        document.getElementById("formulario").reset();
    }
    else{
        const error = "Campos Vacios";
        document.getElementById('err').innerHTML = error;
        alert("Campos Vacios, Favor De Llenar el formulario para continuar con tu compra.")
    }
    if(cu === "#ASGJSFT42"){
        alert("PREMIO SORPRESA... 15% de Descuento")
        
    }
    else{
        alert("CUPON INVALIDO")
    }
}



function Cupon(){
    const cupon = "#ASGJSFT42";
    document.getElementById('cupon').innerHTML = "Felicidades!! Obtuviste un cupon 15% de descuento!!: " + cupon;
}