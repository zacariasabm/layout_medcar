qualnav=(document.getElementById)?'ie':((document.all)?'ie':'ns');
function login() {
	document.logincliente.action="javascript:;"
    msg="Preencha os campos\nobrigatórios:\n\n•  grupo\n•  cota\n•  senha";
	with (document.logincliente) {
		if ((grupo.value==" Grupo") || (grupo.value==""))
		{
			if (qualnav=='ie') {
				document.getElementById("grupo").style.background="#FF0000";
				document.getElementById("grupo").style.color="#ffffff";
				setTimeout('document.getElementById("grupo").style.background="#ffffff";',400);
				setTimeout('document.getElementById("grupo").style.color="#4A4A4A";',400);
				setTimeout('document.logincliente.grupo.focus();',600); 
			} else {
			  alert(msg);
			}
			return;
		}
		if ((cota.value==" Cota") || (cota.value==""))
		{
			if (qualnav=='ie') {
				document.getElementById("cota").style.background="#FF0000";
				document.getElementById("cota").style.color="#ffffff";
				setTimeout('document.getElementById("cota").style.background="#ffffff";',400);
				setTimeout('document.getElementById("cota").style.color="#4A4A4A";',400);
				setTimeout('document.logincliente.cota.focus();',600);
			} else {
			  alert(msg);
			}
			return;
		}
		if ((senha.value==" Senha") || (senha.value==""))
		{
			if (qualnav=='ie') {
				document.getElementById("senha").style.background="#FF0000";
				document.getElementById("senha").style.color="#ffffff";
				setTimeout('document.getElementById("senha").style.background="#ffffff";',500);
				setTimeout('document.getElementById("senha").style.color="#4A4A4A";',500);
				setTimeout('document.logincliente.senha.focus();',600);
			} else {
			  alert(msg);
			}
			return;
		}
		popcanalcliente(document.logincliente.grupo.value, document.logincliente.cota.value, document.logincliente.senha.value);
//        document.logincliente.grupo.value = " Grupo";
//        document.logincliente.cota.value = " Cota";
//        document.logincliente.senha.value = " Senha";
          location.reload();
	}
}

function formataNro(obj){
	if(event.keyCode > 57){
		event.returnValue = false
	}
}
function verpreco() {
	with (document.simulador) {
		if (produto.options[produto.selectedIndex].value==0) 
		{ 
			if (qualnav=='ie') {
				document.getElementById("produto").style.background="#FF0000";
				document.getElementById("produto").style.color="#ffffff";
				setTimeout('document.getElementById("produto").style.background="#ffffff";',400);
				setTimeout('document.getElementById("produto").style.color="#4A4A4A";',400);
				setTimeout('document.simulador.produto.focus();',600);
			} else {
			  alert("Escolha o produto");
			}
			return;
		}
		if (produto.options[produto.selectedIndex].value==1) 
		{
		action="../plano/automoveis.asp";
		}
		if (produto.options[produto.selectedIndex].value==2) 
		{
		action="../plano/imoveis.asp";
		}
		if (produto.options[produto.selectedIndex].value==3) 
		{
		action="../plano/caminhoes.asp";
		}
		if (produto.options[produto.selectedIndex].value==4) 
		{
		action="../plano/tratores.asp";
		}
		submit();
	}
}

function abreJanela(caminho,janela,parametros){
	MM_openBrWindow(caminho,janela,parametros);
	janelaNova.focus();
}
function MM_openBrWindow(theURL,winName,features) { //v2.0
  janelaNova=window.open(theURL,winName,features);
}
function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}
function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}
function MM_showHideLayers() { //v6.0
  var i,p,v,obj,args=MM_showHideLayers.arguments;
  for (i=0; i<(args.length-2); i+=3) if ((obj=MM_findObj(args[i]))!=null) { v=args[i+2];
    if (obj.style) { obj=obj.style; v=(v=='show')?'visible':(v=='hide')?'hidden':v; }
    obj.visibility=v; }
}
function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}
function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}
function MM_reloadPage(init) {  //reloads the window if Nav4 resized
  if (init==true) with (navigator) {if ((appName=="Netscape")&&(parseInt(appVersion)==4)) {
    document.MM_pgW=innerWidth; document.MM_pgH=innerHeight; onresize=MM_reloadPage; }}
  else if (innerWidth!=document.MM_pgW || innerHeight!=document.MM_pgH) location.reload();
}
MM_reloadPage(true);
//
function customPrint() {
    if (document.all) {
        if (navigator.appVersion.indexOf("5.0") == -1) {
            var OLECMDID_PRINT = 6;
            var OLECMDEXECOPT_DONTPROMPTUSER = 2;
            var OLECMDEXECOPT_PROMPTUSER = 1;
            var WebBrowser = "<OBJECT ID=\"WebBrowser1\" WIDTH=0 HEIGHT=0 CLASSID=\"CLSID:8856F961-340A-11D0-A96B-00C04FD705A2\"></OBJECT>";
            document.body.insertAdjacentHTML("beforeEnd", WebBrowser);
            WebBrowser1.ExecWB(6, 2);
            WebBrowser1.outerHTML = "";
        } else {
            self.print();
        }
    } else {
        self.print();
    }
}
//
function miSobre(imi){
	MM_swapImage('fmi'+imi,'','../../images/menu/pix_musgo.gif',1);
	MM_swapImage('fmi'+(imi+1),'','../../images/menu/pix_musgo.gif',1);
	MM_findObj('imi'+imi+((document.layers)?'l':'')).bgColor='#DEDEDE';
	MM_swapImage('bmi'+imi,'','../../images/menu/blt_menuinterno_ovr.gif',1);
}
function miFora(imi){
	MM_swapImage('bmi'+imi,'','../../images/menu/blt_menuinterno.gif',1);
	MM_findObj('imi'+imi+((document.layers)?'l':'')).bgColor='#F5F5F5';
	MM_swapImage('fmi'+(imi+1),'','../../images/menu/pix_cinza.gif',1);
	MM_swapImage('fmi'+imi,'','../../images/menu/pix_cinza.gif',1);
}
function miCarga(qim){
	if(document.layers){
		for(i=0;i<qim;++i){
			MM_findObj('imi'+i+'l').visibility='visible';
		}
	}
}
//
function selecionarCSS(){
	estiloCerto=(document.getElementById)?'ie.css':((document.all)?'ie.css':'ns.css');
	correcaoPath=((document.location+'-').indexOf('/content')!=-1)?'../../':'';
    //  correcaoPath='/bradesco/html/'; 
	document.write('<link rel="stylesheet" href="'+correcaoPath+'styles/'+estiloCerto+'" type="text/css">')

}

