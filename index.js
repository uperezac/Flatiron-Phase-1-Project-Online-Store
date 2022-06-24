//  Cart
let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");
// Open Cart
cartIcon.onclick = () => {
  cart.classList.add("active");
};
// Close Cart
closeCart.onclick = () => {
  cart.classList.remove("active");
};

// Cart Working JS
if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

// Making Function
function ready() {
  // Reomve Items From Cart
  var reomveCartButtons = document.getElementsByClassName("cart-remove");
  console.log(reomveCartButtons);
  for (var i = 0; i < reomveCartButtons.length; i++) {
    var button = reomveCartButtons[i];
    button.addEventListener("click", removeCartItem);
  }
  // Quantity Changes
  var quantityInputs = document.getElementsByClassName("cart-quantity");
  for (var i = 0; i < quantityInputs.length; i++) {
    var input = quantityInputs[i];
    input.addEventListener("change", quantityChanged);
  }
  // Add To Cart
  var addCart = document.getElementsByClassName("add-cart");
  for (var i = 0; i < addCart.length; i++) {
    var button = addCart[i];
    button.addEventListener("click", addCartClicked);
  }
  // Buy Button Work
  document
    .getElementsByClassName("btn-buy")[0]
    .addEventListener("click", buyButtonClicked);
}
// Buy Button
function buyButtonClicked() {
  alert("Your Order is placed");
  var cartContent = document.getElementsByClassName("cart-content")[0];
  while (cartContent.hasChildNodes()) {
    cartContent.removeChild(cartContent.firstChild);
  }
  updatetotal();
}

// Reomve Items From Cart
function removeCartItem(event) {
  var buttonClicked = event.target;
  buttonClicked.parentElement.remove();
  updatetotal();
}
// Quantity Changes
function quantityChanged(event) {
  var input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updatetotal();
}
// Add To cart
function addCartClicked(event) {
  var button = event.target;
  var shopProducts = button.parentElement;
  var title = shopProducts.getElementsByClassName("product-title")[0].innerText;
  var price = shopProducts.getElementsByClassName("price")[0].innerText;
  var productImg = shopProducts.getElementsByClassName("product-img")[0].src;
  addProductToCart(title, price, productImg);
  updatetotal();
}
function addProductToCart(title, price, productImg) {
  var cartShopBox = document.createElement("div");
  cartShopBox.classList.add("cart-box");
  var cartItems = document.getElementsByClassName("cart-content")[0];
  var cartItemsNames = cartItems.getElementsByClassName("cart-product-title");
  for (var i = 0; i < cartItemsNames.length; i++) {
    if (cartItemsNames[i].innerText == title) {
      alert("You have already add this item to cart");
      return;
    }
  }
  var cartBoxContent = `
                        <img src="${productImg}" alt="" class="cart-img">
                        <div class="detail-box">
                            <div class="cart-product-title">${title}</div>
                            <div class="cart-price">${price}</div>
                            <input type="number" value="1" class="cart-quantity" id="cart-numbers">
                        </div>
                        <!-- Remove Cart -->
                        <i class='bx bxs-trash-alt cart-remove' ></i>`;
  cartShopBox.innerHTML = cartBoxContent;
  cartItems.append(cartShopBox);
  cartShopBox
    .getElementsByClassName("cart-remove")[0]
    .addEventListener("click", removeCartItem);
  cartShopBox
    .getElementsByClassName("cart-quantity")[0]
    .addEventListener("change", quantityChanged);
}

// Update Total
function updatetotal() {
  var cartContent = document.getElementsByClassName("cart-content")[0];
  var cartBoxes = cartContent.getElementsByClassName("cart-box");
  var total = 0;
  for (var i = 0; i < cartBoxes.length; i++) {
    var cartBox = cartBoxes[i];
    var priceElement = cartBox.getElementsByClassName("cart-price")[0];
    var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
    var price = parseFloat(priceElement.innerText.replace("$", ""));
    var quantity = quantityElement.value;
    total = total + price * quantity;
  }
  // If price Contain some Cents Value
  total = Math.round(total * 100) / 100;

  document.getElementsByClassName("total-price")[0].innerText = "$" + total;
}

