function reloadContent(div, link) {
    var z = document.getElementById(div);
    z.setAttribute("w3-include-html", link);

    // Prevent automatic roll
    document.getElementById("anchor").addEventListener("click", function(event){
        event.preventDefault()
    });
    document.getElementById("anchor").removeEventListener("click", function(event){
        event.preventDefault()
    });

    // Refresh content in div
    includeHTML();
}
