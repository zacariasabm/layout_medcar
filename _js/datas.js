  var hoje;
  var dia;
  var dias;
  var mes;
  var ano;

  hoje = new Date();
  dia = hoje.getDate();
  dias = hoje.getDay();
  mes = hoje.getMonth();
  ano = hoje.getYear();

  if (dia < 10)
    dia = "0" + dia;

  if (ano < 1000)
    ano = 1900 + ano;

  function CriaArray (n)
  {
   this.length = n;
  }

  NomeDia = new CriaArray(7);
  NomeDia[0] = "Domingo";
  NomeDia[1] = "Segunda-feira";
  NomeDia[2] = "Ter&ccedil;a-feira";
  NomeDia[3] = "Quarta-feira";
  NomeDia[4] = "Quinta-feira";
  NomeDia[5] = "Sexta-feira";
  NomeDia[6] = "S&aacute;bado";

  NomeMes = new CriaArray(12);
  NomeMes[0] = "Janeiro";
  NomeMes[1] = "Fevereiro";
  NomeMes[2] = "Mar&ccedil;o";
  NomeMes[3] = "Abril";
  NomeMes[4] = "Maio";
  NomeMes[5] = "Junho";
  NomeMes[6] = "Julho";
  NomeMes[7] = "Agosto";
  NomeMes[8] = "Setembro";
  NomeMes[9] = "Outubro";
  NomeMes[10] = "Novembro";
  NomeMes[11] = "Dezembro";

  function escreveData()
  {
   if (ano == '19100')
     ano = '2000';
   document.write (NomeDia[dias] + ", " + dia + " de " + NomeMes[mes] + " de " + ano+"&nbsp;&nbsp;");
  }

