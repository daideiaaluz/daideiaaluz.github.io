function showTable(tabela_content){
    var t = document.getElementById("table-content");

    for (var i = 0; i < tabela_content.length; i++) {
        let d = tabela_content[i];
        let values = Object.values(d);
        var newRow = t.insertRow(-1);
        last = values.pop();

        for (const value of values) {
            if (value != last) {
                newCell = newRow.insertCell(-1);
                newText = document.createTextNode(value);
                newCell.appendChild(newText);
            }
        }
        // Add link
        newCell = newRow.insertCell(-1);
        link = document.createElement("a");
        link.innerHTML = "Link";
        link.href = last;
        link.setAttribute("target","_blank");
        link.setAttribute("rel","noopener noreferrer");
        newCell.appendChild(link);
    }
}

function loadTableContent(){
    var xhr = new XMLHttpRequest();
    var url = "assets/files/trabalhos_academicos";
    xhr.overrideMimeType("application/json");
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function() {
        if(xhr.readyState == 4 && xhr.status == 200) {
            tabela_content = JSON.parse(xhr.responseText);
            showTable(tabela_content);
        }
    }
    xhr.send(null);
}