//Fetching shirts obj 1
fetch('http://localhost:3000/Men-Shirts/1')
.then(res => res.json())
.then(data => displayShirt1(data))
function  displayShirt1(shirts) {
  const image = document.querySelector('#image-shirt-1')
  const name = document.querySelector('#name-shirt-1')
  const price = document.querySelector('#price-shirt-1')
  const inventory = document.querySelector('#inventory-shirt-1')
  
  image.src = shirts.image
  name.textContent = shirts.name
  price.textContent = '$' + shirts.price
  inventory.textContent = shirts.inventory + ' Left'
}

//Fetching shirts obj 2
fetch('http://localhost:3000/Men-Shirts/2')
.then(res => res.json())
.then(data => displayShirt2(data))
function  displayShirt2(shirts) {
  const image = document.querySelector('#image-shirt-2')
  const name = document.querySelector('#name-shirt-2')
  const price = document.querySelector('#price-shirt-2')
  const inventory = document.querySelector('#inventory-shirt-2')
  
  image.src = shirts.image
  name.textContent = shirts.name
  price.textContent = '$' + shirts.price
  inventory.textContent = shirts.inventory + ' Left'
}

//Fetching shirts obj 3
fetch('http://localhost:3000/Men-Shirts/3')
.then(res => res.json())
.then(data => displayShirt3(data))
function  displayShirt3(shirts) {
  const image = document.querySelector('#image-shirt-3')
  const name = document.querySelector('#name-shirt-3')
  const price = document.querySelector('#price-shirt-3')
  const inventory = document.querySelector('#inventory-shirt-3')
  
  image.src = shirts.image
  name.textContent = shirts.name
  price.textContent = '$' + shirts.price
  inventory.textContent = shirts.inventory + ' Left'
}

//Fetching shirts obj 4
fetch('http://localhost:3000/Men-Shirts/4')
.then(res => res.json())
.then(data => displayShirt4(data))
function  displayShirt4(shirts) {
  const image = document.querySelector('#image-shirt-4')
  const name = document.querySelector('#name-shirt-4')
  const price = document.querySelector('#price-shirt-4')
  const inventory = document.querySelector('#inventory-shirt-4')
  
  image.src = shirts.image
  name.textContent = shirts.name
  price.textContent = '$' + shirts.price
  inventory.textContent = shirts.inventory + ' Left'
}

//Fetching shirts obj 5
fetch('http://localhost:3000/Men-Shirts/5')
.then(res => res.json())
.then(data => displayShirt5(data))
function  displayShirt5(shirts) {
  const image = document.querySelector('#image-shirt-5')
  const name = document.querySelector('#name-shirt-5')
  const price = document.querySelector('#price-shirt-5')
  const inventory = document.querySelector('#inventory-shirt-5')
  
  image.src = shirts.image
  name.textContent = shirts.name
  price.textContent = '$' + shirts.price
  inventory.textContent = shirts.inventory + ' Left'
}

//Fetching shirts obj 6
fetch('http://localhost:3000/Men-Shirts/6')
.then(res => res.json())
.then(data => displayShirt6(data))
function  displayShirt6(shirts) {
  const image = document.querySelector('#image-shirt-6')
  const name = document.querySelector('#name-shirt-6')
  const price = document.querySelector('#price-shirt-6')
  const inventory = document.querySelector('#inventory-shirt-6')
  
  image.src = shirts.image
  name.textContent = shirts.name
  price.textContent = '$' + shirts.price
  inventory.textContent = shirts.inventory + ' Left'
}

//Fetching shirts obj 7
fetch('http://localhost:3000/Men-Shirts/7')
.then(res => res.json())
.then(data => displayShirt7(data))
function  displayShirt7(shirts) {
  const image = document.querySelector('#image-shirt-7')
  const name = document.querySelector('#name-shirt-7')
  const price = document.querySelector('#price-shirt-7')
  const inventory = document.querySelector('#inventory-shirt-7')
  
  image.src = shirts.image
  name.textContent = shirts.name
  price.textContent = '$' + shirts.price
  inventory.textContent = shirts.inventory + ' Left'
}

