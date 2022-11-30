const table = document.querySelector("#table-container");
const questions_dialog = document.querySelector("#questions-dialog")
let products =[
    
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
        // td1.textContent = products[index].image
        // td1.dataset = index
        
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
        console.log(tr)
    }
    
}

function createProduct(){
    hide(questions_dialog)

    let newProduct = {}
    newProduct.image = document.querySelector("#choice_image").value;
    newProduct.product = document.querySelector("#choice_product").value;
    newProduct.price = document.querySelector("#choice_price").value;
    products.push(newProduct)
    savePorduct()
    renderProduct()
    

}

function onDelete(event){
    let index = event.target.parentElement.parentElement.parentElement.dataset.index;
    console.log(products)
    products.splice(index, 1);
    // console.log(products)
    savePorduct()
    renderProduct()

}

function onCancel(){
    hide(questions_dialog)
}
renderProduct()
loadProduct()
// savePorduct()
// questions_dialog.addEventListener("click",show)
