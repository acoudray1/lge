window.onscroll = function() {
    /*var nav = document.getElementById('nav');
    if ( window.pageYOffset > 100 ) {
        nav.classList.add("navbar1");
    } else {
        nav.classList.remove("navbar1");
    }*/
    document.getElementById("topbar").style.background = black;
}

window.onload(function(load) {
    window.addEventListener('scroll', function(evt) {
        console.log('test');
    });
});

console.log('ok');

function expandText() {
    document.getElementById("texttoexpand").style.display = "block";
    document.getElementById("expand").style.display = "none";
}