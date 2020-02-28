
let pronouns = [["they","them","their","theirs","themself"]];
let name = "";
let usingPronouns = true;

// Nice initialization function for lazy people
function onpageload() {
    // Lets use pronouns by default
    document.getElementById("yespronounsradio").checked = true;

    // Get default pronoun preset
    setPresetPronouns();

    // Apply settings to textboxes
    submitChanges();
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

// Gets the current settings from the settings box
function getCurrentSettings() {
    // Get name
    name = document.getElementById("namebox").value.trim();

    // Get pronouns
    let options = document.getElementById("selected_pronoun_list").options;
    pronouns = new Array(options.length);
    for (let i = 0; i < options.length; i++) {
        pronouns[i] = new Array(5);

        let prns = options[i].value.toLowerCase().split("/");

        pronouns[i][0] = prns[0];
        pronouns[i][1] = prns[1];
        pronouns[i][2] = prns[2];
        pronouns[i][3] = prns[3];
        pronouns[i][4] = prns[4];
    }

    // Get pronoun settings
    if (pronouns.length === 0) {
        usingPronouns = false;
    }
    else {
        usingPronouns = document.getElementById("yespronounsradio").checked;
    }
    
}

// Tied to the submit changes button
function submitChanges() {

    // Update current settings;
    getCurrentSettings();

    // Update textboxes with current pronouns
    applyPronounsToAllTextboxes();
}

// Applies current settings to a string
function applyPronounsAndNameToText(text) {
    // Application is using pronouns
    if (usingPronouns) {
        // No randomization
        if (pronouns.length === 1) {
            text = text.replace(/{sub}/g, pronouns[0][0]);
            text = text.replace(/{obj}/g, pronouns[0][1]);
            text = text.replace(/{pod}/g, pronouns[0][2]);
            text = text.replace(/{pop}/g, pronouns[0][3]);
            text = text.replace(/{ref}/g, pronouns[0][4]);

            text = text.replace(/{name}/g, name);
        }

        // Apply by sentence randomization
        else {

        }
    }

    // Not using Pronouns, just slap in the name over everything
    else {
        text = text.replace(/{sub}/g, name);
        text = text.replace(/{obj}/g, name);
        text = text.replace(/{pod}/g, name);
        text = text.replace(/{pop}/g, name);
        text = text.replace(/{ref}/g, name);

        text = text.replace(/{name}/g, name);
    }

    return text;
}

function applyPronounsToTextbox(root_textbox) {
    let box_p = root_textbox.getElementsByClassName("textbox_textalignmentdiv")[0].getElementsByTagName("P")[0];
    let box_tarea = root_textbox.getElementsByClassName("textbox_textalignmentdiv")[0].getElementsByTagName("TEXTAREA")[0];

    box_p.innerHTML = applyPronounsAndNameToText(box_tarea.value);
}

function applyPronounsToAllTextboxes() {
    let textboxes = document.getElementsByClassName("textbox");

    for (let b = 0; b < textboxes.length; b++) {
        applyPronounsToTextbox(textboxes[b]);
    }
}