selecionarCSS();

/* pop-up */
function abreAssemb() {
	window.open('http://www.bradesco.com.br/assembleia.html'); //http://200.168.231.164/consorcio/index.html
	window.top.close();
}
function popfale() {
var winPopup = window.open('../popfale','popfale','width=485,height=482,directories=0,location=0,menubar=0,resizable=0,scrollbars=0,status=0,toolbar=0,marginleft=0,margintop=0,left='+(((screen.width-485)/2)+-10)+',top='+(((screen.height-482)/2)+-30));
}
function popsenha() {
//var winPopup = window.open('../popsenha','popsenha','width=485,height=311,directories=0,location=0,menubar=0,resizable=0,scrollbars=0,status=0,toolbar=0,marginleft=0,margintop=0,left='+(((screen.width-485)/2)+-10)+',top='+(((screen.height-311)/2)+-30));
var winPopup = window.open('../popsenha','popsenha','width=485,height=414,directories=0,location=0,menubar=0,resizable=0,scrollbars=0,status=0,toolbar=0,marginleft=0,margintop=0,left='+(((screen.width-485)/2)+-10)+',top='+(((screen.height-311)/2)+-30));
winPopup.focus();
}
function completa(campo,caracter,tam)
{
	var aux;
	aux = campo;

	if ( aux.length == tam )
		return campo;
	n = tam - aux.length;
	for ( i=0; i < n ; i++ )
		aux = caracter + aux;
	campo = aux;
	return aux;
}
function popcanalcliente(grupo, cota, senha) 
{
//var winPopup = window.open('../restrito/novo_usuario.asp','popcliente','width=769,height=460,directories=0,location=0,menubar=1,resizable=0,scrollbars=1,status=0,toolbar=1,marginleft=0,margintop=0,left='+(((screen.width-766)/2)+-10)+',top='+(((screen.height-460)/2)+-30));
  var winPopup;

//  document.cookie="Grupo=" + escape(grupo) + ";path=/";
//  document.cookie="Cota=" + escape(cota) + ";path=/";
//  document.cookie="Senha=" + escape(senha) + ";path=/";
  document.logincliente.grupo.value= completa(grupo,'0',4);
  document.logincliente.cota.value = completa(cota, '0',3); 
  document.logincliente.method = "POST";

  document.logincliente.action = "/scripts/websiac1.exe/entradireto";
  document.logincliente.target = "popcliente";

//  winPopup = window.open('/scripts/websiac1.exe/entradireto','popcliente','width=769,height=460,directories=0,location=0,menubar=1,resizable=0,scrollbars=1,status=0,toolbar=1,marginleft=0,margintop=0,left='+(((screen.width-766)/2)+-10)+',top='+(((screen.height-460)/2)+-30));
  winPopup = window.open('','popcliente','width=769,height=460,directories=0,location=0,menubar=1,resizable=0,scrollbars=1,status=0,toolbar=1,marginleft=0,margintop=0,left='+(((screen.width-766)/2)+-10)+',top='+(((screen.height-460)/2)+-30));
  document.logincliente.submit();
}

function popup_glossario(a) {
var winPopup = window.open(a, 'glossario', ',width=485,height=311,directories=0,location=0,menubar=0,resizable=0,scrollbars=0,status=0,toolbar=0,marginleft=0,margintop=0,left='+(((screen.width-485)/2)+-10)+',top='+(((screen.height-311)/2)+-30));
}
function popup_faq(item) {
var winPopup = window.open('popup/popup_faq.asp?resp='+item, 'glossario', ',width=485,height=311,directories=0,location=0,menubar=0,resizable=0,scrollbars=0,status=0,toolbar=0,marginleft=0,margintop=0,left='+(((screen.width-485)/2)+-10)+',top='+(((screen.height-311)/2)+-30));
}

function popup_composicao(param) {
winPopup = window.open('popup/popup_composicao.asp?'+param,'composicao','width=485,height=514,directories=0,location=0,menubar=0,resizable=0,scrollbars=0,status=0,toolbar=0,marginleft=0,margintop=0,left='+(((screen.width-485)/2)+-10)+',top='+(((screen.height-514)/2)+-30));
winPopup.focus();
}

/* pop-up */