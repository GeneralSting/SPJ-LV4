var oLib = new _lib('.naslov');
var nodeList = oLib.El;

nodeList.forEach(element => {
    console.log(element.innerHTML)
});

var oLib_2 = new _lib('body')
oLib_2.ubaciElement("h1", "klasa", "id", "tekst");

var oLib_3 = new _lib('.naslov');
oLib_3.dodajKlasu('novaKlasa');

var oLib_4 = new _lib('li');
oLib_4.dodajAtribut("style", "color:red; margin:50px");
oLib_4.sakrij();
oLib_4.prikazi();

localStorage.setItem('racunarstvo', 'http://racunarstvo.vuv.hr/');
localStorage.setItem('loomen', 'http://loomen.vsmti.hr/');
localStorage.setItem('imagine', 'http://e5.onthehub.com/d.ashx?s=ui4qkso06k');
localStorage.setItem('studentski_dom', 'http://studom.vsmti.hr/');
localStorage.setItem('office365', 'https://outlook.office365.com/owa/?realm=vsmti.hr%23path=/mail');

var oLib_5 = new _lib('footer-navigation');


 for (var i = 0; i < localStorage.length; i++){
    console.log(localStorage.getItem(localStorage.key(i)));
    var lista = document.getElementById('footer-navigation');
    var li = document.createElement('li');
    var link = document.createElement('a');
    lista.appendChild(li);
    link.innerHTML = localStorage.key(i);
    link.setAttribute('href', localStorage.getItem(localStorage.key(i)));
    li.appendChild(link);
}
 