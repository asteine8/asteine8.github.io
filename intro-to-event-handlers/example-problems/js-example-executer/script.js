// remove all event listeners for object in question
function removeEventListeners(id) {
    let el = document.getElementById(id), elClone = el.cloneNode(true);
    el.parentNode.replaceChild(elClone, el);
}
function removeEventListenersForClass(className) {
    let els = document.getElementsByClassName(className);
    for (let element of els) {
        let el = element, elClone = el.cloneNode(true);
        el.parentNode.replaceChild(elClone, el);
    }
}

document.getElementById('executeButton').addEventListener('click', (e) => {
    removeEventListeners('codespace');

    // try to execute code
    try{
        eval(document.getElementById('codespace').value);
    } catch (error) {
        alert(error);
    }
});

let showingSolution = false;
let savedUserText = "";
document.getElementById("showSolution").addEventListener('click', (e) => {
    if (showingSolution) {
        document.getElementById('codespace').value = savedUserText;
        showingSolution = false;
    }
    else {
        savedUserText = document.getElementById('codespace').value;
        document.getElementById('codespace').value = document.getElementById('solutionText').value;
        showingSolution = true;
    }
});