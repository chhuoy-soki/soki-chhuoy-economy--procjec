const table = document.querySelector("#table-container");
const questions_dialog = document.querySelector("#questions-dialog")
const create = document.querySelector("#create-product")
const header = document.querySelector("#edit-header")
// const cacel = document.querySelector("#cancal-product")

let products =[
    {image:"../../image/dress-3.jpg",name:"Dress for girl free size",price: 45},
    {image:"../../image/dress-2.jpg",name:"Dress for girl free size",price: 45},
    {image:"../../image/dress-5.jpg",name:"Dress for girl free size",price: 45},
    {image:"../../image/dress.jpg",name:"Dress for girl free size",price: 45},
    {image:"../../image/dress4.jpg",name:"Dress for girl free size",price: 45},
    {image:"../../image/T-shirt-2.jpg",name:"Dress for girl free size",price: 45},
    {image:"../../image/T-shirt-4webp",name:"Dress for girl free size",price: 45},
    {image:"../../image/dress.jpg",name:"Dress for girl free size",price: 45},
]


function show(element){
    element.style.display =  "block"
}
function hide(element){
    element.style.display = "none"
}

function onAddButton(){
    create.textContent = "creat"
    header.textContent = "create product"


    document.querySelector("#choice_image").value = ""
    document.querySelector("#choice_product").value = ""
    document.querySelector("#choice_price").value = ""

    show(questions_dialog)
}

function StorageProduct() {
    //set data in localstorage
    localStorage.setItem("products",JSON.stringify(products))
}

function loadProduct(){
    let productsStorage = JSON.parse(localStorage.getItem("products"));
    if (productsStorage !== null){
      products = productsStorage
    }
    else{
        localStorage.removeItem("products")
    }
}

function renderProduct(){
    loadProduct()
    let table_title = document.querySelector("#tbody");
    table_title.remove();

    table_title = document.createElement("tbody");
    table_title.setAttribute("id","tbody");

    table.appendChild(table_title)
    
    for (let index = 0; index < products.length; index++){ 
        let tr = document.createElement("tr");

        tr.setAttribute("id", "table-row")
        tr.dataset.index = index
        console.log(tr)
        
        let td1 = document.createElement("td");
        td1.setAttribute("id","image");
        
        let image = document.createElement("img");
        image.src = products[index].image
        td1.appendChild(image)
        
        let td2 = document.createElement("td");
        td2.setAttribute("id","product");
        td2.textContent = products[index].name
        // console.log(td2)
        
        let td3 = document.createElement("td");
        td3.setAttribute("id","price")
        td3.textContent = products[index].price + "$"
        
        let td4 = document.createElement("td");
        td4.setAttribute("id","action")
        
      
        
        let create = document.createElement("button");
        create.setAttribute("id","delete");
        create.textContent = "delete";
        create.addEventListener("click",onDelete)
        
        
        let edit = document.createElement("button");
        edit.setAttribute("id","edit");
        edit.textContent = "edit";
        edit.addEventListener("click",onEdit)
        
        let div = document.createElement("div");
        div.setAttribute("id","btn")
        div.appendChild(edit)
        div.appendChild(create)
        td4.appendChild(div)
        
        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
        tr.appendChild(td4)   
        table_title.appendChild(tr)
    }
}

let productIndex = null;

function createProduct(event){
    event.preventDefault()
    // hide(questions_dialog)  //hide form input

    if (document.querySelector("#choice_image").value != "" && document.querySelector("#choice_product").value !="" && document.querySelector("#choice_price").value != ""){

        if (productIndex !== null){
            let editProduct = products[productIndex];
            editProduct.image = document.querySelector("#choice_image").value;
            editProduct.name = document.querySelector("#choice_product").value;
            editProduct.price = document.querySelector("#choice_price").value;
            // create new product
            // products = null
        }
        else{
            let newProduct = {}
            newProduct.image = document.querySelector("#choice_image").value;
            newProduct.name = document.querySelector("#choice_product").value;
            newProduct.price = document.querySelector("#choice_price").value;
            products.push(newProduct) 
        }
        hide(questions_dialog)
        StorageProduct()
        renderProduct()
    }
    else{
        alert("You must input a product")
    }
}


function onEdit(event){
    //edit information in product

    show(questions_dialog)
    

    let newProduct = event.target.parentElement.parentElement.parentElement.dataset.index;
    productIndex = newProduct
    let editProduct = products[newProduct];
    document.querySelector("#choice_image").value = editProduct.image;
    document.querySelector("#choice_product").value = editProduct.name;
    document.querySelector("#choice_price").value = editProduct.price;
    create.textContent = "save"
    header.textContent = "edit product"

    console.log(create)

}

function onDelete(event){
    // remove product
    event.preventDefault();

    let index = event.target.parentElement.parentElement.parentElement.dataset.index;
    console.log(products)
    products.splice(index, 1);
    StorageProduct()
    renderProduct()

}


function onCancel(event){
    event.preventDefault()
    hide(questions_dialog)
}

renderProduct()
loadProduct()
// StorageProduct()

