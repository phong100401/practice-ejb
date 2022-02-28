document.addEventListener('DOMContentLoaded', function () {
    var tableBody =document.getElementById("my-table-data");
    var xmlHttpRequest = new XMLHttpRequest();
    xmlHttpRequest.onreadystatechange = function (){
        if (xmlHttpRequest.readyState == 4 && xmlHttpRequest.status == 200){
            var data = JSON.parse(xmlHttpRequest.responseText);
            var tableContent = '';
            for (let i = 0; i < data.length;i++){
                tableContent += ` <tr>
                    <td>${data[i].name}</td>
                    <td>${data[i].price}</td>
                    <td>${data[i].thumbnail}</td>
                    <td><button class="btn-detail" id=${data[i].id}>Detail</button>
                    | <button class="btn-edit">Edit</button>
                    | <button>Delete</button>
                    </td>
                </tr>`
            }
            tableBody.innerHTML = tableContent;
        }
    }
    xmlHttpRequest.open('get', 'http://localhost:8080/api/v1/products', false);
    xmlHttpRequest.send();
})
//Detail
document.addEventListener('click', function (e) {
    if(e.target && e.target.className == 'btn-detail'){
        var id = e.target.id;
        var xmlHttpRequest = new XMLHttpRequest();
        var newContent = '';
        var detailBody = document.getElementById("detail-body");
        var table = document.getElementById("list-table");
        xmlHttpRequest.onreadystatechange = function (){
            if (xmlHttpRequest.readyState == 4 && xmlHttpRequest.status == 200){
                var detaiData = JSON.parse(xmlHttpRequest.responseText)
                    newContent += ` <button class="back-btn">Back</button>
                                    <form class="w3-container">
                                    <label class="w3-text-blue"><b>Name</b></label>
                                    <input class="w3-input w3-border" value="${detaiData.name}" type="text" disabled>
                                    <label class="w3-text-blue"><b>Price</b></label>
                                    <input class="w3-input w3-border" value="${detaiData.price}" type="text" disabled>
                                    <label class="w3-text-blue"><b>Thumbnail</b></label>
                                    <input class="w3-input w3-border" value="${detaiData.thumbnail}" type="text" disabled>
                                     <label class="w3-text-blue"><b>Status</b></label>
                                    <input class="w3-input w3-border" value="${detaiData.status}" type="text" disabled>
                                    </form>`
                detailBody.innerHTML = newContent;
                table.innerHTML = '';
            }
        }
        xmlHttpRequest.open('get', `http://localhost:8080/api/v1/products/detail/${id}`, false);
        xmlHttpRequest.send();
    }
})

document.addEventListener('click',function (e){
    if(e.target && e.target.className == 'back-btn'){
        window.location.reload()
    }
})

//Edit
