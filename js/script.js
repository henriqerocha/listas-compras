const buttonAdd = document.querySelector('#btn-add');
const buttonRem = document.querySelector('#btn-rem');
const listaItens = document.querySelector('#lista-itens');
const inputNewProduct = document.querySelector('#input-create-product');
const primeiroItem = document.querySelector('.item-produto');
const linhaItem = document.querySelector('.linha-itens');





function addItem(){
    const newProduct = document.createElement('li');
    const removeButton = document.createElement('button');
    const newDiv = document.createElement('div');

    if(inputNewProduct.value.trim() === ''){
        alert('Digite algum produto para adicionar à lista');
    }else{
        newProduct.innerHTML = inputNewProduct.value;

        inputNewProduct.value = '';

        newProduct.classList.add('item-produto');

        //remove o item adicionado

        removeButton.innerHTML = '';
        

        removeButton.classList.add('remove-button');

        newDiv.classList.add('linha-itens');

        newDiv.appendChild(newProduct);
        newDiv.appendChild(removeButton);
        listaItens.appendChild(newDiv);

        function removeItem(){
            newProduct.remove();
            removeButton.remove();
        }

        removeButton.addEventListener('click', removeItem);

        
    }
}




// primeiroItem.parentNode.insertBefore(beforeElement, primeiroItem);




function addButton(){
    addItem();
}

function addEnter(event){
    if(event.key === "Enter"){
        addItem();
    }
}

function limparLista(){
    listaItens.innerHTML = '';
}

inputNewProduct.addEventListener('keyup', addEnter);
buttonAdd.addEventListener('click', addButton);
buttonRem.addEventListener('click', limparLista);