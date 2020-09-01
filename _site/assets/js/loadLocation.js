function applyLocation(location_content) {
    for (var i = 0; i < location_content.length; i++) {
        let d = location_content[i];
        let values = Object.values(d);

        var l2 = values.pop();
        var l1 = values.pop();
        var link = values.pop();
        var name = values.pop();

        var string = "<b>" + name + "</b><br /><a href='" + link + "'>Perfil</a>"

        L.marker([l1, l2]).addTo(mymap)
        .bindPopup(string);
    }


}

function loadLocation() {
    var xhr = new XMLHttpRequest();
    var url = "assets/files/localizacoes_mapa";
    xhr.overrideMimeType("application/json");
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function() {
        if(xhr.readyState == 4 && xhr.status == 200) {
            location_content = JSON.parse(xhr.responseText);
            applyLocation(location_content);
        }
    }
    xhr.send(null);
}
