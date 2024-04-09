const buttonAdd = document.querySelector('#btn-add');
const buttonRem = document.querySelector('#btn-rem');
const listaItens = document.querySelector('#lista-itens');
const inputNewProduct = document.querySelector('#input-create-product');




function addItem(){
    const newProduct = document.createElement('li');

    if(inputNewProduct.value.trim() === ''){
        alert('Digite algum produto para adicionar à lista');
    }else{
        newProduct.innerHTML = inputNewProduct.value;
    
        listaItens.appendChild(newProduct);
    
        inputNewProduct.value = '';

        newProduct.classList.add('item-produto');
    }

    function removeItem(){
        listaItens.removeChild(newProduct);
    }

    buttonRem.addEventListener('click', removeItem);
}



function addButton(){
    addItem();
}

function addEnter(event){
    if(event.key === "Enter"){
        addItem();
    }
}

inputNewProduct.addEventListener('keyup', addEnter);
buttonAdd.addEventListener('click', addButton);