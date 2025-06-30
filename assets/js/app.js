const items = [
    { name: "Diamantschwert", category: "Normal", value: 1000 },
    { name: "Admin Spitzhacke", category: "Admin", value: 100000 },
    { name: "Goldapfel", category: "Rare", value: 5000 },
    { name: "Holzschwert", category: "Normal", value: 50 },
    { name: "Endportal Frame", category: "Admin", value: 99999 },
    { name: "Verzaubertes Buch", category: "Rare", value: 3000 }
];

function renderItems(filteredItems) {
    const tableBody = document.getElementById("itemTable");
    tableBody.innerHTML = "";

    filteredItems.forEach(item => {
        const row = `<tr>
                    <td>${item.name}</td>
                    <td>${item.category}</td>
                    <td>${item.value}</td>
                </tr>`;
        tableBody.innerHTML += row;
    });
}

function filterItems() {
    const filter = document.getElementById("filter").value;
    if (filter === "Alle") {
        renderItems(items);
    } else {
        const filtered = items.filter(item => item.category === filter);
        renderItems(filtered);
    }
}

// Initiale Anzeige
renderItems(items);
