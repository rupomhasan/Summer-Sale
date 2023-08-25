let count = 0;
let total = 0;
let grandAmount = 0;
// apply btn intially disabled;
document.getElementById("apply").disabled = true;

// Purchese btn intially disabled;
document.getElementById("purchase").disabled = true;

// main function
function getProductName(event) {
  const product = event.childNodes[3].childNodes[3].innerText;
  setProductName(product);

  const productPrice =
    event.childNodes[3].childNodes[5].innerText.split(" ")[0];
  document.getElementById("apply").disabled = true;

  setProductPrice(productPrice, "total");
}

// set name funciton
function setProductName(name) {
  const elementDiv = document.getElementById("productName");
  const p = document.createElement("p");
  elementDiv.appendChild(p);
  count = elementDiv.childElementCount;
  p.innerText = count + " . " + name;
}

// set product totalprice && appy for discount Price
function setProductPrice(productPrice, setId) {
  const newPrice = document.getElementById(setId);
  total = parseFloat(total) + parseFloat(productPrice);
  newPrice.innerText = total.toFixed(2);

  // get   discount
  if (total >= 200) {
    document.getElementById("apply").disabled = false;
  } else {
    document.getElementById("apply").disabled = true;
  }

  if (total >= 0) {
    document.getElementById("purchase").disabled = false;
  } else {
    document.getElementById("purchase").disabled = true;
  }

  document
    .getElementById("apply")
    .addEventListener("click", function setDiscountPrice() {
      const couponField = document.getElementById("coupon");
      const discountId = document.getElementById("discount");
      const grandtotal = document.getElementById("grandAmount");
      discountPrice = 0.2 * total;
      if (couponField.value === "SELL200") {
        discountId.innerText = discountPrice.toFixed(2);
        grandtotal.innerText = total - discountPrice.toFixed(2);
      } else {
        discountId.innerText = 0;
        grandtotal.innerText = total.toFixed(2);
      }
    });
}

function resetPage() {
  window.location.href = window.location.href; // Reload the page
}