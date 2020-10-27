/**
 * Calcul l'offset entre un élément et les rebords de l'écran
 * 
 * @param {*} el 
 */
function offset(el) {
    var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft, bottom: rect.top + scrollTop + el.offsetHeight }
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

window.onload = function() {
    // mise à l'échelle du header container
    let coverlarge = document.getElementById("cover-large");
    let covermobile = document.getElementById("cover-mobile");
    let headercontainer = document.getElementById("headercontainer");

    headercontainer.style.height = getComputedStyle(coverlarge).display == "block" ? coverlarge.offsetHeight + "px" : covermobile.offsetHeight + "px";

    if (getComputedStyle(coverlarge).display == "block") {
        if (window.innerHeight > coverlarge.offsetHeight) {
            bottombar.style.position = "absolute";
        } else if (window.innerHeight <= coverlarge.offsetHeight) {
            bottombar.style.position = "fixed";
        }
    }

    bottombar.style.display = "flex";
}

window.onscroll = function() {
    let topbar = document.getElementById("topbar");
    let bottombar = document.getElementById("bottombar");

    // topbar color
    let topbarOffset = offset(topbar);
    let bottombarOffset = offset(bottombar);
    let bottombarHeight = bottombar.offsetHeight;
    let opacity = 0;
    if (topbarOffset.bottom < bottombarOffset.top) {
        topbar.style.background = "transparent";
    } else if (topbarOffset.bottom >= bottombarOffset.top) {
        opacity = valueLimit((topbarOffset.bottom - bottombarOffset.top) / bottombarHeight, 0, 1);
        topbar.style.background = "rgb(9,22,37," + opacity + ")";
    }

    // bottombar position 
    let coverlarge = document.getElementById("cover-large");

    if (getComputedStyle(coverlarge).display == "block") {
        if (bottombar.style.position == "fixed" && bottombarOffset.bottom >= coverlarge.offsetHeight) {
            bottombar.style.position = "absolute";
        }
    } else {
        bottombar.style.position = "absolute";
    }
}