//Fetching shirts obj 8
fetch('http://localhost:3000/Men-Shirts/8')
.then(res => res.json())
.then(data => displayShirt8(data))
function  displayShirt8(shirts) {
  const image = document.querySelector('#image-shirt-8')
  const name = document.querySelector('#name-shirt-8')
  const price = document.querySelector('#price-shirt-8')
  const inventory = document.querySelector('#inventory-shirt-8')
  
  image.src = shirts.image
  name.textContent = shirts.name
  price.textContent = '$' + shirts.price
  inventory.textContent = shirts.inventory + ' Left'
}

//Fetching jeans obj 1
fetch('http://localhost:3000/Men-Hoodies/1')
.then(res => res.json())
.then(data => displayJeans1(data))
function displayJeans1(jeans) {
  const image = document.querySelector('#image-jeans-1')
  const name = document.querySelector('#name-jeans-1')
  const price = document.querySelector('#price-jeans-1')
  const inventory = document.querySelector('#inventory-jeans-1')

  image.src = jeans.image
  name.textContent = jeans.name
  price.textContent = '$' + jeans.price
  inventory.textContent = jeans.inventory + ' Left'
}

//Fetching jeans obj 2
fetch('http://localhost:3000/Men-Hoodies/2')
.then(res => res.json())
.then(data => displayJeans2(data))
function displayJeans2(jeans) {
  const image = document.querySelector('#image-jeans-2')
  const name = document.querySelector('#name-jeans-2')
  const price = document.querySelector('#price-jeans-2')
  const inventory = document.querySelector('#inventory-jeans-2')

  image.src = jeans.image
  name.textContent = jeans.name
  price.textContent = '$' + jeans.price
  inventory.textContent = jeans.inventory + ' Left'
}

//Fetching jeans obj 3
fetch('http://localhost:3000/Men-Hoodies/3')
.then(res => res.json())
.then(data => displayJeans3(data))
function displayJeans3(jeans) {
  const image = document.querySelector('#image-jeans-3')
  const name = document.querySelector('#name-jeans-3')
  const price = document.querySelector('#price-jeans-3')
  const inventory = document.querySelector('#inventory-jeans-3')

  image.src = jeans.image
  name.textContent = jeans.name
  price.textContent = '$' + jeans.price
  inventory.textContent = jeans.inventory + ' Left'
}

//Fetching jeans obj 4
fetch('http://localhost:3000/Men-Hoodies/4')
.then(res => res.json())
.then(data => displayJeans4(data))
function displayJeans4(jeans) {
  const image = document.querySelector('#image-jeans-4')
  const name = document.querySelector('#name-jeans-4')
  const price = document.querySelector('#price-jeans-4')
  const inventory = document.querySelector('#inventory-jeans-4')

  image.src = jeans.image
  name.textContent = jeans.name
  price.textContent = '$' + jeans.price
  inventory.textContent = jeans.inventory + ' Left'
}

//Fetching jeans obj 5
fetch('http://localhost:3000/Men-Hoodies/5')
.then(res => res.json())
.then(data => displayJeans5(data))
function displayJeans5(jeans) {
  const image = document.querySelector('#image-jeans-5')
  const name = document.querySelector('#name-jeans-5')
  const price = document.querySelector('#price-jeans-5')
  const inventory = document.querySelector('#inventory-jeans-5')

  image.src = jeans.image
  name.textContent = jeans.name
  price.textContent = '$' + jeans.price
  inventory.textContent = jeans.inventory + ' Left'
}

//Fetching jeans obj 6
fetch('http://localhost:3000/Men-Hoodies/6')
.then(res => res.json())
.then(data => displayJeans6(data))
function displayJeans6(jeans) {
  const image = document.querySelector('#image-jeans-6')
  const name = document.querySelector('#name-jeans-6')
  const price = document.querySelector('#price-jeans-6')
  const inventory = document.querySelector('#inventory-jeans-6')

  image.src = jeans.image
  name.textContent = jeans.name
  price.textContent = '$' + jeans.price
  inventory.textContent = jeans.inventory + ' Left'
}

