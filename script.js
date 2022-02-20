let counter = 0;
const localStorageValue = Number(localStorage.getItem("counter-key"));
if (localStorageValue) {
  counter = localStorageValue;
} else {
  counter = 0;
}

updateValue();

if(counter>=100){
  document.getElementById('counter-value').style.fontSize = '18px';
}

function updateValue() {
  const counterSpan = document.querySelector(".counter-value");
  counterSpan.innerText = counter;
}

const counterSpan = document.querySelector(".counter-value");
counterSpan.innerText = counter;

function AddToBasket() {
  counter = counter + 1;
  localStorage.setItem("counter-key", counter);
  updateValue();
}

function Clean(){
  counter = 0;
  localStorage.setItem("counter-key", counter);
  updateValue();
}
