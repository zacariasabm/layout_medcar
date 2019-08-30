function menuResponsivo() {

	var menuFechado = document.getElementById("btFechado");
	var menuAberto = document.getElementById("btAberto");
	var opcao = document.getElementById("opcoes");
	



	if (menuFechado.style.display == 'block' || menuFechado.style.display == '') {
		menuFechado.style.display = "none";
		menuAberto.style.display = "block";
		opcao.style.display = "block";
	} else {
		menuFechado.style.display = "block";
	}

	if (menuAberto.style.display == 'none') {
		
	}

	if (menuFechado.style.display == 'block'){
		opcao.style.display = "none";
		btAberto.style.display = "none";
	}

	
}