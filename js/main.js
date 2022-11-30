const questions_dialog = document.querySelector("#questions-dialog")

const products  = [
    {name: 'Dress for women Reasonable price​​​ ​free size',image: 'image/dress-3.jpg',price: 35,rate: 4},
    {name: 'Dress for women​​ Reasonable price​ ​free size​​',image: 'image/dress.jpg',price: 40,rate: 4},
    {name: 'Dress for women​​ Reasonable price​ ​free size​',image: 'image/dress4.jpg',price: 45,rate: 4},
    {name: 'Dress for women​​ Reasonable price​ ​free size​',image: 'image/dress-2.jpg',price: 30,rate: 4},
    {name: 'Dress for women​​ Reasonable price​ ​free size​',image: 'image/dress-3.jpg',price: 30,rate: 4},
    {name: 'Dress for women​​ Reasonable price​ ​free size​',image: 'image/dress4.jpg',price: 30,rate: 4},
    {name: 'Dress for women​​ Reasonable price​ ​free size​',image: 'image/dress-2.jpg',price: 30,rate: 4},
    {name: 'Dress for women​​ Reasonable price​ ​free size​',image: 'image/dress-2.jpg',price: 30,rate: 4},
    {name: 'Dress for women​​ Reasonable price​ ​free size​',image: 'image/T-shirt-2.jpg',price: 30,rate: 4},
    {name: 'Dress for women​​ Reasonable price​ ​free size​',image: 'image/T-shirt-3jfif',price: 30,rate: 4},
    {name: 'Dress for women​​ Reasonable price​ ​free size​',image: 'image/T-shirt-4.webp',price: 30,rate: 4},
    {name: 'Dress for women​​ Reasonable price​ ​free size​',image: 'T-shirt-5.jfif',price: 30,rate: 4},
]


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
        p1.textContent = product.name
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
        console.log(button)

        div_image.appendChild(button)
        card.appendChild(img)
        card.appendChild(div_image)
        container.appendChild(card)
        console.log(container)
    }
}


displayProducts()