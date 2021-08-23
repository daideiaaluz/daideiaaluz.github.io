function searchTable() {
    var input, filter, table1, table2, table3, td, i, j, k, txtValue, flag, index;
    var tr = [];
    input = document.getElementById("inputSearchTable");
    filter = input.value.toUpperCase();
    table1 = document.getElementById("tablepress-1");
    table2 = document.getElementById("tablepress-2");
    table3 = document.getElementById("tablepress-3");
    tr[0] = table1.getElementsByTagName("tr");
    tr[1] = table2.getElementsByTagName("tr");
    tr[2] = table3.getElementsByTagName("tr");

    for(k = 0; k < 3; k++){
        for (i = 1; i < tr[k].length; i++) {
            for (j = 0; j < 6; j++) {
                td = tr[k][i].getElementsByTagName("td")[j];
                if (td) {
                    txtValue = td.textContent || td.innerText;
                    index = txtValue.toUpperCase().indexOf(filter);
                    if (index > -1) {
                        txtValue = txtValue.substring(0, index) + "<span class='highlight'>" + txtValue.substring(index, index + filter.length) + "</span>" + txtValue.substring(index + filter.length);
                        tr[k][i].style.display = "";
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
                tr[k][i].style.display = "none";
            }else{
                flag = 0;
            }
        }
    }
}
