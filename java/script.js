// open and close cart


var cart=document.querySelector(".cart")

function open_cart(){
    cart.classList.add("active")
}
function close_cart(){
    cart.classList.remove("active")
}
// open and close menu
const menu=document.getElementById("menu")
function open_menu(){
    menu.classList.add("active")
}
function close_menu(){
    menu.classList.remove("active")
}
// price and quantity


const price_car_head=document.querySelector(".price_car_head")
const count_item=document.querySelector(".count_item")

const price_cart_total=document.querySelector(".price_cart_total")
const quantity_in_cart=document.querySelector(".quantity_in_cart")



// add items to cart


var all_product_json;

const items_in_cart=document.querySelector(".items_in_cart")
const products_cart=[]


function add_to_cart(id,btn){
    products_cart.push(all_product_json[id])
    btn.classList.add("active")
    console.log(products_cart)
    get_itme_incart()
}

function get_itme_incart(){
    let total_price=0
    let item_c=""
    for (let i = 0; i < products_cart.length; i++) {
        item_c +=`
                <div class="item-cart">
                <img src="${products_cart[i].img}" alt="#">
                <div class="content">
                    <h4>${products_cart[i].name}</h4>
                    <p class="price_cart">$${products_cart[i].price}</p>
                </div>
                <button onClick="delete_item(${i})" class="trash"><i class="fa-solid fa-trash"></i></button>
            </div>
        
        `
        total_price += products_cart[i].price
        
    }
    items_in_cart.innerHTML=item_c
    price_car_head.innerHTML="$" + total_price
    count_item.innerHTML=products_cart.length

    price_cart_total.innerHTML="$"+ total_price
    quantity_in_cart.innerHTML=`(${products_cart.length} item in cart)`
  
}

function delete_item(index){
    products_cart.splice(index,1)
    get_itme_incart()

    let add_tocart_button=document.querySelectorAll(".fa-shop")

    for (let i = 0; i < add_tocart_button.length; i++) {
        add_tocart_button[i].classList.remove("active")
        
        products_cart.forEach(product => {
            if(product.id==i){
                add_tocart_button[i].classList.add("active")
            }
        });
    }
}

// back to top section

var back_to_top=document.querySelector(".back_to_top")

back_to_top.addEventListener("click",function(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
})