function imageClick(src) {
    var el = document.getElementById("img-modal");
    el.style.display = "block";
    el.addEventListener("click", () => el.style.display = "none");
    el.innerHTML = "<img src='"+src+"' style='width:100%;'/>";
}

window.onload = function () {
    var images = document.getElementsByTagName("img");
    for (let i = 0; i < images.length; i++) {
        const img = images[i];
        img.addEventListener("click", () => imageClick(img.src));
        var zoom = this.document.createElement("div");
        zoom.classList.add("image-zoom");
        zoom.innerHTML="<i class='fas fa-search-plus'></i>";
        img.parentElement.appendChild(zoom);
    }
}