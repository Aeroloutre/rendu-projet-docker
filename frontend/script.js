const API_URL = "/api";

const statusBox = document.getElementById("status");
const itemsContainer = document.getElementById("items-container");
const refreshBtn = document.getElementById("refresh-btn");

async function checkStatus() {
  const response = await fetch(`${API_URL}/status`);
  const data = await response.json();

  statusBox.innerHTML = `${data.message}`;
}

async function loadItems() {
  const response = await fetch(`${API_URL}/items`);

  if (!response.ok) {
    throw new Error(`Erreur: ${response.status}`);
  }

  const items = await response.json();
  displayItems(items);
}

function displayItems(items) {
  itemsContainer.innerHTML = items.map(
    (item) => `
        <div>
            <p>${item.name}</p>
            <p>${item.description}</p>
        </div>
    `
  );
}

refreshBtn.addEventListener("click", () => {
  loadItems()
});

document.addEventListener("DOMContentLoaded", () => {
  checkStatus()

  setInterval(checkStatus, 1000);
});
