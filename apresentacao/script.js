function toggleMenu() {
    const sideMenu = document.getElementById("sideMenu");
    sideMenu.classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", function () {
    const buttons = {
        botaoApresentacao: "/apresentacao/index.html",
        botaoBMC: "/BMC/index.html",
        botaoPrototipo: "/prototipo/index.html",
        botaoEscuderias: "/escuderias/index.html",
        botaoHistorico: "/historico/index.html",
        botaoProjetos: "/projetos/index.html",
        botaoInscricao: "https://senaimt.ind.br/para-voce"
    };

    Object.keys(buttons).forEach(id => {
        const button = document.getElementById(id);
        if (button) {
            button.addEventListener("click", function () {
                if (id === "botaoInscricao") {
                    window.open(buttons[id]);
                } else {
                    window.location.href = buttons[id];
                }
            });
        }
    });
});