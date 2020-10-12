function offset(el) {
    var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft, bottom: scrollTop + el.offsetHeight }
}

window.onscroll = function() {
    let topbarOffset = offset(document.getElementById("topbar"));
    let bottombarOffset = offset(document.getElementById("bottombar"));
    if (topbarOffset.bottom < bottombarOffset.top) {
        document.getElementById("topbar").style.background = "transparent";
    } else if (topbarOffset.bottom >= bottombarOffset.top) {
        document.getElementById("topbar").style.background = "black";
    }
 }

function expandText() {
    document.getElementById("texttoexpand").style.display = "block";
    document.getElementById("expand").style.display = "none";
}