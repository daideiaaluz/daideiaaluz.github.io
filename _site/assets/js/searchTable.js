function searchTable() {
    var input, filter, table, tr, td, i, txtValue, flag, index;
    input = document.getElementById("inputSearchTable");
    filter = input.value.toUpperCase();
    table = document.getElementById("tablepress-1");
    tr = table.getElementsByTagName("tr");
    for (i = 1; i < tr.length; i++) {
        for (j = 0; j < 6; j++) {
            td = tr[i].getElementsByTagName("td")[j];
            if (td) {
                txtValue = td.textContent || td.innerText;
                index = txtValue.toUpperCase().indexOf(filter);
                if (index > -1) {
                    txtValue = txtValue.substring(0, index) + "<span class='highlight'>" + txtValue.substring(index, index + filter.length) + "</span>" + txtValue.substring(index + filter.length);
                    tr[i].style.display = "";
                    flag = 1;
                }else{
                    if (td.children.length > 0) {
                        index = index + 1;
                        txtValue = txtValue.substring(0, index) + "<span class='highlight'>" + txtValue.substring(index, index + filter.length) + "</span>" + txtValue.substring(index + filter.length);
                    }
                }
                td.innerHTML = txtValue;
            }
        }
        if (flag != 1) {
            tr[i].style.display = "none";
        }else{
            flag = 0;
        }
    }
}
