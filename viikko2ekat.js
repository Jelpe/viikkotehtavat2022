function jarjesta()
{
  var num1, num2, num3;
  num1 = parseInt(document.getElementById('eka').value);
  num2 = parseInt(document.getElementById('toka').value);
  num3 = parseInt(document.getElementById('kolmas').value);
  if(num1 < num2 && num1 < num3)
  {
    if(num2 < num3)
    {
      document.getElementById('t1').innerHTML = "Järjestys: " + num1 + ' ' + num2 + ' ' + num3;
    }
    else {
      document.getElementById('t1').innerHTML = "Järjestys: " + num1 + ' ' + num3 + ' ' + num2;
    }
  }
  else if(num2 < num1 && num2 < num3)
  {
    if(num1<num3)
    {
      document.getElementById('t1').innerHTML = "Järjestys: " + num2 + ' ' + num1 + ' ' + num3;
    }
    else {
      document.getElementById('t1').innerHTML = "Järjestys: " + num2 + ' ' + num3 + ' ' + num1;

    }
  }
  else if(num3 < num1 && num3 < num2)
    {
      if(num1 < num2)
      {
        document.getElementById('t1').innerHTML = "Järjestys: " + num3 + ' ' + num1 + ' ' + num2;
      }
      else {
        document.getElementById('t1').innerHTML = "Järjestys: " + num3 + ' ' + num2 + ' ' + num1;
      }
    }
  }

function etsiSuurin() {
  var suurin, eka, toka, kolmas, neljäs, viides;
  eka = parseInt(document.getElementById('luku1').value);
  toka = parseInt(document.getElementById('luku2').value);
  kolmas = parseInt(document.getElementById('luku3').value);
  neljäs = parseInt(document.getElementById('luku4').value);
  viides = parseInt(document.getElementById('luku5').value);
  if (eka < toka && kolmas < toka && neljäs < toka && viides < toka) {
    suurin = toka;
  }
  else if (eka < kolmas && neljäs < kolmas && viides < kolmas) {
    suurin = kolmas;
  }
  else if (eka < neljäs && viides < neljäs) {
    suurin = neljäs;
  }
  else if (eka < viides) {
    suurin = viides;
  }
  else {
    suurin = eka;
  }
  document.getElementById('t2').innerHTML = "Suurin luku on: " + suurin;
}

function onkoLuku() {
  var luku
  luku = parseInt(document.getElementById('luku').value);
  if (luku % 2) {
    document.getElementById('t3').innerHTML = "Luku on pariton";
  }
  else {
    document.getElementById('t3').innerHTML = "Luku on parillinen";
  }
}

function onkoIkää() {
  var ikä = parseInt(document.getElementById('text').value);
  if (ikä < 16) {
    document.getElementById('t4').innerHTML = "Saat ajaa polkupyörällä!";
  }
  else if (ikä < 18) {
    document.getElementById('t4').innerHTML = "Saat ajaa mopolla!";
  }
  else {
    document.getElementById('t4').innerHTML = "Saat ajaa autoa!";
  }
}

function kaannaTeksti() {
  var kieli = document.getElementById('kieli').value;
  if (kieli == 'englanti') {
    document.getElementById('t5').innerHTML = "Hello World!";
  }
  else if (kieli == 'ruotsi') {
    document.getElementById('t5').innerHTML = "Hej Världen!";
  }
  else if (kieli == 'ranska') {
    document.getElementById('t5').innerHTML = "Bonjour le monde!"
  }
  else if (kieli == 'saksa') {
    document.getElementById('t5').innerHTML = "Hallo Welt!"
  }
  else {
    document.getElementById('t5').innerHTML = "Hola Mundo!";
  }
}
