function searchTable() {
    var input, filter, table, tr, td, i, txtValue, flag;
    input = document.getElementById("inputSearchTable");
    filter = input.value.toUpperCase();
    table = document.getElementById("tablepress-1");
    tr = table.getElementsByTagName("tr");
    for (i = 1; i < tr.length; i++) {
        for (j = 0; j < 6; j++) {
            td = tr[i].getElementsByTagName("td")[j];
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                    flag = 1;
                }
            }
        }
        if (flag != 1) {
            tr[i].style.display = "none";
        }else{
            flag = 0;
        }
    }
}
