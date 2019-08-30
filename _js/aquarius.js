 //document.write('<link rel="stylesheet" href="/scripts/aquarius.css" type="text/css">')


 function fab_onchange(obj)
 {
  window.navigate(window.location.pathname + "?Fabricante=" + obj.value);
 }
 
 function form_envia(frm)
 {
  if (frm.item[0].checked)
    frm.selecao.value = "0";
   else if (frm.item[1].checked)
          frm.selecao.value = "1";
         else if (frm.item[2].checked)
                frm.selecao.value = "2";
  frm.submit();
  return true;
 }

function miSobre_aq(imi){
	MM_swapImage('fmi'+imi,'','/images/menu/pix_musgo.gif',1);
	MM_swapImage('fmi'+(imi+1),'','/images/menu/pix_musgo.gif',1);
	MM_findObj('imi'+imi+((document.layers)?'l':'')).bgColor='#DEDEDE';
	MM_swapImage('bmi'+imi,'','/images/menu/blt_menuinterno_ovr.gif',1);
}
function miFora_aq(imi){
	MM_swapImage('bmi'+imi,'','/images/menu/blt_menuinterno.gif',1);
	MM_findObj('imi'+imi+((document.layers)?'l':'')).bgColor='#F5F5F5';
	MM_swapImage('fmi'+(imi+1),'','/images/menu/pix_cinza.gif',1);
	MM_swapImage('fmi'+imi,'','/images/menu/pix_cinza.gif',1);
}
function miCarga_aq(qim){
	if(document.layers){
		for(i=0;i<qim;++i){
			MM_findObj('imi'+i+'l').visibility='visible';
		}
	}
}

function mOvr(src,clrOver)
{
  if (!src.contains(event.fromElement))
    {
     src.style.cursor = 'hand';
     src.bgColor = clrOver;
   }
}

function mOut(src,clrIn)
{
  if (!src.contains(event.toElement))
    {
     src.style.cursor = 'default';
     src.bgColor = clrIn;
    }
}

function Voltar()
{
  if (history.length != 0)
    history.back(-1);
  else window.close();
  return 0;
}