//Fetching jeans obj 7
fetch('http://localhost:3000/Men-hoodies/7')
.then(res => res.json())
.then(data => displayJeans7(data))
function displayJeans7(jeans) {
  const image = document.querySelector('#image-jeans-7')
  const name = document.querySelector('#name-jeans-7')
  const price = document.querySelector('#price-jeans-7')
  const inventory = document.querySelector('#inventory-jeans-7')

  image.src = jeans.image
  name.textContent = jeans.name
  price.textContent = '$' + jeans.price
  inventory.textContent = jeans.inventory + ' Left'
}

//Fetching jeans obj 8
fetch('http://localhost:3000/Men-Hoodies/8')
.then(res => res.json())
.then(data => displayJeans8(data))
function displayJeans8(jeans) {
  const image = document.querySelector('#image-jeans-8')
  const name = document.querySelector('#name-jeans-8')
  const price = document.querySelector('#price-jeans-8')
  const inventory = document.querySelector('#inventory-jeans-8')

  image.src = jeans.image
  name.textContent = jeans.name
  price.textContent = '$' + jeans.price
  inventory.textContent = jeans.inventory + ' Left'
}


//Fetching hoodie 1
fetch('http://localhost:3000/Men-jeans/1')
.then(res => res.json())
.then(data => displayHoodies1(data))
function displayHoodies1(hoodies) {
  const image = document.querySelector('#image-hoodies-1')
  const name = document.querySelector('#name-hoodies-1')
  const price = document.querySelector('#price-hoodies-1')
  const inventory = document.querySelector('#inventory-hoodies-1')

  image.src = hoodies.image
  name.textContent = hoodies.name
  price.textContent = '$' + hoodies.price
  inventory.textContent = hoodies.inventory + ' Left'
}

//Fetching hoodie 2
fetch('http://localhost:3000/Men-jeans/2')
.then(res => res.json())
.then(data => displayHoodies2(data))
function displayHoodies2(hoodies) {
  const image = document.querySelector('#image-hoodies-2')
  const name = document.querySelector('#name-hoodies-2')
  const price = document.querySelector('#price-hoodies-2')
  const inventory = document.querySelector('#inventory-hoodies-2')

  image.src = hoodies.image
  name.textContent = hoodies.name
  price.textContent = '$' + hoodies.price
  inventory.textContent = hoodies.inventory + ' Left'
}

//Fetching hoodie 3
fetch('http://localhost:3000/Men-jeans/3')
.then(res => res.json())
.then(data => displayHoodies3(data))
function displayHoodies3(hoodies) {
  const image = document.querySelector('#image-hoodies-3')
  const name = document.querySelector('#name-hoodies-3')
  const price = document.querySelector('#price-hoodies-3')
  const inventory = document.querySelector('#inventory-hoodies-3')

  image.src = hoodies.image
  name.textContent = hoodies.name
  price.textContent = '$' + hoodies.price
  inventory.textContent = hoodies.inventory + ' Left'
}

//Fetching hoodie 4
fetch('http://localhost:3000/Men-jeans/4')
.then(res => res.json())
.then(data => displayHoodies4(data))
function displayHoodies4(hoodies) {
  const image = document.querySelector('#image-hoodies-4')
  const name = document.querySelector('#name-hoodies-4')
  const price = document.querySelector('#price-hoodies-4')
  const inventory = document.querySelector('#inventory-hoodies-4')

  image.src = hoodies.image
  name.textContent = hoodies.name
  price.textContent = '$' + hoodies.price
  inventory.textContent = hoodies.inventory + ' Left'
}

//Fetching hoodie 5
fetch('http://localhost:3000/Men-jeans/5')
.then(res => res.json())
.then(data => displayHoodies5(data))
function displayHoodies5(hoodies) {
  const image = document.querySelector('#image-hoodies-5')
  const name = document.querySelector('#name-hoodies-5')
  const price = document.querySelector('#price-hoodies-5')
  const inventory = document.querySelector('#inventory-hoodies-5')

  image.src = hoodies.image
  name.textContent = hoodies.name
  price.textContent = '$' + hoodies.price
  inventory.textContent = hoodies.inventory + ' Left'
}

