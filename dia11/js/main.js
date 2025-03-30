function cambiar(article,selection){
    document.getElementById('index').style.display = 'none';
    document.getElementById('myproyects').style.display = 'none';
    document.getElementById('contact').style.display = 'none';
    document.getElementById('horario').style.display = 'none';
    document.getElementById('galery').style.display = 'none';
    document.getElementById(article).style.display = 'block';



    document.getElementById('inicio').style.backgroundColor = '#68101c';
    document.getElementById('misproyectos').style.backgroundColor = '#68101c';
    document.getElementById('contactame').style.backgroundColor = '#68101c';
    document.getElementById('galeria').style.backgroundColor = '#68101c';
    document.getElementById(selection).style.backgroundColor = '#4e0a13';
}
document.getElementById('inicio').style.backgroundColor = '#4e0a13';
