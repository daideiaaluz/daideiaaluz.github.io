function createSearchForm() {
    var container = document.getElementById("search_input_form");
    while (container.lastChild){
        container.removeChild(container.lastChild);
    }

    var div = document.createElement("DIV");
    div.setAttribute("class", "search_box_form");

    var form = document.createElement("FORM");
    form.setAttribute("action", "/busca.html");
    form.setAttribute("method", "GET");

    var element = document.createElement("INPUT");
    element.name = "q";
    element.type = "text";
    element.setAttribute("class", "search_input");
    element.setAttribute("placeholder", "Digite aqui o que deseja buscar.");
    form.appendChild(element);

    var element = document.createElement("BUTTON");
    element.type = "submit";
    element.setAttribute("class", "search_button_modal");
    var i = document.createElement("I");
    i.setAttribute("class", "fa fa-search");
    element.appendChild(i);
    form.appendChild(element);

    div.appendChild(form);
    container.appendChild(div);

    var element = document.createElement("DIV");
    element.id = "search_result";
    element.setAttribute("class", "gcse-searchresults-only");
    container.appendChild(element);
}
