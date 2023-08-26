const images = document.querySelectorAll("#main div img");
const lightbox = document.getElementById("lightbox");
const previousButton = document.querySelector("#icon-previous");
const nextButton = document.querySelector("#icon-next");
const mainImg = document.querySelector(".main img");
const carouselImg = document.querySelectorAll("#carousel img");
const close = document.querySelector(".close");
const cart = document.querySelector("#cart");
const cartBox = document.querySelector("#cart-box");
const minBtn = document.querySelector("#min-btn");
const plusBtn = document.querySelector("#plus-btn");
const qty = document.querySelector("#qty");
const addBtn = document.querySelector("#add-btn");
const addBtnBtn = document.querySelector("#add-btn button");
const cartMsg = document.querySelector("#cart-msg");
const cartContentBox = document.querySelector("#cart-content-box");
const cartQty = document.querySelector("#cart-qty");
const checkoutbtn = document.querySelector("#checkout-btn");
const iconDelete = document.querySelector("#icon-delete");
const cartNumber = document.querySelector("#cart-number");
const nav = document.querySelectorAll("nav a");
const plusBtnMob = document.querySelector("#icon-next-mob");
const minBtnMob = document.querySelector("#icon-previous-mob");
const mainImgMob = document.querySelector("#main-img-mob");


/* LIGHTBOX */
/* TO SPAWN THE LIGHTBOX */
images.forEach((images) => {
    images.addEventListener("click", () => {
        lightbox.style.display = "block";
    })
});
/* TO CLOSE THE LIGHTBOX */
close.addEventListener("click", () => {
    lightbox.style.display = "none";
})

const imgArr = [
  "images/image-product-1.jpg",
  "images/image-product-2.jpg",
  "images/image-product-3.jpg",
  "images/image-product-4.jpg",
];


carouselImg.forEach((image, i) => {
    image.addEventListener("click", () => {
        mainImg.src = imgArr[i];
    })
})

/* TO SWIPE LEFT OR RIGHT */
let currentIndex = 0;

nextButton.addEventListener("click", () => {
    currentIndex++;
    if(currentIndex >= imgArr.length){currentIndex = 0}
    mainImg.src = imgArr[currentIndex];
})

previousButton.addEventListener("click", () => {
    currentIndex--;
    if(currentIndex < 0){currentIndex = imgArr.length-1}
    mainImg.src = imgArr[currentIndex];    
});



/* CART STUFF */
/* hover on cart icon */
cart.addEventListener("mouseover", () => {
    cartBox.style.display = "block";
})
cart.addEventListener("mouseout", () => {
  cartBox.style.display = "none";
});

/* add items to the cart */
let currentValue = 0;

function addToCart(){
    plusBtn.addEventListener("click", () => {
        currentValue++
        qty.innerHTML = currentValue;
    })
}

function subtractToCart() {
    minBtn.addEventListener("click", () => {
        currentValue--;
        qty.innerHTML = currentValue;
        if(qty.innerHTML <= 0){qty.innerHTML = 0}
    });
}

/* add item to the cart */
/* Change number on the cart icon */

function addToBasket(){
    addBtn.addEventListener("click", () => {
        cartMsg.style.display = "none";
        cartContentBox.style.display = "block";
        cartContentBox.style.display = "flex";
        cartQty.style.fontSize = "0.7rem";
        addBtnBtn.style.background = "rgb(255, 125, 38)";
        checkoutbtn.style.display = "block";
        cartQty.innerHTML = `$125.00 * ${qty.innerHTML} = $${125*qty.innerHTML}.00`;
        cartNumber.style.display = "block";
        let crtQty = cartQty.innerHTML;
        cartNumber.innerHTML = crtQty.slice(10, 12);
        
    })
}

/* Delete item in the cart */
function deleteItem(){
    iconDelete.addEventListener("click", () => {
        cartMsg.style.display = "block";
        cartContentBox.style.display = "none";
        cartNumber.style.display = "none";
    })
}

/* UNDERLINE div animation */

for(let i  = 0; i < nav.length; i++){

    nav[i].addEventListener("mouseover", () => {
        underline.style.position = "absolute";
        underline.style.width = `${nav[i].offsetWidth}px`;
        underline.style.left = `${nav[i].offsetLeft}px`;
        underline.style.display = "block";
    })
    nav[i].addEventListener("mouseout", () => {
      underline.style.display = "none";
    });

}

/* Display images from mobile */

function scrollImage(){
    let currentValue = 0;
  
    if (window.innerWidth < 376){

        plusBtnMob.addEventListener("click", () => {
            currentValue++;
            mainImgMob.src = imgArr[currentValue%4];

            
        })

        minBtnMob.addEventListener("click", () => {
            currentValue--;
            if(currentValue < 0){currentValue = imgArr.length-1}
            mainImgMob.src = imgArr[currentValue];
        })
  }
}


deleteItem();
addToCart();
subtractToCart();
addToBasket();
scrollImage();