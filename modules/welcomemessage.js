Hooks.once("init", function() {
    console.log("Initializing Kids on Bikes module");

    game.settings.register("kids-on-bikes-csb-en", "firstTimeStart", {
        name: "Force Welcome Message",
        hint: "If checked, the welcome message will appear in the chat the next time you log in.",
        scope: "client",
        config: true,
        default: false,
        type: Boolean
    });
});

Hooks.once("ready", function() {
    let buttonId = Date.now();
    let buttonId2 = Date.now() + 2;
    let welcomeMsg = '<h1>Welcome to the Kids on Bikes Module</h1>';
    let firstImportMsg = '<p style="font-family:IndieFlower;font-size: 15px;">Import the compendiums to start using the module</p><button id=' + buttonId2 + ' style="font-family:Dreadful;font-size: 30px;">Import Compendiums</button>';
    let updateMsg = '<p style="font-family:IndieFlower;font-size: 15px;">The module has been updated since your last use. Import the compendiums to get the latest version of the actor and item templates.</p><button id=' + buttonId2 + ' style="font-family:Dreadful;font-size: 30px;">Import Compendiums</button>';
    let tutorialReminder = '<p style="font-family:IndieFlower;font-size: 15px;">Remember: You can add a bonus or penalty to the roll by holding the Shift key when clicking on a Skill.</p><button id=' + buttonId + ' style="font-family:Dreadful;font-size: 30px;">Go to Tutorial</button>';

    let forceWelcome = game.settings.get("kids-on-bikes-csb-en", "firstTimeStart");
    let forceMessage;
    console.log(forceMessage);
    if (forceWelcome == true) {
        forceMessage = true;
    }
    let currentVersion = game.modules.get("kids-on-bikes-csb-en").version;
    let userIsGM = game.user.isGM;
    if (userIsGM) {
        if (!game.user.getFlag("kids-on-bikes-csb-en", "welcomeMessage") || forceMessage == true) {
            let msg = welcomeMsg + firstImportMsg + tutorialReminder;
            ChatMessage.create({
                speaker: {alias: "Kids on Bikes"},
                content: msg,
                whisper: ChatMessage.getWhisperRecipients(game.user.name)
            }).then(() => {
                setTimeout(() => {
                    function openInNewTab(url) {
                        const win = window.open(url, '_blank');
                        win.focus();
                    }
                    const button = document.getElementById(buttonId);
                    if (button) {
                        button.addEventListener("click", function () {
                            openInNewTab('https://github.com/pedrobaringo/kids-on-bikes-csb-en');
                        });
                    }
                    const button2 = document.getElementById(buttonId2);
                    if (button2) {
                        button2.addEventListener("click", function () {
                            let collection2 = game.packs.get("kids-on-bikes-csb-en.actortemplates");
                            let folderIdent2 = '';
                            if (game.folders.getName("Actor Templates")) {
                                folderIdent2 = game.folders.getName("Actor Templates").id;
                            }
                            let docs2 = collection2.importAll({folderId: folderIdent2, folderName: "Actor Templates", keepId: true});
                            game.user.setFlag("kids-on-bikes-csb-en", "welcomeMessage", true);
                            game.user.setFlag("kids-on-bikes-csb-en", "lastVersion", game.modules.get("kids-on-bikes-csb-en").version);
                        });
                    }
                }, 100);
            });
            game.settings.set("kids-on-bikes-csb-en", "firstTimeStart", false);
        } else if (currentVersion != game.user.getFlag("kids-on-bikes-csb-en", "lastVersion")) {
            let msg = welcomeMsg + updateMsg + tutorialReminder;
            ChatMessage.create({
                speaker: {alias: "Kids on Bikes"},
                content: msg,
                whisper: ChatMessage.getWhisperRecipients(game.user.name)
            }).then(() => {
                setTimeout(() => {
                    function openInNewTab(url) {
                        const win = window.open(url, '_blank');
                        win.focus();
                    }
                    const button = document.getElementById(buttonId);
                    if (button) {
                        button.addEventListener("click", function () {
                            openInNewTab('https://github.com/pedrobaringo/kids-on-bikes-csb-en');
                        });
                    }
                    const button2 = document.getElementById(buttonId2);
                    if (button2) {
                        button2.addEventListener("click", function () {
                            let collection2 = game.packs.get("kids-on-bikes-csb-en.actortemplates");
                            let folderIdent2 = '';
                            if (game.folders.getName("Actor Templates")) {
                                folderIdent2 = game.folders.getName("Actor Templates").id;
                            }
                            let docs2 = collection2.importAll({folderId: folderIdent2, folderName: "Actor Templates", keepId: true});
                            game.user.setFlag("kids-on-bikes-csb-en", "welcomeMessage", true);
                            game.user.setFlag("kids-on-bikes-csb-en", "lastVersion", game.modules.get("kids-on-bikes-csb-en").version);
                        });
                    }
                }, 500);
            });
        }
    } else if (!game.user.getFlag("kids-on-bikes-csb-en", "welcomeMessage") || forceMessage == true) {
        let msg = welcomeMsg + tutorialReminder;
        ChatMessage.create({
            speaker: {alias: "Kids on Bikes"},
            content: msg,
            whisper: ChatMessage.getWhisperRecipients(game.user.name)
        }).then(() => {
            setTimeout(() => {
                function openInNewTab(url) {
                    const win = window.open(url, '_blank');
                    win.focus();
                }
                const button = document.getElementById(buttonId);
                if (button) {
                    button.addEventListener("click", function () {
                        openInNewTab('https://github.com/pedrobaringo/kids-on-bikes-csb-en');
                    });
                }
            }, 100);
        });
        game.user.setFlag("kids-on-bikes-csb-en", "welcomeMessage", true);
        game.settings.set("kids-on-bikes-csb-en", "firstTimeStart", false);
    }
});
