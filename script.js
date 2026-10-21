
const images = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg",
    "10.jpg",
    "11.jpg",
    "12.jpg",
];

const cardWrapperRef = document.getElementById("cardWrapper");
const dialogRef = document.getElementById("imageDialog");
const dialogImgRef = document.getElementById("dialogImg");

let currentImageIndex = 0;

function init() {
    render();
}

function render() {
    for (let i = 0; i < images.length; i++) {
        cardWrapperRef.innerHTML += getHTMLForButton(i);
    }
}

function openDialogRef(i) {
    currentImageIndex = i;

    dialogImgRef.src = `./assets/img/${images[i]}`;

    dialogRef.showModal();
}

function closeDialogRef() {
    dialogRef.close();
}

function previousImageRef() {
    currentImageIndex--;

    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    }

    dialogImgRef.src =
        `./assets/img/${images[currentImageIndex]}`;
}

function nextImageRef() {
    currentImageIndex++;

    if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }

    dialogImgRef.src =
        `./assets/img/${images[currentImageIndex]}`;
}

function getHTMLForButton(i) {
    return `
        <button onclick="openDialogRef(${i})">
            <div class="card">
                <img
                    src="./assets/img/${images[i]}"
                    alt="Fiat Punto Evo Tuning ${i + 1}"
                    class="card-img punto-look"
                >
            </div>
        </button>
    `;
}
