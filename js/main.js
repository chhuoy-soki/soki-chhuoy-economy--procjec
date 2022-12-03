const questions_dialog = document.querySelector("#questions-dialog")

let products  = []

function StorageProduct(){
    //set localStorage to brovser
    localStorage.setItem("products",JSON.stringify(products))
}

function loadProduct(){
    const productsStorage = JSON.parse(localStorage.getItem("products"));
    if (productsStorage != null){
      products = productsStorage
    }
    else{
        localStorage.removeItem("products")
    }
}

function showButton(element){
    //show dialog
    element.style.display =  "block"
}
function hide(element){
    //hide dialog
    element.style.display = "none"
}

function onAddButton(){
    //click button to show dialog
    showButton(questions_dialog)
}

function createProduct(){
    //show dialog when click create product
    hide(questions_dialog)
}

function onCancel(){
    //hide dialog when click cancel
    hide(questions_dialog)
}

const container = document.querySelector('.card')

function displayProducts(arr) {
    //create card for display to brovser

    for (let index = 0; index < products.length; index++) {
        //create div and append element
        let card = document.createElement('div')
        card.className = 'card-btn'
        let img = document.createElement("div");
        img.className = "image";
        let image = document.createElement('img')
        image.src = products[index].image
        img.appendChild(image)

        let p1 = document.createElement("p");
        p1.setAttribute("class","list")
        p1.textContent = products[index].name
        img.appendChild(p1);

        //create pharagraph
        let p2 = document.createElement("p");
        p2.textContent = products[index].price + "$"
        img.appendChild(p2)
        let icon = document.createElement("div");
        icon.className = "icon";

        let icon1 = document.createElement("i");
        icon1.className = "material-icons"
        icon1.textContent = "shopping_cart";
        icon.appendChild(icon1)
        
        //creat button
        let div_image = document.createElement("div");
        div_image.setAttribute("id","button");
        let button = document.createElement("button");
        button.textContent = "Buy now";

        let link_detall = document.createElement("a");
        link_detall.href = "../detall/index.html"
        link_detall.appendChild(button)
        button.addEventListener("click",detallProduct)
        button.dataset.index = index
        // console.log(button)
        

        //append element in div_image
        div_image.appendChild(button)
        card.appendChild(img)
        card.appendChild(div_image)
        container.appendChild(card)
    }
}

function researchProduct(){

////userInput search find a product

    let card = document.querySelectorAll(".card .card-btn");
   
    let word = getSearch.value;
    let text = word.toLowerCase()
    for (let value of card){
        let valueOfSearch = value.textContent.toLowerCase();
        let displyText = ""
        if (valueOfSearch.indexOf(text)>-1){
            displyText = "block";
        }
        else{
            displyText = "none";
        }
        value.style.display = displyText;
        console.log(value);
        
    }
}


let products_detall = []

const dialog = document.querySelector("dialog")
function detallProduct(event){
    loadProduct()
    showButton(questions_dialog)
    let index = event.target.dataset.index;
    let product = products[index]
    products_detall.push(product);
    localStorage.setItem("products_detall", JSON.stringify(products_detall));


    let card = document.querySelector(".detall");
    card.remove();

    let detall = document.createElement("div");
    detall.className = "detall";

    for(let product of products_detall){
        let div1 = document.createElement("div");
        div1.className = "detall-item";

        let div2 = document.createElement("div");
        div2.className = "item-name";

        //create image element
        let image = document.createElement("img");
        image.id = "image-detall";
        image.src = product.image
        div2.appendChild(image)

        //create div and append element in div
        let div3 = document.createElement("div");
        div3.className = "detall-item-name";

        //create p
        let p1 = document.createElement("p");
        p1.textContent = "Name product:" + "    " + product.name
        div3.appendChild(p1)

        let p2 = document.createElement("p");
        p2.textContent ="Price:" + "   " + product.price + "$"
        div3.appendChild(p2)

        //create lable element
        let label3 = document.createElement("label");
        label3.textContent = "Choice Size"

        div3.appendChild(label3)

        //creat selection element
        let selection = document.createElement("select");
        let option = document.createElement("option");
        option.textContent = "choise size";

        let option1 = document.createElement("option");
        option1.textContent = "S";

        let option2 = document.createElement("option");
        option1.textContent = "M";

        selection.appendChild(option);
        selection.appendChild(option1);
        selection.appendChild(option2)
        div3.appendChild(selection)

        let label1 = document.createElement("label");
        label1.textContent = "Your address";
        let input1 = document.createElement("input");
        input1.type = "text";
        input1.placeholder ="your address";

        let label2 = document.createElement("label");
        label2.textContent = "Order";
        let input2 = document.createElement("input");
        input2.type = "nunber";
        input2.placeholder ="order";

        let p3 = document.createElement("p");
        p3.textContent = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse voluptate doloribus atque suscipit! Iure,porro, omnis obcaecati doloribus provident totam ex officiis accusamus vel,";

        div3.appendChild(label1);
        div3.appendChild(input1);

        div3.appendChild(label2);
        div3.appendChild(input2);

        div3.appendChild(p3);
        

        //create button
        let div4 = document.createElement("div");
        div4.className = "item-button";
        let button1 = document.createElement("button");
        button1.textContent = "save";
        button1.addEventListener("click",onCancel)

        let button2 = document.createElement("button");
        button2.textContent = "Cancel";
        button2.addEventListener("click",onCancel)

        div4.appendChild(button2)
        div4.appendChild(button1)

        div1.appendChild(div2);
        div1.appendChild(div3);
        detall.appendChild(div1)
        detall.appendChild(div4)

        console.log(detall)

        dialog.appendChild(detall)
    }
    products_detall =[]
   
}

let getSearch = document.querySelector(".input-text").querySelector("input");   //input
getSearch.addEventListener("keyup",researchProduct)  // keyup event to alert text search



researchProduct();
loadProduct()
StorageProduct() //save loacal storage in brovser
displayProducts()   //display card
