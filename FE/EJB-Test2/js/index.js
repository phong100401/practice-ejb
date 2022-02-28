document.addEventListener('DOMContentLoaded', function () {

    var tableBody = document.getElementById('my-table-data');
    var xmlHttpRequest = new xmlHttpRequest();

    xmlHttpRequest.onreadystatechange = function () {
        if (xmlHttpRequest.readyState == 4 && xmlHttpRequest.status == 200) {
            var data = JSON.parse(xmlHttpRequest.responseText);
            var newContent = '';
            for (let i = 0; i < data.length; i++) {
                newContent += `<tr>
                <td>${data[i].loan}</td>
                <td>${data[i].interest}</td>
                <td>${data[i].tenure}</td>
                </tr>`;
            }
            tableBody.innerHTML = newContent;
        }
    }
    xmlHttpRequest.open('get','http://localhost:8080/api/v1/products', false);
    xmlHttpRequest.send();
})