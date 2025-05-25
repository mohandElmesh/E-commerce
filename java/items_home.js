fetch("java/items.json")
    .then(response => response.json())
    .then(data =>{
        const swiper_sale_section=document.getElementById("swiper_items_sale")
        const other_product_swiper=document.getElementById("other_product_swiper")
        const other_product_swiper2=document.getElementById("other_product_swiper2")
        
        data.forEach(product => {
            if(product.old_price){
                all_product_json=data
                const precentage_sale=Math.floor((product.old_price - product.price)/ product.old_price *100)
                swiper_sale_section.innerHTML +=`
                
                   <div class="product swiper-slide">
                        <span class="sale_present">%${precentage_sale}</span>

                        <div class="product_icons">
                            <i onClick="add_to_cart(${product.id},this)" class="fa-solid fa-shop"></i>
                            <i class="fa-solid fa-cart-arrow-down"></i>
                            <i class="fa-solid fa-truck"></i>
                        </div>
                       <div class="img_product">
                            <img src="${product.img}" alt="">
                            <img class="image_hover" src="${product.img_hover}" alt="">
                        </div>

                        <h3 class="name_product"><a href="">${product.name}</a></h3>
                        <div class="stars">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <div class="price">
                            <p><span>$${product.price}</span></p>
                            <p class="old_price">$${product.old_price}</p>
                        </div>
                    </div>
                
                
                `
            }
        });

        data.forEach(product => {
                all_product_json=data
                other_product_swiper.innerHTML +=`
                
                   <div class="product swiper-slide">

                        <div class="product_icons">
                            <i onClick="add_to_cart(${product.id},this)" class="fa-solid fa-shop"></i>
                            <i class="fa-solid fa-cart-arrow-down"></i>
                            <i class="fa-solid fa-truck"></i>
                        </div>
                       <div class="img_product">
                            <img src="${product.img}" alt="">
                            <img class="image_hover" src="${product.img_hover}" alt="">
                        </div>

                        <h3 class="name_product"><a href="">${product.name}</a></h3>
                        <div class="stars">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <div class="price">
                            <p><span>$${product.price}</span></p>
                            
                        </div>
                    </div>
                
                
                `
            }
        );

        data.forEach(product => {
            all_product_json=data
            other_product_swiper2.innerHTML +=`
            
               <div class="product swiper-slide">

                    <div class="product_icons">
                        <i onClick="add_to_cart(${product.id},this)" class="fa-solid fa-shop"></i>
                        <i class="fa-solid fa-cart-arrow-down"></i>
                        <i class="fa-solid fa-truck"></i>
                    </div>
                   <div class="img_product">
                        <img src="${product.img}" alt="">
                        <img class="image_hover" src="${product.img_hover}" alt="">
                    </div>

                    <h3 class="name_product"><a href="">${product.name}</a></h3>
                    <div class="stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>
                    <div class="price">
                        <p><span>$${product.price}</span></p>
                        
                    </div>
                </div>
            
            
            `
        }
    );

       
       
    })