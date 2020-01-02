
let pronouns = ["they","them","their","theirs","themself"];
let name;

// Nice initialization function for lazy people
function onpageload() {
    // Lets use pronouns by default
    document.getElementById("yespronounsradio").checked = true;

    // Get name on start
    name = document.getElementById("namebox").value.toLowerCase();
}

// Quick function to caplitalize strings for my peace of mind
function caplitalizeStrings(strings) {
    for (let i = 0; i < strings.length; i++) {
        strings[i] = strings[i].charAt(0).toUpperCase() + strings[i].slice(1);
    }
    return strings;
}

// Updates global variable 'pronouns' when user edits textbox. Has input culling
function getPronouns() {
    let pns = document.getElementById("pronounbox").value.toLowerCase().replace(/[^a-z/]/g,"");
    pns = pns.split("/", 3);
    pronouns = pns;
    console.log(pronouns);
}

// Updates pronouns when a preset set is selected
function setPresetPronouns() {
    let pns = document.getElementById("preset_pronoun_list").value.toLowerCase().split("_");
    pronouns = pns;
    document.getElementById("pronounbox").value = caplitalizeStrings(pns).join("/");
}

// Updates text with names and pronouns
function updateText() {

}