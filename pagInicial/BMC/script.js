function toggleMenu() {
    const sideMenu = document.getElementById("sideMenu");
    sideMenu.classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", function () {
    const buttons = {
        botaoApresentacao: "/pagInicial/apresentacao/index.html",
        botaoBMC: "/pagInicial/BMC/index.html",
        botaoPrototipo: "/pagInicial/prototipo/index.html",
        botaoEscuderias: "/pagInicial/escuderias/index.html",
        botaoHistorico: "/pagInicial/historico/index.html",
        botaoProjetos: "/pagInicial/projetos/index.html",
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