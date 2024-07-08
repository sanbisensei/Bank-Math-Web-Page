// step1 : add eventListener in deposit button
document.getElementById('btn-deposit').addEventListener('click', function(){
    // step2 : get the deposit amount from the deposit field
    // For input field use .value to get the value inside the input field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmount = depositField.value;
    
    // step3 : get the current deposit total
    // eikhane amra .value use korbo na coz eita amra text e show korabo

    const depositTotalElement = document.getElementById('deposit-total');

    const previousDepositTotal = depositTotalElement.innerText;

    // step4 : add numbers tp set the total deposit

    const currentDepositTotal = parseFloat(previousDepositTotal) + parseFloat(newDepositAmount)

    depositTotalElement.innerText = currentDepositTotal;


    // step5 : get ballance current total
    const balanceTotalElemet = document.getElementById('balance-total');
    
    const previousBalanceTotal = balanceTotalElemet.innerText;



    // step6 : calculate current total balance

    const currentBalanceTotal = parseFloat(previousBalanceTotal) + parseFloat(newDepositAmount)


    balanceTotalElemet.innerText = currentBalanceTotal





    // step7 : clear the deposite field
    depositField.value = '';
})