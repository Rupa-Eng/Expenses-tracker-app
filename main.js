let expenses = [];
let totalAmount = 0;

const categorySelect = document.getElementById('category-select');
const amountInput = document.getElementById('amount-input');
const dateInput = document.getElementById('date-input');
const addBtn = document.getElementById('add-btn');
const expensesTableBody = document.getElementById('expenses-table-body');
const totalAmountCell = document.getElementById('total-amount');

addBtn.addEventListener('click', function () {
    const category = categorySelect.value;
    const amount = Number(amountInput.value);
    const date = dateInput.value;

    // Validate inputs
    if (category === '') {
        alert('Please select a category');
        return;
    } else if (isNaN(amount) || amount <= 0) {
        alert('Please enter a valid amount');
        return;
    } else if (date === '') {
        alert('Please select a date');
        return;
    }

    // Add expense to the array
    const expense = { category, amount, date };
    expenses.push(expense);

    // Update total amount
    totalAmount += amount;
    totalAmountCell.textContent = totalAmount;

    // Insert a new row in the table
    const newRow = expensesTableBody.insertRow();

    // Insert cells into the new row
    const categoryCell = newRow.insertCell();
    const amountCell = newRow.insertCell();
    const dateCell = newRow.insertCell();
    const deleteCell = newRow.insertCell();

    // Populate the cells with data
    categoryCell.textContent = category;
    amountCell.textContent = amount;
    dateCell.textContent = date;

    // Create delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteCell.appendChild(deleteBtn);

    // Add event listener for deleting the row
    deleteBtn.addEventListener('click', function () {
        // Remove the expense from the array
        const index = expenses.indexOf(expense);
        if (index > -1) {
            expenses.splice(index, 1);
        }

        // Update total amount
        totalAmount -= expense.amount;
        totalAmountCell.textContent = totalAmount;

        // Remove the row from the table
        newRow.remove();
    });
});

// Populate the table if there are existing expenses
for (const expense of expenses) {
    totalAmount += expense.amount;
    totalAmountCell.textContent = totalAmount;

    const newRow = expensesTableBody.insertRow();
    const categoryCell = newRow.insertCell();
    const amountCell = newRow.insertCell();
    const dateCell = newRow.insertCell();
    const deleteCell = newRow.insertCell();
    
    categoryCell.textContent = expense.category;
    amountCell.textContent = expense.amount;
    dateCell.textContent = expense.date;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteCell.appendChild(deleteBtn);

    deleteBtn.addEventListener('click', function () {
        const index = expenses.indexOf(expense);
        if (index > -1) {
            expenses.splice(index, 1);
        }

        totalAmount -= expense.amount;
        totalAmountCell.textContent = totalAmount;

        newRow.remove();
    });
}
