// NOTE FUNCTION
function showNote() {
    document.getElementById("note").style.display="block";
    document.getElementById("note-btn").style.display="block";
}

function hideNote() {
    document.getElementById("note").style.display="none";
    document.getElementById("note-btn").style.display="none";
}
    

// CHOOSE BUTTON FUNCTION
function comedy() {
    document.getElementById("comedy").style.display="block";
    document.getElementById("horor").style.display="none";
    document.getElementById("reset-btn").style.display="block";
}

function horor() {
    document.getElementById("horor").style.display="block";
    document.getElementById("comedy").style.display="none";
    document.getElementById("reset-btn").style.display="block";
}

function reset() {
    document.getElementById("comedy").style.display="none";
    document.getElementById("horor").style.display="none";
    document.getElementById("reset-btn").style.display="none";
}
