document.addEventListener("DOMContentLoaded", function () {
    var btnSubmit = document.getElementById("btn-submit");
    var txtloanAmount = document.forms['product-form']['loan'];
    var txtTenure = document.forms['product-form']['tenure'];
    var txtInterestRate = document.forms['product-form']['interest'];

    btnSubmit.onclick = function () {
        var loan = txtloanAmount.value;
        var tenure = txtTenure.value;
        var interestRate = txtInterestRate.value;

        var dataToSend = {
            "loan": loan,
            "tenure": tenure,
            "interest": interestRate
        }

        var xmlHttpRequest = new XMLHttpRequest();

        xmlHttpRequest.onreadystatechange = function () {
            if (xmlHttpRequest.readyState == 4 && xmlHttpRequest.status == 201) {
                alert('Product Created!');
                window.location.href = "/EJB-clientPrepare/index.html";
            }
        }
        xmlHttpRequest.open('post', 'http://localhost:8080/api/v1/products', false);
        xmlHttpRequest.setRequestHeader('Content-Type', 'application/json');
        xmlHttpRequest.send(JSON.stringify(dataToSend));
    }
})