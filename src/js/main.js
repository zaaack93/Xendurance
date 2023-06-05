(() => {
    if(window.location.pathname.includes('/products')){
        document.addEventListener('cart:change', function(event) {
            let cart = event.detail.cart;
            document.querySelector('.product').classList.remove('cart-has-membership')
            cart?.items.forEach(item => {
            if(item.id==40692118094012){
                document.querySelector('.product').classList.add('cart-has-membership')
            }
            });
        });
    }
})();