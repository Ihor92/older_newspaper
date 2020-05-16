const car = document.getElementById('car');
let cloneCar = car.cloneNode(true);

const camera = document.getElementById('camera');
let cloneCamera = camera.cloneNode(true);

const phone = document.getElementById('phone');
let clonePhone = phone.cloneNode(true);

const typewriter = document.getElementById('typewriter');
let cloneTypewriter = typewriter.cloneNode(true);

const popup = document.getElementById('popup');
const modal = document.getElementById('modal');

car.onclick = function(event) {
  popup.append(cloneCar);
  showPopup();
}

camera.onclick = function(event) {
  popup.append(cloneCamera);
  showPopup();
}

phone.onclick = function(event) {
  popup.append(clonePhone);
  showPopup();
}

typewriter.onclick = function(event) {
  popup.append(cloneTypewriter);

  showPopup();
}

modal.onclick = function (event) {
  popup.style.display = 'none';
  modal.style.display = 'none';
}

function showPopup() {
  popup.style.display = 'block';
  modal.style.display = 'block';
}