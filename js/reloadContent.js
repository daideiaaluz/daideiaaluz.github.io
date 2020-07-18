function reloadContent(div, link) {
    console.log(div, link);
    var z = document.getElementById(div);
    z.setAttribute("w3-include-html", link);

    // Refresh content in div
    includeHTML();
}
