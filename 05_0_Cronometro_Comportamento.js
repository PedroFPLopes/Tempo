

/* - - - - - - - - - - - - CRIA E ATRIBUI - VARIAVEIS  - - - - - - - - - - - - */
let s_3 = "-1";
let m_3 = "00";
let ARRANCA_3 = false;


/* - - - - - - - - - - - - FUNCOES  - - - - - - - - - - - - */
	//   BUSCA O TEMPO
function buscaTEMPO()
{
  const TEMPO_AGORA = new Date();
  let h = TEMPO_AGORA.getHours();
  let m = TEMPO_AGORA.getMinutes(); m = TEMPO_VERIFICA(m);
  let s = TEMPO_AGORA.getSeconds(); s = TEMPO_VERIFICA(s);
  document.getElementById('txtRelogio').innerHTML =  h + ":" + m + ":" + s;
  if (ARRANCA_3 == true){ buscaTEMPO_3(); }
  setTimeout(buscaTEMPO, 1000);
}
	// add zero in front of numbers < 10
function TEMPO_VERIFICA(i) { if (i < 10) {i = "0" + i}; return i; }





/* - - - CRONOMETRO  - - - - - - - - - - - - */
function arranca_TEMPO_3()  { ARRANCA_3 = true;  }
function pausa_TEMPO_3()	{ ARRANCA_3 = true;  }
function continua_TEMPO_3()	{ ARRANCA_3 = true;  }
function marca_TEMPO_3()    { ARRANCA_3 = false; }
function termina_TEMPO_3()  { ARRANCA_3 = false; }
function reinicia_TEMPO_3() { ARRANCA_3 = false;
							document.getElementById('txtRelogio_3').innerHTML =  "0" + ":" + "00" + ":" + "00";
							}
function buscaTEMPO_3()
{
	s_3++;
	  if (s_3=="60"){ s_3 = "0"; m_3++; } 
	  document.getElementById('txtRelogio_3').innerHTML =  "0" + ":" + m_3 + ":" + s_3;
}



/* - - - TEMPORIZADOR - - - - - - - - - - - - */
function arranca_TEMPORIZADOR()
{
	var x = document.getElementById("appt").value;
	document.getElementById("txtTemporizador").innerHTML = x;
}



