const table = document.querySelector("#table-container");
const questions_dialog = document.querySelector("#questions-dialog")
const create = document.querySelector("#create-product")
const cacel = document.querySelector("#cancal-product")

let products =[
    {image:"../../image/dress-3.jpg",product:"Dress for girl free size",price: 45},
    {image:"../../image/dress-2.jpg",product:"Dress for girl free size",price: 45},
    {image:"../../image/dress-5.jpg",product:"Dress for girl free size",price: 45},
    {image:"../../image/dress.jpg",product:"Dress for girl free size",price: 45},
    {image:"../../image/dress4.jpg",product:"Dress for girl free size",price: 45},
    {image:"../../image/T-shirt-2.jpg",product:"Dress for girl free size",price: 45},
    {image:"../../image/T-shirt-4webp",product:"Dress for girl free size",price: 45},
    {image:"../../image/dress.jpg",product:"Dress for girl free size",price: 45},
]


function show(element){
    element.style.display =  "block"
}
function hide(element){
    element.style.display = "none"
}

function onAddButton(){
    show(questions_dialog)
}

function savePorduct() {
    //set data in localstorage
    localStorage.setItem("products",JSON.stringify(products))
}

function loadProduct(){
    let productsStorage = JSON.parse(localStorage.getItem("products"));
    if (productsStorage.length > 0){
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
        
        let td1 = document.createElement("td");
        td1.setAttribute("id","image");
        
        let image = document.createElement("img");
        image.src = products[index].image
        td1.appendChild(image)
        
        let td2 = document.createElement("td");
        td2.setAttribute("id","product");
        td2.textContent = products[index].product 
        // console.log(td2)
        
        let td3 = document.createElement("td");
        td3.setAttribute("id","price")
        td3.textContent = products[index].price + "$"
        
        let td4 = document.createElement("td");
        td4.setAttribute("id","action")
        
        // tr.dataset.index = index
        
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


let index = 0
function onEdit(event){
    //edit information in product

    show(questions_dialog)
    document.querySelector("menu").lastElementChild.textContent = "Edit"

    index = event.target.parentElement.parentElement.parentElement.dataset.index;
    
    document.querySelector("#choice_image").value = products[index].image;
    document.querySelector("#choice_product").value = products[index].product;
    document.querySelector("#choice_price").value = products[index].price;
    
}

function add(){
    clearData()
    show(questions_dialog)
    index = null
}

function editProduct(){

    hide(questions_dialog)

    if (products !== null){  /// if don't have value
        document.querySelector("#choice_image").value = products[index].image;
        document.querySelector("#choice_product").value = products[index].product;
        document.querySelector("#choice_price").value = products[index].price;
    }else{
        //if have value
        let newProduct = {}
        newProduct.image = document.querySelector("#choice_image").value;
        newProduct.product = document.querySelector("#choice_product").value;
        newProduct.price = document.querySelector("#choice_price").value;
        products.push(newProduct)
    }
}

function createProduct(){
    hide(questions_dialog)  //hide form input

    // create new product
    let newProduct = {}
    newProduct.image = document.querySelector("#choice_image").value;
    newProduct.product = document.querySelector("#choice_product").value;
    newProduct.price = document.querySelector("#choice_price").value;
    products.push(newProduct)
    savePorduct()
    renderProduct()
}



function onDelete(event){
    // remove product

    let index = event.target.parentElement.parentElement.parentElement.dataset.index;
    console.log(products)
    products.splice(index, 1);
    savePorduct()
    renderProduct()

}

function clearData(){
    //clear value in input
    document.querySelector("#choice_image").value = ""
    document.querySelector("#choice_product").value = ""
    document.querySelector("#choice_price").value = ""
}

function onCancel(){
    hide(questions_dialog)
}

renderProduct()
loadProduct()
savePorduct()

