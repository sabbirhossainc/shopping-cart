// Define UI element
let cartList = document.querySelector('ul');
let clearBtn = document.querySelector('#clear_task_btn');
let carts = document.querySelectorAll('.btn');

let products = [{
        name: 'Pen',
        price: '10 BDT',
    },
    {
        name: 'Paper',
        price: '2 BDT',
    },
    {
        name: 'Mouse',
        price: '200 BDT',
    },
    {
        name: 'Keyboard',
        price: '300 BDT',
    }
]

for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        addToCart(products[i]);
    })
}

//Define Event listeners
cartList.addEventListener('click', removeCart);
clearBtn.addEventListener('click', clearCart);

//Define fucntion Add Carts

function addToCart(product) {

    //create li eliment
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(innerHTML = `${product.name} | Price: ${product.price}  `));
    let link = document.createElement('button');
    link.setAttribute('href', '#');
    link.innerHTML = 'Remove';
    li.appendChild(link);
    cartList.appendChild(li);

}

// Remove Cart
function removeCart(e) {
    if (e.target.hasAttribute("href")) {
        if (confirm("Are you sure?")) {
            let ele = e.target.parentElement
            ele.remove();
        }
    }
}

// Clear Cart
function clearCart() {
    while (cartList.firstChild) {
        cartList.removeChild(cartList.firstChild);
    }
}