// Função para adicionar item
function addItem() {
    const itemInput = document.getElementById("itemInput");
    const itemText = itemInput.value.trim();

    if (itemText !== "") {
        const shoppingList = document.getElementById("lista-add-remove");

        const listItem = document.createElement("li");

        const checkBox = document.createElement("input");
        checkBox.type = "checkbox";

        const itemSpan = document.createElement("span");
        itemSpan.textContent = itemText;

        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = "&#128465;"; // Ícone de lixeira
        deleteButton.onclick = function() {
            removeItem(listItem);
        };

        listItem.appendChild(checkBox);
        listItem.appendChild(itemSpan);
        listItem.appendChild(deleteButton);
        shoppingList.appendChild(listItem);

        itemInput.value = "";
        itemInput.focus();
    }
}

// Função para remover item
function removeItem(item) {
    const message = document.getElementById("message");
    item.remove();
    
    // Mostrar mensagem de remoção
    message.style.display = "block";
    setTimeout(() => {
        message.style.display = "none";
    }, 3000);
}