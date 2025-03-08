let incomeTotal = 0;
let expenseTotal = 0;
let historyList = document.getElementById("historyList");
let fullHistory = [];

function addTransaction() {
    let type = document.getElementById("transactionType").value;
    let category = document.getElementById("category").value;
    let amount = parseFloat(document.getElementById("amount").value);
    
    if (category && amount > 0) {
        if (type === "Income") {
            incomeTotal += amount;
        } else {
            expenseTotal += amount;
        }
        fullHistory.unshift({ type, category, amount }); // Add to full history
        updateHistory();
        updateSummary();
        clearFields();
    }
}

function updateSummary() {
let finalBalance = incomeTotal - expenseTotal;

// Update the total income and expense values in the summary
document.getElementById("incomeSummary").innerText = "Total Income: Rs." + incomeTotal;
document.getElementById("expenseSummary").innerText = "Total Expense: Rs." + expenseTotal;

let balanceElement = document.getElementById("finalBalance");
balanceElement.innerText = "Final Balance: Rs." + finalBalance;
balanceElement.style.color = finalBalance < 0 ? "#dc3545" : "white";
}
function updateHistory() {
historyList.innerHTML = ""; // Clear previous list
fullHistory.forEach(entry => { // Loop through all transactions
let li = document.createElement("li");
li.innerText = `${entry.type}: ${entry.category} = Rs.${entry.amount}`;

// Apply background color based on type
//li.style.backgroundColor = entry.type === "Income" ? "rgba(40, 167, 69, 0.5)" : "rgba(220, 53, 69, 0.5)";
li.style.color = "white"; 
li.style.fontWeight = "bold";

historyList.appendChild(li);
});
}


function clearFields() {
    document.getElementById("category").value = "";
    document.getElementById("amount").value = "";
}

function updateSelectColor() {
    let select = document.getElementById("transactionType");
    select.style.backgroundColor = select.value === "Income" ? "#28a745" : "#dc3545";
}