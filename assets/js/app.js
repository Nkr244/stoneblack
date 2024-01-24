document.addEventListener("DOMContentLoaded", function () {
    var burgerIcon = document.getElementById("burger-icon");
    var menu = document.getElementById("menu");
    var burgerIconClose = document.getElementById("burger-icon-close")

    burgerIcon.addEventListener("click", function () {
        menu.style.right = menu.style.right === "0px" ? "-250px" : "0";
        burgerIcon.style.visibility = 'hidden';
        burgerIconClose.style.display = "block";
    });
    burgerIconClose.addEventListener('click', function () {
        burgerIcon.style.visibility = 'unset';
        burgerIconClose.style.display = "none";
        menu.style.right = menu.style.right === "0" ? "0" : "-100%";
    })
});
document.addEventListener("DOMContentLoaded", function () {
    var gallery = document.getElementById("gallery");
    var modal = document.getElementById("modal");
    var modalImg = document.getElementById("modal-img");
    var closeModal = document.getElementById("close-modal");

    gallery.addEventListener("click", function (event) {
        if (event.target.tagName === "IMG") {
            modal.style.display = "flex";
            modalImg.src = event.target.src;
        }
    });

    closeModal.addEventListener("click", function () {
        modal.style.display = "none";
    });

    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});