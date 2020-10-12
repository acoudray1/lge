window.addEventListener('scroll', () => {
    console.log('test');
});

function expandText() {
    document.getElementById("texttoexpand").style.display = "block";
    document.getElementById("expand").style.display = "none";
}