//Fetching hoodie 6
fetch('http://localhost:3000/Men-jeans/6')
.then(res => res.json())
.then(data => displayHoodies6(data))
function displayHoodies6(hoodies) {
  const image = document.querySelector('#image-hoodies-6')
  const name = document.querySelector('#name-hoodies-6')
  const price = document.querySelector('#price-hoodies-6')
  const inventory = document.querySelector('#inventory-hoodies-6')

  image.src = hoodies.image
  name.textContent = hoodies.name
  price.textContent = '$' + hoodies.price
  inventory.textContent = hoodies.inventory + ' Left'
}

//Fetching hoodie 7
fetch('http://localhost:3000/Men-jeans/7')
.then(res => res.json())
.then(data => displayHoodies7(data))
function displayHoodies7(hoodies) {
  const image = document.querySelector('#image-hoodies-7')
  const name = document.querySelector('#name-hoodies-7')
  const price = document.querySelector('#price-hoodies-7')
  const inventory = document.querySelector('#inventory-hoodies-7')

  image.src = hoodies.image
  name.textContent = hoodies.name
  price.textContent = '$' + hoodies.price
  inventory.textContent = hoodies.inventory + ' Left'
}

//Fetching hoodie 8
fetch('http://localhost:3000/Men-jeans/8')
.then(res => res.json())
.then(data => displayHoodies8(data))
function displayHoodies8(hoodies) {
  const image = document.querySelector('#image-hoodies-8')
  const name = document.querySelector('#name-hoodies-8')
  const price = document.querySelector('#price-hoodies-8')
  const inventory = document.querySelector('#inventory-hoodies-8')

  image.src = hoodies.image
  name.textContent = hoodies.name
  price.textContent = '$' + hoodies.price
  inventory.textContent = hoodies.inventory + ' Left'
}

//Fetching suits 1 
fetch('http://localhost:3000/Men-Suits/1')
.then(res => res.json())
.then(data => displaySuits1(data))
function displaySuits1(suits) {
  const image = document.querySelector('#image-suits-1')
  const name = document.querySelector('#name-suits-1')
  const price = document.querySelector('#price-suits-1')
  const inventory = document.querySelector('#inventory-suits-1')

  image.src = suits.image
  name.textContent = suits.name
  price.textContent = '$' + suits.price
  inventory.textContent = suits.inventory + ' Left'
}

//Fetching suits 2
fetch('http://localhost:3000/Men-Suits/2')
.then(res => res.json())
.then(data => displaySuits2(data))
function displaySuits2(suits) {
  const image = document.querySelector('#image-suits-2')
  const name = document.querySelector('#name-suits-2')
  const price = document.querySelector('#price-suits-2')
  const inventory = document.querySelector('#inventory-suits-2')

  image.src = suits.image
  name.textContent = suits.name
  price.textContent = '$' + suits.price
  inventory.textContent = suits.inventory + ' Left'
}

//Fetching suits 3
fetch('http://localhost:3000/Men-Suits/3')
.then(res => res.json())
.then(data => displaySuits3(data))
function displaySuits3(suits) {
  const image = document.querySelector('#image-suits-3')
  const name = document.querySelector('#name-suits-3')
  const price = document.querySelector('#price-suits-3')
  const inventory = document.querySelector('#inventory-suits-3')

  image.src = suits.image
  name.textContent = suits.name
  price.textContent = '$' + suits.price
  inventory.textContent = suits.inventory + ' Left'
}

//Fetching suits 4
fetch('http://localhost:3000/Men-Suits/4')
.then(res => res.json())
.then(data => displaySuits4(data))
function displaySuits4(suits) {
  const image = document.querySelector('#image-suits-4')
  const name = document.querySelector('#name-suits-4')
  const price = document.querySelector('#price-suits-4')
  const inventory = document.querySelector('#inventory-suits-4')

  image.src = suits.image
  name.textContent = suits.name
  price.textContent = '$' + suits.price
  inventory.textContent = suits.inventory + ' Left'
}

