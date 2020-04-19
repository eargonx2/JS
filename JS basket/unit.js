let cart =  {
 'id1' : {
     "name" : "tovar1",
     "count" : 0
 },
 'id2' : {
    "name" : "tovar2",
    "count" : 0
}
}

document.onclick = event => {
    
    if (event.target.classList.contains("plus")) {
        plusFunction(event.target.dataset.id);
    }
    if (event.target.classList.contains("minus")) {
        minusFunction(event.target.dataset.id);
    }
}

//увлечение количества товаров
const plusFunction = id => {
    cart[id]['count']++;
    renderCart();
}

//уменьшение количества товаров
const minusFunction = id => {
    if (cart[id]['count'] - 1 <= 0) {
        deleteFunction(id);
        return true;
    }
    cart[id]['count']--;
    renderCart();
}

//удаление товаров
const deleteFunction = id => {
    delete cart[id];
    renderCart();
}

const renderCart = () => {
    console.log(cart);
}
renderCart();