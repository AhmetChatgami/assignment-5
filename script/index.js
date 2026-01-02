

function getElement(id) {
  const element = document.getElementById(id);
  return element;
}


function copyThis(text, btn) {
  navigator.clipboard.writeText(text).then(() => {
    const oldLabel = btn.innerText;
    alert("Number is Copied!");
  });
}


const callbtns = document.getElementsByClassName("call-btn");
console.log(callbtns);

for (let callButton of callbtns) {
  callButton.addEventListener("click", function () {
    const cardTitle = callButton.parentNode.parentNode.childNodes[1].innerText;
   

    const cardNum = callButton.parentNode.parentNode.childNodes[5].innerText;

    const cartContainer = getElement("cart-container");
    const newCart = document.createElement("div");
    const now = new Date();
    const time = now.toLocaleTimeString();
    newCart.innerHTML = `
      <div class="bg-gray-50 p-4 rounded">
      <div class=" ">
              <h2 class="text-xl font-semibold">${cardTitle}</h2>
              <p>${cardNum}</p> <p class="text-sm text-gray-500">${time}</p>
              </div>
            </div>
    `;

    console.log(time);

    cartContainer.append(newCart);
    const coins = getElement("coins").innerText;
    const totalCoins = Number(coins) - 20;
    getElement("coins").innerText = totalCoins;
  });
}

document.getElementById("call-btn").addEventListener("click", function () {
  const cartContainer = getElement("cart-container");
  console.log(cartContainer);
  cartContainer.innerHTML = "";
  getElement("coins").innerText = 100;
});

const callButtons = document.getElementsByClassName("call-btn");
for (const callButton of callButtons) {
  callButton.addEventListener("click", function (e) {
    const currentElement = e.target.parentNode;
    const title = currentElement.parentNode.children[0].textContent;
    const number = currentElement.parentNode.children[2].textContent;
    console.log(title, number);
    alert(`Calling to: ${title} ${number}`);
  });
}


const copyButtons = document.getElementsByClassName("copy-btn");

for (const copyBtn of copyButtons) {
  copyBtn.addEventListener("click", function () {
   
    const copyCountElement = getElement("copy-count");
    const currentCount = parseInt(copyCountElement.innerText);

    const newCount = currentCount + 1;

    copyCountElement.innerText = newCount;

    
  });
}

const heartButton = document.getElementsByClassName("heart-btn");

for (const heartBtn of heartButton) {
  heartBtn.addEventListener("click", function () {
    const heartCount = document.getElementById("heart-counts");

    if (heartCount) {
      let currentCount = parseInt(heartCount.innerText);
      heartCount.innerText = currentCount + 1;
    }
  });
}
