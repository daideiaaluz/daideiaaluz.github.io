function loadLocation() {
    var table, tr, td, i, j, txtValue, l1, l2, link, name;
    table = document.getElementById("temporary-table");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        for (j = 0; j < 4; j++) {
            td = tr[i].getElementsByTagName("td")[j];

            txtValue = td.textContent || td.innerText;
            switch (j) {
                case 0:
                    name = txtValue;
                    break;
                case 1:
                    link = txtValue;
                    break;
                case 2:
                    l1 = txtValue;
                    break;
                case 3:
                    l2 = txtValue;
                    break;
            }
        }

        var string = "<b>" + name + "</b><br /><a href='" + link + "'>Perfil</a>"

        L.marker([l1, l2]).addTo(mymap).bindPopup(string);
    }

    table.parentNode.removeChild(table);
}
