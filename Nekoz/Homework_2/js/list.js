let elems = [...document.querySelectorAll("li")];
for (var i = 0; i < elems.length; i++) {
    elems[i].onclick = function(e) {
        e.preventDefault();
        this.classList.toggle("active");
    }
}
