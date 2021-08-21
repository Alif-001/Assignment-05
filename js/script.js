// memory

const memoryCost = document.getElementById("memory-cost");

document.getElementById("memory-8gb").addEventListener("click", function () {
  memoryCost.innerText = "0";
  updateTotal();
});

document.getElementById("memory-16gb").addEventListener("click", function () {
  memoryCost.innerText = "180";
  updateTotal();
});

// storage

const storageCost = document.getElementById("storage-cost");

document.getElementById("storage-256gb").addEventListener("click", function () {
  storageCost.innerText = "0";
  updateTotal();
});

document.getElementById("storage-512gb").addEventListener("click", function () {
  storageCost.innerText = "100";
  updateTotal();
});

document.getElementById("storage-1tb").addEventListener("click", function () {
  storageCost.innerText = "180";
  updateTotal();
});

// delivery

const deliveryCost = document.getElementById("delivery-cost");

document.getElementById("free-delivery").addEventListener("click", function () {
  deliveryCost.innerText = "0";
  updateTotal();
});

document.getElementById("paid-delivery").addEventListener("click", function () {
  deliveryCost.innerText = "20";
  updateTotal();
});

document.getElementById("promo-btn").addEventListener("click", function () {
  discount();
});

const total = document.getElementById("total-price");

const macBookPrice = document.getElementById("normal-price");

const discountPriceText = document.getElementById("discount-price");

// all price total

function updateTotal() {
  const bestPrice = Number(macBookPrice.innerText);
  const extraMemoryCost = Number(memoryCost.innerText);
  const extraStorageCost = Number(storageCost.innerText);
  const extraDeliveryCost = Number(deliveryCost.innerText);
  const grandTotal =
    bestPrice + extraMemoryCost + extraStorageCost + extraDeliveryCost;
  total.innerText = grandTotal;
  discountPriceText.innerText = total.innerText;
}

const promoInput = document.getElementById("promo-input");

// discount

function discount() {
  const discountPrice = Number(discountPriceText.innerText);
  console.log(discountPrice);
  promoCode = promoInput.value;
  if (promoCode == "stevekaku") {
    discountPriceText.innerText = parseFloat(
      (total.innerText / 100) * 80
    ).toFixed(1);
  } else {
    alert("please enter right code");
  }
  promoInput.value = "";
}
