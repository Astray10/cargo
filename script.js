let totalWeight = 0; // Initialize total weight
let cargoList = []; // To store cargo items

document.getElementById('cargoForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get input values
    const ownerName = document.getElementById('ownerName').value;
    const contactNumber = document.getElementById('contactNumber').value;
    const cargoName = document.getElementById('cargoName').value;
    const cargoWeight = parseFloat(document.getElementById('cargoWeight').value);
    const cargoStatus = document.getElementById('cargoStatus').value;

    // Add new cargo to the cargo list
    const newCargo = {
        ownerName,
        contactNumber,
        cargoName,
        cargoWeight,
        cargoStatus
    };

    cargoList.push(newCargo);
    updateCargoTable();

    // Clear input fields
    document.getElementById('cargoForm').reset();
});

function updateCargoTable() {
    const tableBody = document.getElementById('cargoTableBody');
    tableBody.innerHTML = ''; // Clear existing rows
    totalWeight = 0; // Reset total weight

    cargoList.forEach((cargo, index) => {
        totalWeight += cargo.cargoWeight;
        const newRow = `<tr>
                            <td>${cargo.ownerName}</td>
                            <td>${cargo.cargoName}</td>
                            <td>${cargo.cargoWeight.toFixed(2)}</td>
                            <td>${cargo.cargoStatus}</td>
                            <td>
                                <button class="edit-button" onclick="editCargo(${index})">Edit</button>
                                <button class="delete-button" onclick="deleteCargo(${index})">Delete</button>
                            </td>
                        </tr>`;
        tableBody.innerHTML += newRow;
    });

    document.getElementById('totalWeight').innerText = totalWeight.toFixed(2);
}

function editCargo(index) {
    const cargo = cargoList[index];
    document.getElementById('ownerName').value = cargo.ownerName;
    document.getElementById('contactNumber').value = cargo.contactNumber;
    document.getElementById('cargoName').value = cargo.cargoName;
    document.getElementById('cargoWeight').value = cargo.cargoWeight;
    document.getElementById('cargoStatus').value = cargo.cargoStatus;

    // Remove the cargo from the list for editing
    cargoList.splice(index, 1);
    updateCargoTable();
}

function deleteCargo(index) {
    cargoList.splice(index, 1);
    updateCargoTable();
}

function searchCargo() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const filteredCargoList = cargoList.filter(cargo => {
        return (
            cargo.ownerName.toLowerCase().includes(searchInput) ||
            cargo.cargoName.toLowerCase().includes(searchInput)
        );
    });

    const tableBody = document.getElementById('cargoTableBody');
    tableBody.innerHTML = ''; // Clear existing rows
    filteredCargoList.forEach((cargo) => {
        const newRow = `<tr>
                            <td>${cargo.ownerName}</td>
                            <td>${cargo.cargoName}</td>
                            <td>${cargo.cargoWeight.toFixed(2)}</td>
                            <td>${cargo.cargoStatus}</td>
                            <td>
                                <button class="edit-button" onclick="editCargo(${cargoList.indexOf(cargo)})">Edit</button>
                                <button class="delete-button" onclick="deleteCargo(${cargoList.indexOf(cargo)})">Delete</button>
                            </td>
                        </tr>`;
        tableBody.innerHTML += newRow;
    });
}

document.getElementById('printButton').onclick = function () {
    window.print(); // Trigger the print dialog
};
let totalWeight = 0; // Initialize total weight
let cargoList = []; // To store cargo items

document.getElementById('cargoForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get input values
    const ownerName = document.getElementById('ownerName').value;
    const contactNumber = document.getElementById('contactNumber').value;
    const cargoName = document.getElementById('cargoName').value;
    const cargoWeight = parseFloat(document.getElementById('cargoWeight').value);
    const cargoStatus = document.getElementById('cargoStatus').value;

    // Add new cargo to the cargo list
    const newCargo = {
        ownerName,
        contactNumber,
        cargoName,
        cargoWeight,
        cargoStatus
    };

    cargoList.push(newCargo);
    updateCargoTable();

    // Clear input fields
    document.getElementById('cargoForm').reset();
});

function updateCargoTable() {
    const tableBody = document.getElementById('cargoTableBody');
    tableBody.innerHTML = ''; // Clear existing rows
    totalWeight = 0; // Reset total weight

    cargoList.forEach((cargo, index) => {
        totalWeight += cargo.cargoWeight;
        const newRow = `<tr>
                            <td>${cargo.ownerName}</td>
                            <td>${cargo.cargoName}</td>
                            <td>${cargo.cargoWeight.toFixed(2)}</td>
                            <td>${cargo.cargoStatus}</td>
                            <td>
                                <button class="edit-button" onclick="editCargo(${index})">Edit</button>
                                <button class="delete-button" onclick="deleteCargo(${index})">Delete</button>
                            </td>
                        </tr>`;
        tableBody.innerHTML += newRow;
    });

    document.getElementById('totalWeight').innerText = totalWeight.toFixed(2);
}

function editCargo(index) {
    const cargo = cargoList[index];
    document.getElementById('ownerName').value = cargo.ownerName;
    document.getElementById('contactNumber').value = cargo.contactNumber;
    document.getElementById('cargoName').value = cargo.cargoName;
    document.getElementById('cargoWeight').value = cargo.cargoWeight;
    document.getElementById('cargoStatus').value = cargo.cargoStatus;

    // Remove the cargo from the list for editing
    cargoList.splice(index, 1);
    updateCargoTable();
}

function deleteCargo(index) {
    cargoList.splice(index, 1);
    updateCargoTable();
}

function searchCargo() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const filteredCargoList = cargoList.filter(cargo => {
        return (
            cargo.ownerName.toLowerCase().includes(searchInput) ||
            cargo.cargoName.toLowerCase().includes(searchInput)
        );
    });

    const tableBody = document.getElementById('cargoTableBody');
    tableBody.innerHTML = ''; // Clear existing rows
    filteredCargoList.forEach((cargo) => {
        const newRow = `<tr>
                            <td>${cargo.ownerName}</td>
                            <td>${cargo.cargoName}</td>
                            <td>${cargo.cargoWeight.toFixed(2)}</td>
                            <td>${cargo.cargoStatus}</td>
                            <td>
                                <button class="edit-button" onclick="editCargo(${cargoList.indexOf(cargo)})">Edit</button>
                                <button class="delete-button" onclick="deleteCargo(${cargoList.indexOf(cargo)})">Delete</button>
                            </td>
                        </tr>`;
        tableBody.innerHTML += newRow;
    });
}

document.getElementById('printButton').onclick = function () {
    window.print(); // Trigger the print dialog
};
// Check if the user is logged in (this is a simple demo)
const isLoggedIn = false; // Change this based on your login logic
if (!isLoggedIn) {
    window.location.href = "login.html"; // Redirect to login page
}
