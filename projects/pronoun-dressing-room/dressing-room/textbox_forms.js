
let textbox_default_innerhtml = `<div class="textbox_textalignmentdiv">
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
<textarea>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</textarea>
</div>
<div class="textbox_buttonbox">
<button onclick="applyEdits(this)">apply</button>
<button onclick="editCell(this)">edit</button>
<button onclick="deleteCell(this)">delete</button>
</div>`;


function deleteCell(clicked_button) {
    let root_textbox = clicked_button.parentElement.parentElement;

    document.getElementById("textholder").removeChild(root_textbox);
}

function editCell(clicked_button) {
    let root_textbox = clicked_button.parentElement.parentElement;

    let cell_p = root_textbox.getElementsByClassName("textbox_textalignmentdiv")[0].getElementsByTagName("P")[0];
    let cell_tarea = root_textbox.getElementsByClassName("textbox_textalignmentdiv")[0].getElementsByTagName("TEXTAREA")[0];

    // console.log(cell_p);
    // console.log(cell_tarea);

    cell_p.style.display = "none";
    cell_tarea.style.display = "block";
}

function applyEdits(clicked_button) {
    let root_textbox = clicked_button.parentElement.parentElement;

    let cell_p = root_textbox.getElementsByClassName("textbox_textalignmentdiv")[0].getElementsByTagName("P")[0];
    let cell_tarea = root_textbox.getElementsByClassName("textbox_textalignmentdiv")[0].getElementsByTagName("TEXTAREA")[0];

    // Apply changes to textbox
    applyPronounsToTextbox(root_textbox);

    cell_p.style.display = "block";
    cell_tarea.style.display = "none";
}

function addCell() {
    let newTextBox = document.createElement("div");
    let adder_button = document.getElementById("adder_button");

    newTextBox.className = "textbox";
    newTextBox.innerHTML = textbox_default_innerhtml;

    document.getElementById("textholder").insertBefore(newTextBox, adder_button);
}

