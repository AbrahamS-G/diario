var lenguajec = 'yellow' /* 1*/
var paginac = 'green'  /* 2*/
var webc = 'violet' /* 3*/
var pyc = 'lightblue' /* 4*/
var aspc = 'crimson' /* 5*/
var aspnetc = 'crimson' /* 6*/
var htmlc = 'red' /* 7*/
var rubyc = 'black' /* 8*/
var javascriptc = 'brown' /* **/
var jspc = 'pink' /* 10*/
var phpc = 'blue'

// 1
function lenguaje(n){
    var n1 = document.getElementById('len1').value;
    var n2 = document.getElementById('len2').value;
    var n3 = document.getElementById('len3').value;
    var n4 = document.getElementById('len4').value;
    var n5 = document.getElementById('len5').value;
    var n6 = document.getElementById('len6').value;
    var n7 = document.getElementById('len7').value;
    var n8 = document.getElementById('len8').value;
    if(n8 === 'false' || n7 === 'false' || n6 === 'false' || n5 === 'false' || n4 === 'false' || n3 === 'false' || n2 === 'false' || n1 === 'false'){
        document.getElementById('len'+n).value = 'true'
    }
    if (n1 === 'true' && n2 === 'true' && n3 === 'true' && n4 === 'true' && n5 === 'true' && n6 === 'true' && n7 === 'true' && n8 === 'true') {
        document.getElementById('len1').style.backgroundColor = lenguajec;
        document.getElementById('len2').style.backgroundColor = lenguajec;
        document.getElementById('len3').style.backgroundColor = lenguajec;
        document.getElementById('len4').style.backgroundColor = lenguajec;
        document.getElementById('len5').style.backgroundColor = lenguajec;
        document.getElementById('len6').style.backgroundColor = lenguajec;
        document.getElementById('len7').style.backgroundColor = lenguajec;
        document.getElementById('len8').style.backgroundColor = lenguajec;

        document.getElementById('leny').style.backgroundColor = lenguajec;

    }
}
// 2
function pagina(n){
    var n1 = document.getElementById('pag1').value;
    var n2 = document.getElementById('pag2').value;
    var n3 = document.getElementById('pag3').value;
    var n4 = document.getElementById('pag4').value;
    var n5 = document.getElementById('pag5').value;
    var n6 = document.getElementById('pag6').value;
    if(n6 === 'false' || n5 === 'false' || n4 === 'false' || n3 === 'false' || n2 === 'false' || n1 === 'false'){
        document.getElementById('pag'+n).value = 'true'
    }
    if (n1 === 'true' && n2 === 'true' && n3 === 'true' && n4 === 'true' && n5 === 'true' && n6 === 'true') {
        document.getElementById('pag1').style.backgroundColor = paginac;
        document.getElementById('pag2').style.backgroundColor = paginac;
        document.getElementById('pag3').style.backgroundColor = paginac;
        document.getElementById('pag4').style.backgroundColor = paginac;
        document.getElementById('pag5').style.backgroundColor = paginac;
        document.getElementById('pag6').style.backgroundColor = paginac;

        document.getElementById('pagy').style.backgroundColor = paginac;
        document.getElementById('pagy').style.color = 'white';

    }
}
// 3
function web(n){
    var n1 = document.getElementById('web1').value;
    var n2 = document.getElementById('web2').value;
    var n3 = document.getElementById('web3').value;
    if(n1 == 'false' || n2 === 'false' || n3 === 'false'){
        document.getElementById('web'+n).value = 'true'
    }
    if (n1 === 'true' && n2 === 'true' && n3 === 'true') {
        document.getElementById('web1').style.backgroundColor = webc;
        document.getElementById('web2').style.backgroundColor = webc;
        document.getElementById('web3').style.backgroundColor = webc;
        document.getElementById('web1').style.color = 'white';
        document.getElementById('web2').style.color = 'white';
        document.getElementById('web3').style.color = 'white';
        
        document.getElementById('weby').style.backgroundColor = webc;
        document.getElementById('weby').style.color = 'white';
    }
}
// 4
function python(n){
    var n1 = document.getElementById('py1').value;
    var n2 = document.getElementById('py2').value;
    var n3 = document.getElementById('py3').value;
    var n4 = document.getElementById('py4').value;
    var n5 = document.getElementById('py5').value;
    var n6 = document.getElementById('py6').value;
    if(n6 === 'false' || n5 === 'false' || n4 === 'false' || n3 === 'false' || n2 === 'false' || n1 === 'false'){
        document.getElementById('py'+n).value = 'true'
    }
    if (n1 === 'true' && n2 === 'true' && n3 === 'true' && n4 === 'true' && n5 === 'true' && n6 === 'true') {
        document.getElementById('py1').style.backgroundColor = pyc;
        document.getElementById('py2').style.backgroundColor = pyc;
        document.getElementById('py3').style.backgroundColor = pyc;
        document.getElementById('py4').style.backgroundColor = pyc;
        document.getElementById('py5').style.backgroundColor = pyc;
        document.getElementById('py6').style.backgroundColor = pyc;

        document.getElementById('pyy').style.backgroundColor = pyc;

    }
}
// 5
function asp(n){
    var n1 = document.getElementById('asp1').value;
    var n2 = document.getElementById('asp2').value;
    var n3 = document.getElementById('asp3').value;
    if(n1 == 'false' || n2 === 'false' || n3 === 'false'){
        document.getElementById('asp'+n).value = 'true'
    }
    if (n1 === 'true' && n2 === 'true' && n3 === 'true') {
        document.getElementById('asp1').style.backgroundColor = aspc;
        document.getElementById('asp2').style.backgroundColor = aspc;
        document.getElementById('asp3').style.backgroundColor = aspc;
        document.getElementById('asp1').style.color = 'white';
        document.getElementById('asp2').style.color = 'white';
        document.getElementById('asp3').style.color = 'white';

        document.getElementById('aspy').style.backgroundColor = aspc;
        document.getElementById('aspy').style.color = 'white';
    }
}
// 6
function aspnet(n){
    var n1 = document.getElementById('net1').value;
    var n2 = document.getElementById('net2').value;
    var n3 = document.getElementById('net3').value;
    var n4 = document.getElementById('net4').value;
    var n5 = document.getElementById('net5').value;
    var n6 = document.getElementById('net6').value;
    if(n6 === 'false' || n5 === 'false' || n4 === 'false' || n3 === 'false' || n2 === 'false' || n1 === 'false'){
        document.getElementById('net'+n).value = 'true'
    }
    if (n1 === 'true' && n2 === 'true' && n3 === 'true' && n4 === 'true' && n5 === 'true' && n6 === 'true') {
        document.getElementById('net1').style.backgroundColor = aspnetc;
        document.getElementById('net2').style.backgroundColor = aspnetc;
        document.getElementById('net3').style.backgroundColor = aspnetc;
        document.getElementById('net4').style.backgroundColor = aspnetc;
        document.getElementById('net5').style.backgroundColor = aspnetc;
        document.getElementById('net6').style.backgroundColor = aspnetc;
        document.getElementById('net1').style.color = 'white';
        document.getElementById('net2').style.color = 'white';
        document.getElementById('net3').style.color = 'white';
        document.getElementById('net4').style.color = 'white';
        document.getElementById('net5').style.color = 'white';
        document.getElementById('net6').style.color = 'white';
        
        document.getElementById('aspnet').style.backgroundColor = aspnetc;
        document.getElementById('aspnet').style.color = 'white';
        
    }
}
// 7
function html(n){
    var n1 = document.getElementById('html1').value;
    var n2 = document.getElementById('html2').value;
    var n3 = document.getElementById('html3').value;
    var n4 = document.getElementById('html3').value;
    if(n1 == 'false' || n2 == 'false' || n3 == 'false' || n4 == 'false'){
        document.getElementById('html'+n).value = 'true'
    }
    if (n1 === 'true' && n2 === 'true' && n3 === 'true') {
        document.getElementById('html1').style.backgroundColor = htmlc;
        document.getElementById('html2').style.backgroundColor = htmlc;
        document.getElementById('html3').style.backgroundColor = htmlc;
        document.getElementById('html4').style.backgroundColor = htmlc;
        document.getElementById('html1').style.color = 'white';
        document.getElementById('html2').style.color = 'white';
        document.getElementById('html3').style.color = 'white';
        document.getElementById('html4').style.color = 'white';

        document.getElementById('htmly').style.backgroundColor = htmlc;
        document.getElementById('htmly').style.color = 'white';

    }
}
//8
function ruby(n){
    var n1 = document.getElementById('ruby1').value;
    var n2 = document.getElementById('ruby2').value;
    var n3 = document.getElementById('ruby3').value;
    var n4 = document.getElementById('ruby4').value;
    if(n1 == 'false' || n2 === 'false' || n3 === 'false' || n4 === 'false'){
        document.getElementById('ruby'+n).value = 'true'
    }
    if (n1 === 'true' && n2 === 'true' && n3 === 'true' && n4 === 'true') {
        document.getElementById('ruby1').style.backgroundColor = rubyc;
        document.getElementById('ruby2').style.backgroundColor = rubyc;
        document.getElementById('ruby3').style.backgroundColor = rubyc;
        document.getElementById('ruby4').style.backgroundColor = rubyc;
        document.getElementById('ruby1').style.color = 'white';
        document.getElementById('ruby2').style.color = 'white';
        document.getElementById('ruby3').style.color = 'white';
        document.getElementById('ruby4').style.color = 'white';

        document.getElementById('rubyy').style.backgroundColor = rubyc;
        document.getElementById('rubyy').style.color = 'white';
    }
}
// 9 y 10
function js(n){
    var n1 = document.getElementById('js1').value;
    var n2 = document.getElementById('js2').value;
    var n3 = document.getElementById('js3').value;
    var n4 = document.getElementById('js4').value;
    var n5 = document.getElementById('js5').value;
    var n6 = document.getElementById('js6').value;
    var n7 = document.getElementById('js7').value;
    var n8 = document.getElementById('js8').value;
    var n9 = document.getElementById('js9').value;
    var n10 = document.getElementById('js10').value;
    var n11 = document.getElementById('js11').value;
    var n12 = document.getElementById('js12').value;

    if(n12 === 'false' || n11 === 'false' || 
      n10 === 'false' || n9 === 'false' || n8 === 'false' || n7 === 'false' || n6 === 'false' || n5 === 'false' || n4 === 'false' || n3 === 'false' || n2 === 'false' || n1 === 'false'){
        document.getElementById('js'+n).value = 'true'
    }
    if (n1 === 'true' && n2 === 'true' && n3 === 'true' && n4 === 'true' && n5 === 'true' && n6 === 'true' && n7 === 'true' && n8 === 'true' && n9 == 'true' && n10 == 'true') {
        document.getElementById('js1').style.backgroundColor = javascriptc;
        document.getElementById('js2').style.backgroundColor = javascriptc;
        document.getElementById('js3').style.backgroundColor = javascriptc;
        document.getElementById('js4').style.backgroundColor = javascriptc;
        document.getElementById('js5').style.backgroundColor = javascriptc;
        document.getElementById('js6').style.backgroundColor = javascriptc;
        document.getElementById('js7').style.backgroundColor = javascriptc;
        document.getElementById('js8').style.backgroundColor = javascriptc;
        document.getElementById('js9').style.backgroundColor = javascriptc;
        document.getElementById('js10').style.backgroundColor = javascriptc;

        document.getElementById('js1').style.color = 'white';
        document.getElementById('js2').style.color = 'white';
        document.getElementById('js3').style.color = 'white';
        document.getElementById('js4').style.color = 'white';
        document.getElementById('js5').style.color = 'white';
        document.getElementById('js6').style.color = 'white';
        document.getElementById('js7').style.color = 'white';
        document.getElementById('js8').style.color = 'white';
        document.getElementById('js9').style.color = 'white';
        document.getElementById('js10').style.color = 'white';

        document.getElementById('javascript').style.backgroundColor = javascriptc;
        document.getElementById('javascript').style.color = 'white';
    }
    if(n9 == 'true' && n11 == 'true' && n12 == 'true'){
        
        document.getElementById('js9').style.backgroundColor = jspc;
        document.getElementById('js11').style.backgroundColor = jspc;
        document.getElementById('js12').style.backgroundColor = jspc;

        document.getElementById('js9').style.color = 'white';
        document.getElementById('js11').style.color = 'white';
        document.getElementById('js12').style.color = 'white';

        document.getElementById('jsp').style.backgroundColor = jspc;
        document.getElementById('jsp').style.color = 'white';
    }
}
//11
function php(n){
    var n1 = document.getElementById('php1').value;
    var n2 = document.getElementById('php2').value;
    var n3 = document.getElementById('php3').value;
    if(n1 == 'false' || n2 === 'false' || n3 === 'false'){
        document.getElementById('php'+n).value = 'true'
    }
    if (n1 === 'true' && n2 === 'true' && n3 === 'true') {
        document.getElementById('php1').style.backgroundColor = phpc;
        document.getElementById('php2').style.backgroundColor = phpc;
        document.getElementById('php3').style.backgroundColor = phpc;
        document.getElementById('php1').style.color = 'white';
        document.getElementById('php2').style.color = 'white';
        document.getElementById('php3').style.color = 'white';

        document.getElementById('phpy').style.backgroundColor = phpc;
        document.getElementById('phpy').style.color = 'white';
    }
}