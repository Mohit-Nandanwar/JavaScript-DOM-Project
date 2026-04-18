let cart = [];
let totalAmount = 0;

const cartList = document.getElementById("cart-list");
const totalAmountEl = document.getElementById("total-amount");
const addButtons = document.querySelectorAll(".add-btn");

addButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const name = btn.getAttribute("data-name");
    const price = parseInt(btn.getAttribute("data-price"));

    cart.push({ name, price });
    totalAmount += price;

    updateCart();
  });
});

function updateCart() {
  cartList.innerHTML = "";
  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - ₹${item.price}`;
    cartList.appendChild(li);
  });
  totalAmountEl.textContent = totalAmount;
}

document.getElementById("bookingForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Booking Successful!");
});
