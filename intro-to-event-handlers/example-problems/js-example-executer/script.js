// remove all event listeners for object in question
function removeEventListeners(id) {
    let el = document.getElementById(id), elClone = el.cloneNode(true);
    el.parentNode.replaceChild(elClone, el);
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