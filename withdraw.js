/*
1. add event handler with the withdraw button
2.get the withdraw amount from the withdraw field
3. Get pewvious withdraw Total
4.calculate total withdraw amount
4-5.set total withdraw amount
5.get the previous balance total
6.calculate new balance total
6-5. set the new balancetotal
7.clear the input field
*/


// step-1
document.getElementById('btn-withdraw').addEventListener('click', function(){
// step-2
const withdrawField = document.getElementById('withdraw-field');
const newWithdrawAmount = withdrawField.value;
  
// step-3
const withdrawTotalElement = document.getElementById('withdraw-total');

const previousWithdrawTotal = withdrawTotalElement.innerText;

// step-4
const currentWithdrawTotal = parseFloat(previousWithdrawTotal) + parseFloat(newWithdrawAmount);
withdrawTotalElement.innerText = currentWithdrawTotal;
// step-5
const balanceTotalElemet = document.getElementById('balance-total');

const previousBalanceTotal = balanceTotalElemet.innerText;

// step-6
const newBalanceTotal = parseFloat(previousBalanceTotal) - parseFloat(newWithdrawAmount)

balanceTotalElemet.innerText = newBalanceTotal;
// step-7
withdrawField.value = '';
})