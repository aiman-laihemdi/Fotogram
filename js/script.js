
let carImages = [
    "Alufelgen.jpg",
    "Sportfahrwerk.jpg",
    "Frontstoßstange.jpg",
    "Seitenschweller.jpg",
    "Heckdiffusor.jpg",
    "Heckspoiler.jpg",
    "Sportlicher Kühlergrill.jpg",
    "LED-Scheinwerfer.jpg",
    "Sportauspuff.jpg",
    "Individuelle Lackierung.jpg",
    "Sportlicher Innenraum.jpg",
    "Abarth-Bodykit.jpg"
];

const cardWrapperRef = document.getElementById("cardWrapper");
const dialogRef = document.getElementById("dialogRef");
const dialogImgRef = document.getElementById("dialogImg");
const nameImgRef = document.getElementById("nameImg");
const imageCounter = document.querySelector("#imageCounter");


let currentImageIndex = 0;


// Initialisiert die Bildergalerie
function init() {
    render();
}


// Rendert die Bilder
function render() {
    cardWrapperRef.innerHTML = generateHtml();
}


function generateHtml() {
    let content = "";

    for (let i = 0; i < carImages.length; i++) {
        content += getNotesHtml(i);
    }

    return content;
}


// Öffnet den Dialog mit dem ausgewählten Bild
function openDialogRef(index) {
    currentImageIndex = index;

    updateDialogImage();

    dialogRef.showModal();
}


// Schließt den Dialog
function closeDialogRef() {
    dialogRef.close();
}


// Wechselt zum nächsten Bild
function nextImage() {
    currentImageIndex++;

    if (currentImageIndex >= carImages.length) {
        currentImageIndex = 0;
    }

    updateDialogImage();
}


function updateCounter() {
    imageCounter.textContent = `${currentImageIndex + 1} / ${carImages.length}`;
}


// Wechselt zum vorherigen Bild
function previousImage() {
    currentImageIndex--;

    if (currentImageIndex < 0) {
        currentImageIndex = carImages.length - 1;
    }

    updateDialogImage();
}


// Aktualisiert Bild und Titel
function updateDialogImage() {
    const imageName = carImages[currentImageIndex].replace(".jpg", "");

    dialogImgRef.src = `./assets/img/${carImages[currentImageIndex]}`;
    dialogImgRef.alt = `Fiat Punto Evo Tuning: ${imageName}`;

    nameImgRef.textContent = imageName;

    updateCounter();
}


function getNotesHtml(i) {
    const imageName = carImages[i].replace(".jpg", "");

    return `
        <button
            type="button"
            class="gallery-button"
            onclick="openDialogRef(${i})"
            aria-label="Bild öffnen: ${imageName}"
        >
            <img
                class="puntoEvo"
                src="./assets/img/${carImages[i]}"
                alt="${imageName}"
            >
        </button>
    `;
}
