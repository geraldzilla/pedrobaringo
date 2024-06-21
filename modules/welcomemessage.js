Hooks.once("init", function() {
    console.log("Initializing Kids on Bikes module")

    game.settings.register("kids-on-bikes-csb-es", "firstTimeStart", {
       name: "Forzar mensaje de Bienvenida",
        hint: "Si marcas esta casilla te aparecerá el mensaje de bienvenida en el chat la próxima vez que entres.",
        scope: "client",
        config: true,
        default: false,
        type: Boolean
    })
})

Hooks.once("ready", function() {
	let buttonId=Date.now();
	let buttonId2=Date.now()+2;
	let mensbienv='<h1>Bienvenido al módulo de Kids on Bikes</h1>';
	let mensimpfirst='<p style= "font-family:IndieFlower;font-size: 15px;">Importa los compendios para empezar a usar el módulo</p><button id='+buttonId2+' style= "font-family:Dreadful;font-size: 30px;">Importa los Compendios</button>';
	let mensimpact='<p style= "font-family:IndieFlower;font-size: 15px;">Se ha actualizado el módulo desde la última vez que lo usaste. Importa los compendios para tener la última versión de las Templates de actores y objetos.</p><button id='+buttonId2+' style= "font-family:Dreadful;font-size: 30px;">Importa los Compendios</button>'
	let mensrecordtut='<p style= "font-family:IndieFlower;font-size: 15px;">Recuerda: Puedes añadir un bonificador o penalizador a la tirada si pulsas la tecla Mayus al hacer click en la Habilidad.</p><button id='+buttonId+' style= "font-family:Dreadful;font-size: 30px;">Ve al Tutorial</button>';
	
	let forzarbienvenida=game.settings.get("kids-on-bikes-csb-es", "firstTimeStart");
	let forzarmensaje;
	console.log(forzarmensaje);
	if (forzarbienvenida==true) {
		forzarmensaje=true;
	}
	let versactual=game.modules.get("kids-on-bikes-csb-es").version;
	let userisGM=game.user.isGM;
	if (userisGM) {
		if(!game.user.getFlag("kids-on-bikes-csb-es", "welcomeMessage") || forzarmensaje==true) {
			let msg=mensbienv+mensimpfirst+mensrecordtut;
			ChatMessage.create({
        		speaker: {alias:"Kids on Bikes"},
        		content: msg,
				whisper : ChatMessage.getWhisperRecipients(game.user.name)
			}).then(() => {
				setTimeout(() => {
				function openInNewTab(url) {
					const win = window.open(url, '_blank');
					win.focus();
				}
				const button = document.getElementById(buttonId);
				if (button) {
					button.addEventListener("click",function () {
						openInNewTab('https://github.com/pedrobaringo/kids-on-bikes-csb-es')
					});
				}
				const button2 = document.getElementById(buttonId2);
				if (button2) {
					button2.addEventListener("click",function () {
						let collection2 = game.packs.get("kids-on-bikes-csb-es.actorestemplates");
						let folderident2=''
						if (game.folders.getName("Templates Actores")) {
							folderident2=game.folders.getName("Templates Actores").id;
						}
						let docs2 =  collection2.importAll({folderId: folderident2, folderName: "Templates Actores", keepId: true});
						game.user.setFlag("kids-on-bikes-csb-es", "welcomeMessage", true);
						game.user.setFlag("kids-on-bikes-csb-es", "lastVersion", game.modules.get("kids-on-bikes-csb-es").version);
					});
				}
				}, 100);
			});
			game.settings.set("kids-on-bikes-csb-es", "firstTimeStart", false);
		} else if (versactual!=game.user.getFlag("kids-on-bikes-csb-es", "lastVersion")) {
			let msg=mensbienv+mensimpact+mensrecordtut;
			ChatMessage.create({
					speaker: {alias:"Kids on Bikes"},
					content: msg,
			   whisper : ChatMessage.getWhisperRecipients(game.user.name)
			}).then(() => {
				setTimeout(() => {
				function openInNewTab(url) {
					const win = window.open(url, '_blank');
					win.focus();
				}
				const button = document.getElementById(buttonId);
				if (button) {
					button.addEventListener("click",function () {
						openInNewTab('https://github.com/pedrobaringo/kids-on-bikes-csb-es')
					});
				}
				const button2 = document.getElementById(buttonId2);
				if (button2) {
					button2.addEventListener("click",function () {
						let collection2 = game.packs.get("kids-on-bikes-csb-es.actorestemplates");
						let folderident2=''
						if (game.folders.getName("Templates Actores")) {
							folderident2=game.folders.getName("Templates Actores").id;
						}
						let docs2 =  collection2.importAll({folderId: folderident2, folderName: "Templates Actores", keepId: true});
						game.user.setFlag("kids-on-bikes-csb-es", "welcomeMessage", true);
						game.user.setFlag("kids-on-bikes-csb-es", "lastVersion", game.modules.get("kids-on-bikes-csb-es").version);
					});
				}
				}, 500);
			});
		}
	} else if (!game.user.getFlag("kids-on-bikes-csb-es", "welcomeMessage") || forzarmensaje==true) {
		let msg = mensbienv+mensrecordtut;
		ChatMessage.create({
        		speaker: {alias:"Kids on Bikes"},
        		content: msg,
				whisper : ChatMessage.getWhisperRecipients(game.user.name)
		}).then(() => {
			setTimeout(() => {
			function openInNewTab(url) {
				const win = window.open(url, '_blank');
				win.focus();
			}
			const button = document.getElementById(buttonId);
			if (button) {
				button.addEventListener("click",function () {
					openInNewTab('https://github.com/pedrobaringo/kids-on-bikes-csb-es');
				});
			}
			}, 100);
		});
		game.user.setFlag("kids-on-bikes-csb-es", "welcomeMessage", true);
		game.settings.set("kids-on-bikes-csb-es", "firstTimeStart", false);
	}
})