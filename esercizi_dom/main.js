// Array per memorizzare i contatti
let contacts = [];

// Funzione per mostrare o nascondere la lista dei contatti
function toggleContactList() {
    let contactList = document.getElementById("contactList");
    contactList.classList.toggle("hidden");
}

// Funzione per aggiungere un contatto
function addContact() {
    let nameInput = document.getElementById("newContactName");
    let phoneInput = document.getElementById("newContactPhone");
    let name = nameInput.value;
    let phone = phoneInput.value;
    
    // Verifica se entrambi i campi sono stati compilati
    if (name && phone) {
        let contact = {
            name: name,
            phone: phone
        };
        
        contacts.push(contact);
        
        // Aggiorna la visualizzazione della lista contatti
        displayContacts();
        
        // Resetta i campi di input
        nameInput.value = "";
        phoneInput.value = "";
    }
}

// Funzione per rimuovere un contatto
function removeContact(index) {
    contacts.splice(index, 1);
    
    // Aggiorna la visualizzazione della lista contatti
    displayContacts();
}

// Funzione per visualizzare i contatti nella lista
function displayContacts() {
    let contactList = document.getElementById("contacts");
    contactList.innerHTML = "";
    
    for (let i = 0; i < contacts.length; i++) {
        let contact = contacts[i];
        
        let listItem = document.createElement("li");
        listItem.innerHTML = contact.name + " - " + contact.phone;
        
        let removeButton = document.createElement("button");
        removeButton.innerHTML = "Rimuovi";
        removeButton.addEventListener("click", function() {
            removeContact(i);
        });
        
        listItem.appendChild(removeButton);
        contactList.appendChild(listItem);
    }
}

// Aggiungi event listener al pulsante "Mostra/Nascondi Lista Contatti"
let toggleButton = document.getElementById("toggleButton");
toggleButton.addEventListener("click", toggleContactList);

// Aggiungi event listener al pulsante "Aggiungi"
let addButton = document.getElementById("addButton");
addButton.addEventListener("click", addContact);

// Inizializza la visualizzazione della lista contatti
displayContacts();
