

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

let currentImageIndex = 0;


function init() {
    render();
}


function render() {
    cardWrapperRef.innerHTML = getNotesHtml();
}


function getNotesHtml() {
    let content = "";

    for (let i = 0; i < carImages.length; i++) {
        content += `
            <img
                class="puntoEvo"
                onclick="openDialogRef(${i})"
                src="./assets/img/${carImages[i]}"
                alt="Fiat Punto Evo Tuning Bild ${i + 1}"
            >
        `;
    }


    return content;
}


// function openDialogRef(i) {
//     currentImageIndex = i;

//     dialogImgRef.src = `./assets/img/${carImages[currentImageIndex]}`;
//     dialogImgRef.alt = `Fiat Punto Evo Tuning Bild ${currentImageIndex + 1}`;

//     dialogRef.showModal();
// }

function openDialogRef(i) {
    currentImageIndex = i;

    updateDialogImage();

    dialogRef.showModal();
}


function closeDialogRef() {
    dialogRef.close();
}


function nextImage() {
    currentImageIndex++;

    if (currentImageIndex >= carImages.length) {
        currentImageIndex = 0;
    }

    updateDialogImage();
}


function previousImage() {
    currentImageIndex--;

    if (currentImageIndex < 0) {
        currentImageIndex = carImages.length - 1;
    }

    updateDialogImage();
}


function updateDialogImage() {
    dialogImgRef.src = `./assets/img/${carImages[currentImageIndex]}`;
    dialogImgRef.alt = `Fiat Punto Evo Tuning Bild ${currentImageIndex + 1}`;

    nameImgRef.textContent = carImages[currentImageIndex]
        .replace(".jpg", "");
}
