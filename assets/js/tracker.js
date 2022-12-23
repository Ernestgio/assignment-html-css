const transactions = [];

let globalId = 0;

const balance = "balance";
const income = "income";
const expense = "expense";

const basicBalanceText = "Rp";
const basicIncomeText = "Rp";
const basicExpenseText = "Rp";

const transaction_histories = "transaction__histories";

function refreshHistory() {
  const history = document.getElementById(transaction_histories);
  let newHistoryList = "";

  transactions.forEach((transaction) => {
    let classFlag = transaction.type + "__flag";
    let formattedAmt = transaction.amount.toLocaleString("id-ID");

    newHistoryList += `
    <div class="row g-2 ${classFlag}">
        <div class="col-1">
          <img
            src="assets/icon/trash-4-16.png"
            alt=""
            class="delete__img"
          onclick="deleteTransaction(${transaction.id})"/>
        </div>
        <div class="col-7">
          <div class="">${transaction.desc}</div>
        </div>
        <div class="col-4">
          <div class="transaction__history__amount">${formattedAmt}</div>
        </div>
    </div>
    `;
  });

  console.log(newHistoryList);

  history.innerHTML = newHistoryList;
}

function refreshBalance() {
  const balanceText = document.getElementById(balance);
  const incomeText = document.getElementById(income);
  const expenseText = document.getElementById(expense);

  let balanceAmt = 0;
  let incomeAmt = 0;
  let expenseAmt = 0;

  for (let i = 0; i < transactions.length; i++) {
    const transaction = transactions[i];
    balanceAmt += transaction.amount;

    if (transaction.amount >= 0) {
      incomeAmt += transaction.amount;
    } else {
      expenseAmt += transaction.amount;
    }
  }

  formattedBalanceAmt = balanceAmt.toLocaleString("id-ID");
  formatteedIncomeAmt = incomeAmt.toLocaleString("id-ID");
  formattedExpenseAmt = expenseAmt.toLocaleString("id-ID");

  balanceText.innerHTML = basicBalanceText + formattedBalanceAmt;
  incomeText.innerHTML = basicIncomeText + formatteedIncomeAmt;
  expenseText.innerHTML = basicExpenseText + formattedExpenseAmt;
}

function submitTransaction() {
  const descriptionElement = document.getElementById("description");
  const amountElement = document.getElementById("amount");

  const description = descriptionElement.value;
  const amount = parseInt(amountElement.value);

  const transaction = {
    id: globalId++,
    desc: description,
    amount: amount,
    type: amount >= 0 ? "income" : "expense",
  };

  transactions.push(transaction);

  refreshBalance();
  refreshHistory();
  cleanForm();
}

function cleanForm() {
  const descriptionElement = document.getElementById("description");
  const amountElement = document.getElementById("amount");

  descriptionElement.value = "";
  amountElement.value = "";
}

function deleteTransaction(id) {
  console.log(id + " is going to be deleted");
  const index = transactions.findIndex((transaction) => transaction.id === id);
  transactions.splice(index, 1);

  refreshBalance();
  refreshHistory();
}
