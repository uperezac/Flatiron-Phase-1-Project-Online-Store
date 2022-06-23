//Cart
const cartIcon = document.querySelector('#cart-icon');
const cart = document.querySelector('.cart');
const closeCart = document.querySelector('#close-cart');
//Opens Cart
cartIcon.onclick = () =>{
    cart.classList.add('active');
};
//Closes Cart
closeCart.onclick = () =>{
    cart.classList.remove('active');
};
//Cart Working JS
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
}else{
    ready();
}

//making function
function ready(){
//Remove Items from Cart
    var removeCartButtons = document.getElementsByClassName('cart-remove');
    console.log(removeCartButtons);
    for (var i = 0; i < removeCartButtons.length; i++){
        const button = removeCartButtons[i];
        button.addEventListener('click', removeCartItem);
    }

//Quantity Changes
    var quantityInputs = document.getElementsByClassName('cart-quantity')
    for (var i = 0; i < removeCartButtons.length; i++) {
        var input = quantityInputs[i];
        input.addEventListener('change', quantityChanged);
    }
}
//Add To Cart
var addCart = document.getElementsByClassName('add-cart')
for (var i = 0; i < removeCartButtons.length; i++){
    var button = addCart[i]
    button.addEventListener('click', addCartClicked)
}

//Remove Items From Cart
function removeCartItem(event){
    const buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updateTotal();
}

//Quantity Changed
function quantityChanged(event){
    var input = event.target
    if(isNaN(input.value) || input.value<= 0){
        input.value = 1

    }
    updateTotal();
}

// Add to Cart
function addCartClicked(event){
    var button = event.target;
    var shopProducts = button.parentElement;
    var title = shopProducts.getElementsByClassName('product-title')[0].innerText;
    var price = shopProducts.getElementsByClassName('price')[0].innerText;
    var productImg = shopProducts.getElementsByClassName('product-img')[0].src;
    addProductToCart(title, price, productImg);
    updateTotal();
}

function addProductToCart(title, price, productImg){
    var cartShopBox = document.createElement('div');
    cartShopBox.classList.add('cart-box');
    var cartItems = document.getElementsByClassName('cart-content')[0];
    var cartItemsNames = cartItems.getElementsByClassName('cart-product-title');
    for(var i = 0; i < cartItemsNames.length; i++) {
        if(cartItemsNames[i].innerText == title) {
        alert("You have already added this item to cart");
        return;
        }        
}
}
var cartBoxContent = `
                <img src="${productImg}" alt="Assets/dior_shirt1.webp" class="cart-img">
                <div class="detail-box">
                    <div class="cart-product-title">Dior Oblique Pixel Short-Sleeved Shirt</div>
                    <div class="cart-price">$1650</div>
                    <input type="number" value="1" class="cart-quantity">
                </div>
                <!--Remove Cart-->
                <i class='bx bx-trash cart-remove'></i>`;

cartShopBox.innerHTML = cartBoxContent;
cartItems.append(cartShopBox);
cartShopBox.getElementByClassName('cart-remove')[0].addEventListener('click', removeCartItem);
cartShopBox.getElementByClassName('cart-quantity')[0].addEventListener('change', quantityChanged);

// Update Total
function updateTotal(){
    var cartContent = document.getElementsByClassName('cart-content')[0];
    var cartBoxes = cartContent.getElementsByClassName('cart-box');
    var total = 0;
    for (var i = 0; i < cartBoxes.length; i++) {
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName('cart-price')[0];
        var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];
        var price = parseFloat(priceElement.innerText.replace('$', ''));
        const quantity = quantityElement.value;
        total = total + (price * quantity);



        document.getElementsByClassName('total-price')[0].innerText = '$' + total;
    }
}
































/*
fetch('http://localhost:3000/Men-Shirts')
.then(res => res.json())
.then((data) => displayItems(data));

fetch('http://localhost:3000/Men-Hoodies')
.then(res => res.json())
.then((data) => displayItems(data));

fetch('http://localhost:3000/Men-Jeans')
.then(res => res.json())
.then((data) => displayItems(data));

fetch('http://localhost:3000/Men-Suits')
.then(res => res.json())
.then((data) => displayItems(data));

fetch('http://localhost:3000/Men-Glasses')
.then(res => res.json())
.then((data) => displayItems(data));

fetch('http://localhost:3000/Men-Fragrance')
.then(res => res.json())
.then((data) => displayItems(data));

const shirtsDiv = document.querySelector(".men-shirts")
// const hoodiesDiv = document.querySelector(".men-hoodies")
// const jeansDiv = document.querySelector(".men-jeans")
// const suitsDiv = document.querySelector(".men-suits")
// const glassesDiv = document.querySelector(".men-glasses")
// const fragranceDiv = document.querySelector(".men-fragrance")



function displayItems(display) {
    // Creating Elements
    display.forEach(display => {
        const shirtsUl = document.createElement('ul');
        const image = document.createElement('img');
        const name = document.createElement('li');
        const price = document.createElement('li');
        const inventory = document.createElement('li')
    // Giving Elements their content    

        image.src = display.image;
        name.textContent = display.name;
        price.textContent = '$' + display.price;
        inventory.textContent = display.inventory + " " + "Left";

    // Appending [order matters here]

    shirtsUl.append(image, name, price, inventory)   
    shirtsDiv.append(shirtsUl)

    });
}
*/





/* let clothesData;
let currentCloth;


fetch('')
.then(response => response.json)
.then(clothesData => {
    buildMenu(clothesData);
    setCloth(clothesData[0]);
    setUpCart();
    hookUpGoHomeButton();
    hookUpProductsButton();
    hookUpAboutButton();
    hookUpContactButton();
});

function buildMenu(clothesData) {
    const clothesList = document.querySelector('.navbar')
    clothesData.forEach(item => {
        const clothesListItem = document.createElement("span")
        clothesListItem.textContent = item.name
        clothesList.appendChild(clothesListItem)

        clothesListItem.addEventListener('click', () => {
            setCloth(item)
        })
    })
}
// Get here when we finish with the html
function setCloth(cloth) {
    currentCloth = cloth;

    const clothImage = document.querySelector("")
    clothImage.src = cloth.image
    const clothName = document.querySelector("")
    clothName.textContent = cloth.name
    const clothPrice = document.querySelector("")
    clothPrice.textContent = `$${cloth.price}`
    const numberInCart = document.querySelector("")
    numberInCart.textContent = cloth.number_in_bag

}

function setUpCart() {
    const addToCartForm = document.querySelector('#cart-form')
    addToCartForm.addEventListener('submit', (event) => {
        event.preventDefault()
        currentCloth.number_in_bag += parseInt(event.target["cart-amount"].value)
        setCloth(currentCloth)
        addToCartForm.reset()
    })
}

function hookUpGoHomeButton() {
    const goHomeButton = document.querySelector('');
    goHomeButton.addEventListener('click', (event) => {
        event.preventDefault()
        location.href = "index.html"
    })


}

function hookUpProductsButton() {
    const productsButton = document.querySelector('');
    productsButton.addEventListener('click', (event) => {
        event.preventDefault()
        document.querySelector('wherever the clothes will be')
    })
}

function hookUpAboutButton() {
    const productsButton = document.querySelector('');
    productsButton.addEventListener('click', (event) => {
        event.preventDefault()
        //how do I make it show the text?
    })
}

function hookUpContactButton () {
    const productsButton = document.querySelector('');
    productsButton.addEventListener('click', (event) => {
        event.preventDefault()
        //how do I make it show the text?
    })
} */