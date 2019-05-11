function imageClick(src) {
    var el = document.getElementById("img-modal");
    el.style.display = "block";
    el.addEventListener("click", () => el.style.display = "none");
    //el.innerHTML = "<div id='img-modal-wrap' style='background-image: url('"+src+"')'></div>";
    el.innerHTML = `<div id="img-modal-wrap" style="background-image: url('${src}')"></div`;
    //<img src='"+src+"' style='width:100%;'/>
}

window.onload = function () {
    var images = document.getElementsByClassName("project-image");
    for (let i = 0; i < images.length; i++) {
        const img = images[i];
        img.addEventListener("click", () => imageClick(img.src));
        var zoom = this.document.createElement("div");
        zoom.classList.add("image-zoom");
        var search = document.createElement("i");
        search.classList.add("fas", "fa-search");
        search.addEventListener("click", (e) => e.stopPropagation());
        zoom.appendChild(search);
        img.parentElement.appendChild(zoom);
    }
}