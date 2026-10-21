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

function init() {
    render();
}

function render() {
    for (let i = 1; i < 13; i++) {
        cardWrapperRef.innerHTML += getHTMLForButton(i);
    }
}

function toggleClass(number) {
    const cardPRef = document.getElementById(`card${number}P`);
    const cardImgRef = document.getElementById(`card${number}Img`);
    cardPRef.classList.toggle("display-none");
    cardImgRef.classList.toggle("display-none");
}

function getHTMLForButton(i) {
    return `
        <button onclick="toggleClass(${i})">
                <div class="card">
                    <p id="card${i}P" class="card-p">${i}</p>
                    <img
                        id="card${i}Img"
                        src="./assets/img/${i}.jpg"
                        alt=""
                        class="card-img display-none"
                    />
                </div>
            </button>
            `;
}
