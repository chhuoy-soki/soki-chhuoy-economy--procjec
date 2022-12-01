const questions_dialog = document.querySelector("#questions-dialog")

let products  = []


function savePorduct() {
    localStorage.setItem("products",JSON.stringify(products))
}

function loadProduct(){
    const productsStorage = JSON.parse(localStorage.getItem("products"));
    if (productsStorage.length > 0){
      products = productsStorage
    }
    else{
        localStorage.removeItem("products")
    }
}

function showButton(element){
    element.style.display =  "block"
}
function hide(element){
    element.style.display = "none"
}

function onAddButton(){
    showButton(questions_dialog)
}

function createProduct(){
    hide(questions_dialog)
}

function onCancel(){
    hide(questions_dialog)
}

const container = document.querySelector('.card')

function displayProducts() {
    for (let product of products) {
        let card = document.createElement('div')
        card.className = 'card-btn'
        let img = document.createElement("div");
        img.className = "image";
        let image = document.createElement('img')
        image.src = product.image
        img.appendChild(image)

        let p1 = document.createElement("p");
        p1.setAttribute("class","list")
        p1.textContent = product.product
        img.appendChild(p1);

        let p2 = document.createElement("p");
        p2.textContent = product.price + "$"
        img.appendChild(p2)
        let icon = document.createElement("div");
        icon.className = "icon";
        
        let div_image = document.createElement("div");
        div_image.setAttribute("id","button");
        let button = document.createElement("button");
        button.textContent = "Buy now";
        button.addEventListener("click",onAddButton)
        // console.log(button)

        div_image.appendChild(button)
        card.appendChild(img)
        card.appendChild(div_image)
        container.appendChild(card)
        // console.log(container)


    }
}

function serch_product(){
    // let text = document.querySelector(".list").parentElement.parentElement.parentElement = products
    // console.log(text)
    for (let product of products) {
        console.log(product)
    }
}

// serch_product()


loadProduct()
savePorduct()
displayProducts()