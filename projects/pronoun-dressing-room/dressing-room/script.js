
let pronouns = ["they","them","their","theirs","themself"];

// Nice initialization function for lazy people
function onpageload() {
    // Lets use pronouns by default
    document.getElementById("yespronounsradio").checked = true;

    // Get name on start
    name = document.getElementById("namebox").value.toLowerCase();
}

// Applies presents to pronoun inputs
function setPresetPronouns() {
    let prns = document.getElementById("preset_pronoun_list").value.split("/");

    document.getElementById("subjective_pronoun_box").value = prns[0];
    document.getElementById("objective_pronoun_box").value = prns[1];
    document.getElementById("posessivedet_pronoun_box").value = prns[2];
    document.getElementById("posessive_pronoun_box").value = prns[3];
    document.getElementById("reflexive_pronoun_box").value = prns[4];
}

// Adds current pronoun inputs to the selected pronoun sets box
function addCurrentPronouns() {
    let prns = ["","","","",""];
    let selected_pronoun_list = document.getElementById("selected_pronoun_list");

    prns[0] = document.getElementById("subjective_pronoun_box").value;
    prns[1] = document.getElementById("objective_pronoun_box").value;
    prns[2] = document.getElementById("posessivedet_pronoun_box").value;
    prns[3] = document.getElementById("posessive_pronoun_box").value;
    prns[4] = document.getElementById("reflexive_pronoun_box").value;

    let pronounsString = prns.join("/");

    let newOption = document.createElement("option");
    newOption.text = pronounsString;
    newOption.value = pronounsString;
    newOption.id = pronounsString;

    selected_pronoun_list.add(newOption);
}

// Removes selected pronoun set from selected pronoun sets box
function removeSelectedPronouns() {
    let prnsToRemove = document.getElementById("selected_pronoun_list").value;

    document.getElementById(prnsToRemove).remove();
}