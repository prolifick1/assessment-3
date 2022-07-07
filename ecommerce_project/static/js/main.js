//determine clicked bytton based on event bubbling on parent
let ulElement = document.querySelector('.items-list');

let cart = [];
//todo: use currency library instead of conversion to cents

//todo: send item to server, render cart page

let item = {}
ulElement.addEventListener('click', function(event) {
  let targetClasses = Array.from(event.target.classList);
  console.log(targetClasses)
   
  if(targetClasses.includes('dropdown-item')) {
    item = {};
    let itemInfo = event.target.closest('div.item-info');
    let itemName = itemInfo.querySelector('h2').innerText;
    let quantity = Number(event.target.innerText);
    let priceText = itemInfo.querySelector('.item-price').innerText;
    let parsedPrice = Number((priceText.replace(/[^0-9.-]+/g,"")));
    let priceCents = parsedPrice * 100; 
    item['itemName'] = itemName;
    item['quantity'] = quantity;
    item['priceCents'] = priceCents;
    console.log('cart, ' , cart);
    console.log('item', item);
  }
  if(targetClasses.includes('btn-cart')) {
    console.log(item);
    cart.push(item);
  }
    console.log(cart);
});
