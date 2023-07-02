const btnEmpezar = document.getElementById("btnEmpezar");
const btnDescargar = document.getElementById("btnDescargar");
const canvas = document.getElementById("canvas");
const tituloInput = document.getElementById("tituloInput");
const nombreInput = document.getElementById("nombreInput");
const reconocimientoInput = document.getElementById("reconocimientoInput");
const felicitacionesInput = document.getElementById("felicitacionesInput");
const firmaInput=document.getElementById ("firmaInput");
const fuenteSelect = document.getElementById("fuenteSelect");

drawCertificate();

btnEmpezar.addEventListener("click", function() {
    const titulo = tituloInput.value;
    const nombre = nombreInput.value;
    const reconocimiento = reconocimientoInput.value;
    const felicitaciones = felicitacionesInput.value;
    const firma = firmaInput.value;
    drawCertificate(titulo, nombre, reconocimiento, felicitaciones, firma);
});

function drawCertificate(titulo = "", nombre = "", reconocimiento = "", felicitaciones = "", firma = "") {
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const fondo = new Image();
    fondo.src = "./images/fondo.jpg";
    fondo.onload = function() {
        ctx.drawImage(fondo, 0, 0, canvas.width, canvas.height);
        ctx.font = `bold 40px ${fuenteSelect.value}`;
        ctx.fillStyle = "black";
        ctx.textAlign = "center";
        ctx.fillText(titulo, canvas.width / 2, 130);
        ctx.fillText(nombre, canvas.width / 2, 190);
        ctx.fillText("____________", canvas.width / 2, 220);
        ctx.fillText(felicitaciones, canvas.width / 2, 310);
        ctx.fillText(reconocimiento, canvas.width / 2, 370);
        ctx.fillText(firma, canvas.width / 2, 440);
    };
}

btnDescargar.addEventListener("click", function() {
    const link = document.createElement("a");
    link.download = "certificado.jpg";
    link.href = canvas.toDataURL("image/jpeg");
    link.click();
});