//Fetching suits 5
fetch('http://localhost:3000/Men-Suits/5')
.then(res => res.json())
.then(data => displaySuits5(data))
function displaySuits5(suits) {
  const image = document.querySelector('#image-suits-5')
  const name = document.querySelector('#name-suits-5')
  const price = document.querySelector('#price-suits-5')
  const inventory = document.querySelector('#inventory-suits-5')

  image.src = suits.image
  name.textContent = suits.name
  price.textContent = '$' + suits.price
  inventory.textContent = suits.inventory + ' Left'
}

//Fetching suits 6
fetch('http://localhost:3000/Men-Suits/6')
.then(res => res.json())
.then(data => displaySuits6(data))
function displaySuits6(suits) {
  const image = document.querySelector('#image-suits-6')
  const name = document.querySelector('#name-suits-6')
  const price = document.querySelector('#price-suits-6')
  const inventory = document.querySelector('#inventory-suits-6')

  image.src = suits.image
  name.textContent = suits.name
  price.textContent = '$' + suits.price
  inventory.textContent = suits.inventory + ' Left'
}

//Fetching suits 7
fetch('http://localhost:3000/Men-Suits/7')
.then(res => res.json())
.then(data => displaySuits7(data))
function displaySuits7(suits) {
  const image = document.querySelector('#image-suits-7')
  const name = document.querySelector('#name-suits-7')
  const price = document.querySelector('#price-suits-7')
  const inventory = document.querySelector('#inventory-suits-7')

  image.src = suits.image
  name.textContent = suits.name
  price.textContent = '$' + suits.price
  inventory.textContent = suits.inventory + ' Left'
}

//Fetching suits 8
fetch('http://localhost:3000/Men-Suits/8')
.then(res => res.json())
.then(data => displaySuits8(data))
function displaySuits8(suits) {
  const image = document.querySelector('#image-suits-8')
  const name = document.querySelector('#name-suits-8')
  const price = document.querySelector('#price-suits-8')
  const inventory = document.querySelector('#inventory-suits-8')

  image.src = suits.image
  name.textContent = suits.name
  price.textContent = '$' + suits.price
  inventory.textContent = suits.inventory + ' Left'
}

//Fetching Fragrance 1
fetch('http://localhost:3000/Men-Fragrance/1')
.then(res => res.json())
.then(data => displayFragrance1(data))
function displayFragrance1(fragrance) {
  const image = document.querySelector('#image-fragrance-1')
  const name = document.querySelector('#name-fragrance-1')
  const price = document.querySelector('#price-fragrance-1')
  const inventory = document.querySelector('#inventory-fragrance-1')

  image.src = fragrance.image
  name.textContent = fragrance.name
  price.textContent = '$' + fragrance.price
  inventory.textContent = fragrance.inventory + ' Left'
}

//Fetching Fragrance 2
fetch('http://localhost:3000/Men-Fragrance/2')
.then(res => res.json())
.then(data => displayFragrance2(data))
function displayFragrance2(fragrance) {
  const image = document.querySelector('#image-fragrance-2')
  const name = document.querySelector('#name-fragrance-2')
  const price = document.querySelector('#price-fragrance-2')
  const inventory = document.querySelector('#inventory-fragrance-2')

  image.src = fragrance.image
  name.textContent = fragrance.name
  price.textContent = '$' + fragrance.price
  inventory.textContent = fragrance.inventory + ' Left'
}

//Fetching Fragrance 3
fetch('http://localhost:3000/Men-Fragrance/3')
.then(res => res.json())
.then(data => displayFragrance3(data))
function displayFragrance3(fragrance) {
  const image = document.querySelector('#image-fragrance-3')
  const name = document.querySelector('#name-fragrance-3')
  const price = document.querySelector('#price-fragrance-3')
  const inventory = document.querySelector('#inventory-fragrance-3')

  image.src = fragrance.image
  name.textContent = fragrance.name
  price.textContent = '$' + fragrance.price
  inventory.textContent = fragrance.inventory + ' Left'
}

