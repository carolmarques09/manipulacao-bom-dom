const width = window.innerWidth;
const height = window.innerHeight;

window.innerWidth = prompt("Qual a largura da janela? ");
window.innerHeight = prompt("Qual a altura da janela? ");

console.log("Largura da janela:", window.innerWidth);
console.log("Altura da janela: ", window.innerHeight);

const name = "renee";
localStorage.setItem('name', renee);

console.log(localStorage.getItem('name'));

function estilizarTexto() {
    const texto = document.getElementById("meuDiv");

    texto.style.color = "pink";
    texto.style.fontSize = "25px";
    texto.style.fontWeight = "bold";
    texto.style.backgroundColor = "yellow";
    texto.style.padding = "10px";
};

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        console.log('Tecla Enter foi pressionada!');
    }
});