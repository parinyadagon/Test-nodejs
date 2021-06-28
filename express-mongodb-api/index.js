function loadData() {
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://localhost:3000/country");
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            var trHTML = '';
            const objects = JSON.parse(this.responseText);
            for (let object of objects) {
                trHTML += '<tr>';
                trHTML += '<td>' + object['msg'] + '</td>';
                trHTML += '<td>' + '</td>';
                trHTML += '<td>' + '</td>';
                trHTML += '<td>' + object['length'] + '</td>';
                trHTML += '</tr>';
            }
            document.getElementById("myTable").innerHTML = trHTML;
        }
    }

}

loadData();

function createData () {
    const country = document.getElementById("inputdata").value;
    console.log(country.length);

    const xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://localhost:3000/country/add");
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhttp.send(JSON.stringify({
        "msg": country,
        "length": country.length
    }));
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200){
            const objects = JSON.parse(this.responseText);
            loadData();
        }
    }
}