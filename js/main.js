/**
 * Calcul l'offset entre un élément et les rebords de l'écran
 * 
 * @param {*} el 
 */
function offset(el) {
    var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft, bottom: scrollTop + el.offsetHeight }
}

/**
 * Limit a value between a min and max range
 * 
 * @param {*} val 
 * @param {*} min 
 * @param {*} max 
 */
function valueLimit(val, min, max) {
    return val < min ? min : (val > max ? max : val);
}

/**
 * Expands the text on the Future, Love & Death page
 * 
 */
function expandText() {
    document.getElementById("texttoexpand").style.display = "block";
    document.getElementById("expand").style.display = "none";
    document.getElementById("unexpand").style.display = "inline-block";
}

/**
 * "Unexpands" the text on the Future, Love & Death page
 * 
 */
function unexpandText() {
    document.getElementById("texttoexpand").style.display = "none";
    document.getElementById("unexpand").style.display = "none";
    document.getElementById("expand").style.display = "inline-block";
}

window.onscroll = function() {
    let topbarOffset = offset(document.getElementById("topbar"));
    let bottombarOffset = offset(document.getElementById("bottombar"));
    let bottombarHeight = document.getElementById("bottombar").offsetHeight;
    let opacity = 0;
    if (topbarOffset.bottom < bottombarOffset.top) {
        document.getElementById("topbar").style.background = "transparent";
    } else if (topbarOffset.bottom >= bottombarOffset.top) {
        opacity = valueLimit((topbarOffset.bottom - bottombarOffset.top) / bottombarHeight, 0, 1);
        document.getElementById("topbar").style.background = "rgb(9,22,37," + opacity + ")";
    }
}