//Fetching Fragrance 4
fetch('http://localhost:3000/Men-Fragrance/4')
.then(res => res.json())
.then(data => displayFragrance4(data))
function displayFragrance4(fragrance) {
  const image = document.querySelector('#image-fragrance-4')
  const name = document.querySelector('#name-fragrance-4')
  const price = document.querySelector('#price-fragrance-4')
  const inventory = document.querySelector('#inventory-fragrance-4')

  image.src = fragrance.image
  name.textContent = fragrance.name
  price.textContent = '$' + fragrance.price
  inventory.textContent = fragrance.inventory + ' Left'
}

//Fetching Fragrance 5
fetch('http://localhost:3000/Men-Fragrance/5')
.then(res => res.json())
.then(data => displayFragrance5(data))
function displayFragrance5(fragrance) {
  const image = document.querySelector('#image-fragrance-5')
  const name = document.querySelector('#name-fragrance-5')
  const price = document.querySelector('#price-fragrance-5')
  const inventory = document.querySelector('#inventory-fragrance-5')

  image.src = fragrance.image
  name.textContent = fragrance.name
  price.textContent = '$' + fragrance.price
  inventory.textContent = fragrance.inventory + ' Left'
}

//Fetching Fragrance 6
fetch('http://localhost:3000/Men-Fragrance/6')
.then(res => res.json())
.then(data => displayFragrance6(data))
function displayFragrance6(fragrance) {
  const image = document.querySelector('#image-fragrance-6')
  const name = document.querySelector('#name-fragrance-6')
  const price = document.querySelector('#price-fragrance-6')
  const inventory = document.querySelector('#inventory-fragrance-6')

  image.src = fragrance.image
  name.textContent = fragrance.name
  price.textContent = '$' + fragrance.price
  inventory.textContent = fragrance.inventory + ' Left'
}

//Fetching Fragrance 7
fetch('http://localhost:3000/Men-Fragrance/7')
.then(res => res.json())
.then(data => displayFragrance7(data))
function displayFragrance7(fragrance) {
  const image = document.querySelector('#image-fragrance-7')
  const name = document.querySelector('#name-fragrance-7')
  const price = document.querySelector('#price-fragrance-7')
  const inventory = document.querySelector('#inventory-fragrance-7')

  image.src = fragrance.image
  name.textContent = fragrance.name
  price.textContent = '$' + fragrance.price
  inventory.textContent = fragrance.inventory + ' Left'
}

//Fetching Fragrance 8
fetch('http://localhost:3000/Men-Fragrance/8')
.then(res => res.json())
.then(data => displayFragrance8(data))
function displayFragrance8(fragrance) {
  const image = document.querySelector('#image-fragrance-8')
  const name = document.querySelector('#name-fragrance-8')
  const price = document.querySelector('#price-fragrance-8')
  const inventory = document.querySelector('#inventory-fragrance-8')

  image.src = fragrance.image
  name.textContent = fragrance.name
  price.textContent = '$' + fragrance.price
  inventory.textContent = fragrance.inventory + ' Left'
}


// const image = document.querySelector('#')
//   const name = document.querySelector('#')
//   const price = document.querySelector('#')
//   const inventory = document.querySelector('#')


// const buyNow = document.querySelector(".btn-buy")
// //cartNum.name = 'cart-number'
// function deleteInventory(editInventory) {
//     const cartNum = editInventory.inventory.value
//     editInventory.forEach(editInventory => {
//       buyNow.addEventListener('click', (e) => {
//         fetch(`http://localhost:3000/Men-Shirts/${editInventory.id}`,{
//         method:'PATCH',
//         headers:{
//           'Content-Type':'application/json'
//         },
//         body: JSON.stringify({inventory: cartNum - 1})
//       })
//       })
//   })
// }   


// fetch('http://localhost:3000/Men-Shirts')
// .then(res => res.json())
// .then(data => deleteInventory(data))


//cartNum.setAttribute("id", "uniqueIdentifier");

  
  