const imageArea = document.getElementById('imageArea');
const images = ['./image/jinbeezame.webp', './image/kaeruankou.webp', './image/manta.webp', './image/nimo.webp'];

const imageNo = Math.floor(Math.random() * images.length)
imageArea.src = images[imageNo];


