const productName = 'Wireless  Headphone'
const productPrice = 199.99

const element = document.getElementById("myBtn");
element.addEventListener("click", function() {
  alert(`${productName} has been added to the cart!`); 
});

document.getElementById("product-name").innerHTML = productName
document.getElementById("product-price").innerHTML = '$'+productPrice
console.log(productName + productPrice)