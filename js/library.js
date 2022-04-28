function _lib(selektor)
{
    this.Selektor = selektor;
    this.El = document.querySelectorAll(this.Selektor);
}
_lib.prototype.ubaciElement = function(_naziv, _klasa, _identifikator, _tekst)
{
    console.log(this.El[0]);

    if(_naziv == null || _naziv == "")
    {
        console.log("Niste dodali naziv elementa, objekt nije kreiran");
    }
    else
    {
        if(_klasa == "" || _klasa == null)
        {
            if(_identifikator != "" && _identifikator != null)
            {
                var oDodajElement = document.createElement(_naziv);
                oDodajElement.innerHTML = _tekst;
                oDodajElement.classList.add(_klasa);
                oDodajElement.setAttribute("id", _identifikator);
                this.El[0].appendChild(oDodajElement);
            }
            else
            {
                var oDodajElement = document.createElement(_naziv);
                oDodajElement.innerHTML = _tekst;
                oDodajElement.classList.add(_klasa);
                document.getElementsByTagName('body')[0].appendChild(oDodajElement);
            }
        }
        else
        {
            if(_identifikator != "" && _identifikator != null)
            {
                var oDodajElement = document.createElement(_naziv);
                oDodajElement.innerHTML = _tekst;
                oDodajElement.classList.add(_klasa);
                oDodajElement.setAttribute("id", _identifikator);
                document.getElementsByTagName('body')[0].appendChild(oDodajElement);
            }
            else
            {
                var oDodajElement = document.createElement(_naziv);
                oDodajElement.innerHTML = _tekst;
                oDodajElement.classList.add(_klasa);
                document.getElementsByTagName('body')[0].appendChild(oDodajElement);
            }
        }
    }
}
_lib.prototype.dodajKlasu = function(naziv_klase)
{
    if(naziv_klase == null || naziv_klase == "")
    {
        console.log("Niste unjeli parametar!");
    }
    else
    {
        var lDodajKlasu = document.querySelectorAll(this.Selektor);
        for (var i = 0; i < lDodajKlasu.length; ++i) {
            lDodajKlasu[i].classList.add(naziv_klase);
        }
    }
}
_lib.prototype.dodajAtribut = function(naziv_atributa, vrijednost_atributa)
{
    var lDodajAtribut = document.querySelectorAll(this.Selektor);
    for (var i=0; i < lDodajAtribut.length; i++) 
    {
        lDodajAtribut[i].setAttribute(naziv_atributa, vrijednost_atributa);
    }
}
_lib.prototype.sakrij = function()
{
    lSakrij = document.querySelectorAll(this.Selektor);
    for (var i = 0; i < lSakrij.length; ++i) {
        lSakrij[i].style.visibility = 'hidden';
    }
}
_lib.prototype.prikazi = function()
{
    lPrikazi = document.querySelectorAll(this.Selektor);
    for (var i = 0; i < lPrikazi.length; ++i) {
        lPrikazi[i].style.visibility = 'visible';
    }
}