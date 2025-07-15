// Inventory Data (In a real application, this would come from a database)
let inventory = [
    { id: 1, name: "Item 1", category: "Category A", quantity: 10, price: 15.0 },
    { id: 2, name: "Item 2", category: "Category B", quantity: 5, price: 20.0 }
  ];
  
  // Function to show the correct page based on the argument
  function showPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.style.display = 'none');
  
    // Show the selected page
    document.getElementById(pageId).style.display = 'block';
  }
  
  // Function to update the inventory table view
  function updateInventoryTable() {
    const tbody = document.querySelector('#inventoryTable tbody');
    tbody.innerHTML = ''; // Clear existing rows
  
    inventory.forEach(item => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${item.id}</td>
        <td>${item.name}</td>
        <td>${item.category}</td>
        <td>${item.quantity}</td>
        <td>$${item.price}</td>
      `;
      tbody.appendChild(row);
    });
  }
  

 // Add new item to the inventory
document.getElementById('insertForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const name = document.getElementById('itemName').value;
    const category = document.getElementById('itemCategory').value;
    const quantity = parseInt(document.getElementById('itemQuantity').value);
    const price = parseFloat(document.getElementById('itemPrice').value);
  
    fetch('insert.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: `name=${name}&category=${category}&quantity=${quantity}&price=${price}`
    })
    .then(response => response.text())
    .then(data => {
      alert(data);
      updateInventoryTable();  // Refresh the inventory table
      document.getElementById('insertForm').reset();
    })
    .catch(error => {
      console.error('Error:', error);
    });
  });
  
  
 // Update an existing item
document.getElementById('updateForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const id = parseInt(document.getElementById('updateItemId').value);
    const name = document.getElementById('updateItemName').value;
    const category = document.getElementById('updateItemCategory').value;
    const quantity = parseInt(document.getElementById('updateItemQuantity').value);
    const price = parseFloat(document.getElementById('updateItemPrice').value);
  
    fetch('update.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: `id=${id}&name=${name}&category=${category}&quantity=${quantity}&price=${price}`
    })
    .then(response => response.text())
    .then(data => {
      alert(data);
      updateInventoryTable();  // Refresh the inventory table
    })
    .catch(error => {
      console.error('Error:', error);
    });
  });
  
  
 // Delete an item
document.getElementById('deleteForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const id = parseInt(document.getElementById('deleteItemId').value);
  
    fetch('delete.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: `id=${id}`
    })
    .then(response => response.text())
    .then(data => {
      alert(data);
      updateInventoryTable();  // Refresh the inventory table
    })
    .catch(error => {
      console.error('Error:', error);
    });
  });
  
  function updateInventoryTable() {
    fetch('view.php')
      .then(response => response.text())
      .then(data => {
        document.querySelector('#inventoryTable tbody').innerHTML = data;
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
  
  
  // Initialize the app by showing the inventory page
  showPage('view');
  updateInventoryTable();
  