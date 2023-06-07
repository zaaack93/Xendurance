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

        document.addEventListener('variant:change', function(event) {
            let variant = event.detail.variant; // Gives you access to the whole variant details
            let product = event.detail.product; // Gives you access to the whole product that the variant belongs to
            let form = event.target; // The form that triggers the change
            if(variant.available){
                let newItem = `&nbsp;&nbsp;|&nbsp;<span  data-smartrr-product-id="${ product.id }" data-smartrr-price-style="overwrite-compare" data-use-quantity="true"><span data-smartrr-compare-price></span><span data-smartrr-regular-price></span><span smartrr-top-price data-smartrr-subscribe-price></span></span>`;
                form.querySelector('button[type="submit"]').querySelector('div').innerHTML+=newItem

                //this button reload the sell price for button add to cart
                const radioBtns = document.querySelectorAll('input[name="purchase_option"]');
                radioBtns.forEach(radioBtn => {
                    const changeEvent = new Event('change');
                    radioBtn.dispatchEvent(changeEvent);
                });
            }
        });
    }
})();