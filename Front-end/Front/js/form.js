document.addEventListener('DOMContentLoaded', function () {
    var btnSubmit = document.getElementById("btn-submit");
    var loanAmount = document.forms['product-form']['loanAmount'];
    var rate = document.forms['product-form']['rate'];
    var tenure = document.forms['product-form']['tenure'];

    btnSubmit.onclick = function (){
        var loanValue = loanAmount.value;
        var rateValue = rate.value;
        var termValue = tenure.value;
        var dataToSend = {
            "loanAmount": loanValue,
            "rate": rateValue,
            "tenure": termValue,
        }
        var xmlHttpRequest = new XMLHttpRequest();
        xmlHttpRequest.onreadystatechange = function () {
            if (xmlHttpRequest.readyState == 4 && xmlHttpRequest.status == 201) {
                var data = JSON.parse(xmlHttpRequest.responseText)
                var calculated = document.getElementById("calculate-loan");
                calculated.innerHTML = `<h1>Loan calculate: ${data}</h1>`
            }
        }
        xmlHttpRequest.open('post', 'http://localhost:8080/api/v1/loans/calculateInterest', false);
        xmlHttpRequest.setRequestHeader('Content-Type', 'application/json');
        xmlHttpRequest.send(JSON.stringify(dataToSend));
    }
})