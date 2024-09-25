const input = document.getElementById('itemInput');
const addButton = document.getElementById('addItemButton');
const itemList = document.getElementById('itemList');

function addItem() {
    const itemText = input.value;
    if (itemText.trim() !== '') {
        const li = document.createElement('li');
        const removeButton = document.createElement('button');
        li.textContent = itemText; // Adiciona o texto ao item da lista
        removeButton.textContent = 'Remover'; // Configura o botão de remover
        removeButton.style.marginLeft = '10px';
        removeButton.addEventListener('click', function() { // Adiciona um evento de clique ao botão de remover
            li.remove();
        });

        li.appendChild(removeButton); // Adiciona o botão de remover ao item 'li'
        itemList.appendChild(li); // Adiciona o item 'li' à lista 'ul'
        input.value = ''; // Limpa o input pro próximo item
    }
}

// Adiciona um evento ao botão de adicionar item
addButton.addEventListener('click', addItem);

// Permite adicionar items assim que é pressionado o Enter
input.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addItem();
    }
})